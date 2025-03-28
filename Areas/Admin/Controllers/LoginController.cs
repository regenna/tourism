using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using web_do_an.Areas.Admin.Models;
using web_do_an.Commons;
using web_do_an.Models;
using web_do_an.user;

namespace web_do_an.Areas.Admin.Controllers
{
    [Area("Admin")]

    public class LoginController : Controller
    {
        private readonly user_TK _userTK;
        public LoginController(user_TK userTK)
        {
            _userTK = userTK;
        }
        public IActionResult Index()
        {
            var viewModel = new LoginSignUpViewModel
            {
                LoginModel = new LoginModel(),
                SignUpModel = new SignUpModel()
            };
            return View(viewModel);
        }

        [HttpPost]
        public IActionResult Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var result = _userTK.Login(model.TenTK, model.MatKhau);

                if (result == 1)
                {
                    var user = _userTK.GetTaiKhoan(model.TenTK);
                    if (user != null)
                    {
                        var session = new UserLogin
                        {
                            TenTK = user.TenTK,
                            MaTK = user.MaTK,
                            TenKH = user.TenKH
                        };
                        HttpContext.Session.SetString(User_session.USER_SESSION, JsonConvert.SerializeObject(session)); // Lưu vào session

                        return RedirectToAction("Index", "HomeAdmin");
                    }
                }
                else if (result == 0)
                {
                    ModelState.AddModelError("", "Tài khoản bị khóa. Vui lòng liên hệ Admin");
                }
                else if (result == -1)
                {
                    ModelState.AddModelError("", "Mật khẩu không đúng vui lòng kiểm tra lại");
                }
                else if (result == -2)
                {
                    ModelState.AddModelError("", "Tài khoản không tồn tại");
                }
                else
                {
                    ModelState.AddModelError("", "Đăng nhập không đúng");
                }
            }
            if (!ModelState.IsValid)
            {
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    Console.WriteLine(error.ErrorMessage); // Log lỗi ra console
                }
                ModelState.AddModelError("", "Thông tin không hợp lệ. Vui lòng kiểm tra lại.");
            }

            var viewModel = new LoginSignUpViewModel
            {
                LoginModel = model,
                SignUpModel = new SignUpModel()
            };
            return View("Index", viewModel);
        }


        [HttpPost]
        public IActionResult Create(SignUpModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    // Kiểm tra tài khoản đã tồn tại
                    var existingUser = _userTK.GetTaiKhoan(model.TenTK);
                    if (existingUser != null)
                    {
                        ModelState.AddModelError("", "Tài khoản đã tồn tại. Vui lòng chọn tên tài khoản khác.");
                        return View("Index", new LoginSignUpViewModel { SignUpModel = model, LoginModel = new LoginModel() });
                    }

                    // Chuyển đổi từ SignUpModel sang TaiKhoan
                    var taiKhoan = new TaiKhoan
                    {
                        TenTK = model.TenTK,
                        MatKhau = EncryptMK.GetHashMD5(model.MatKhau), // Mã hóa mật khẩu
                        Email = model.Email,
                        SDT = model.SDT,
                        TrangThaiTK = true // Mặc định tài khoản được kích hoạt
                    };

                    // Thêm tài khoản vào cơ sở dữ liệu
                    _userTK.AddTaiKhoan(taiKhoan);

                    TempData["SuccessMessage"] = "Tài khoản đã được tạo thành công!";
                    return RedirectToAction("Index", "HomeAdmin");
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError("", "Đã xảy ra lỗi khi thêm tài khoản: " + ex.Message);
                }
            }
            if (!ModelState.IsValid)
            {
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    Console.WriteLine(error.ErrorMessage); // Log lỗi ra console
                }
                ModelState.AddModelError("", "Thông tin không hợp lệ. Vui lòng kiểm tra lại.");
            }

            return View("Index", new LoginSignUpViewModel { SignUpModel = model, LoginModel = new LoginModel() });
        }

    }


}

