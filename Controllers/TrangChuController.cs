using Microsoft.AspNetCore.Mvc;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Controllers
{
    public class TrangChuController : Controller
    {
        private readonly ITourRepository _tourRepository;
        private readonly ILoaiTourRepository _loaiTourRepository;

        public TrangChuController(ITourRepository tourRepository, ILoaiTourRepository loaiTourRepository)
        {
            _tourRepository = tourRepository;
            _loaiTourRepository = loaiTourRepository;

        }

        public async Task<IActionResult> Index()
        {
            var tours = await _tourRepository.GetAllAsync();
            return View(tours);
        }


        public async Task<IActionResult> Details(int id)
        {
            var tour = await _tourRepository.GetByIdAsync(id);
            if (tour == null)
            {
                return NotFound();
            }
            return View(tour);
        }

    }
}
