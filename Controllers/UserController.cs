using Microsoft.AspNetCore.Mvc;

namespace web_do_an.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
