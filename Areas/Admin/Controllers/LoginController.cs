using Microsoft.AspNetCore.Mvc;

namespace WebTravel.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string username, string password)
        {
            // Xử lý logic đăng nhập
            return View();
        }
    }
} 