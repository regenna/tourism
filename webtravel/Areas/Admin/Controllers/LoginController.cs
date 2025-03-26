using Microsoft.AspNetCore.Mvc;
using Model.DAO;
using Newtonsoft.Json;
using webtravel.Areas.Admin.Models;
using webtravel.Commons;

namespace webtravel.Areas.Admin.Controllers
{
    [Area("Admin")]

    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var dao = new user_Dao();
                var result = dao.Login(model.TenTK, model.MatKhau);

                if(result == 1)
                {
                    var user = dao.getItem(model.TenTK);
                    var session = new UserLogin();
                    session.TenTK = user.TenTK;
                    session.MaTK = user.MaTK;
                    session.TenKH = user.TenKH;
                    HttpContext.Session.SetString(KhaiCode.USER_SESSION, JsonConvert.SerializeObject(session)); //lưu vào session

                    /*
                     
                     var sessionData = HttpContext.Session.GetString(KhaiCode.USER_SESSION);
                        if (!string.IsNullOrEmpty(sessionData))
                        {
                            var userSession = JsonConvert.DeserializeObject<UserLogin>(sessionData);
                            // Sử dụng userSession.TenTK, userSession.MaTK, ...
                        }

                     */

                    return RedirectToAction("Index", "Home");
                }
                else if(result == 0)
                {
                    ModelState.AddModelError("", "Tài khoản bị khóa. Vui lòng liên hệ Admin");
                }
                else if(result == -1)
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
