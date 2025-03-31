using Microsoft.AspNetCore.Mvc;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Controllers
{
    public class TrangChuController : Controller
    {
        private readonly ITourRepository _tourRepository;
       

        public TrangChuController(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
           

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
