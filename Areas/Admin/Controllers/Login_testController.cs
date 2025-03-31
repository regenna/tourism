using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using web_do_an.Areas.Admin.Models;
using web_do_an.Commons;
using web_do_an.user;

namespace web_do_an.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class Login_testController : Controller
    {
        private readonly user_TK _userTK;
        public Login_testController(user_TK userTK)
        {
            _userTK = userTK;
        }
        public IActionResult Index()
        {

            return View();
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
           

            return View("Index");
        }

    }
}
