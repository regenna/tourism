using Microsoft.AspNetCore.Mvc;
using web_do_an.Models.Model_TT;
using web_do_an.Models;
using web_do_an.Models.View_Model;

namespace web_do_an.Controllers
{
    public class ChiTietController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ChiTietController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var viewmodel = new TourViewModel
            {
                Tours = _context.Tours,
                lichTrinhs = _context.LichTrinhs,
                loaiTours = _context.LoaiTours,
                chiTietPhuongTiens = _context.ChiTietPhuongTiens,
                phuongTienDCs = _context.PhuongTienDCs,
                chiTietLichTrinhs = _context.ChiTietLichTrinhs,
                diemDens = _context.DiemDens
            };

            return View(viewmodel);
        }
    }
}
