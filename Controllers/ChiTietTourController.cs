using Microsoft.AspNetCore.Mvc;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Controllers
{
    public class ChiTietTourController : Controller
    {
        private readonly ITourRepository _tourRepository;
        private readonly ILoaiTourRepository _loaiTourRepository;        
        private readonly IChiTietTourRepository _chiTietTourRepository;
        private readonly ILichTrinhRepository _lichTrinhRepository;
        private readonly IDiemKhoiHanhRepository _diemKhoiHanhRepository;
       
        private readonly IDiemDenRepository _diemDenRepository;
        private readonly IChiTietPhuongTienRepository _chiTietPhuongTienRepository;
        private readonly IPhuongTienDCRepository _phuongTienDCRepository;

        public ChiTietTourController(ITourRepository tourRepository, ILoaiTourRepository loaiTourRepository, IChiTietTourRepository chiTietTourRepository, ILichTrinhRepository lichTrinhRepository, IDiemKhoiHanhRepository diemKhoiHanhRepository, IDiemDenRepository diemDenRepository, IChiTietPhuongTienRepository chiTietPhuongTienRepository, IPhuongTienDCRepository phuongTienDCRepository)
        {
            _tourRepository = tourRepository;
            _loaiTourRepository = loaiTourRepository;
            _chiTietTourRepository = chiTietTourRepository;
            _lichTrinhRepository = lichTrinhRepository;
            _diemKhoiHanhRepository = diemKhoiHanhRepository;
           
            _diemDenRepository = diemDenRepository;
            _chiTietPhuongTienRepository = chiTietPhuongTienRepository;
            _phuongTienDCRepository = phuongTienDCRepository;
        }

        public async Task<IActionResult> Index(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "Home");  // Hoặc chuyển hướng đến trang khác phù hợp
            }
            
            var tour = await _tourRepository.GetByIdAsync(id.Value);
            if (tour == null)
            {
                return NotFound();
            }

            var loaitour = await _loaiTourRepository.GetByIdAsync(tour.MaLoai);
            var chitiettour = await _chiTietTourRepository.GetByIdAsync(tour.MaTour);
            var lichtrinh = await _lichTrinhRepository.GetByIdAsync(tour.MaTour);
           
            var diemkhoihanh = await _diemKhoiHanhRepository.GetByIdAsync(tour.MaTour);
            var chiTietphuongtien = await _chiTietPhuongTienRepository.GetByIdAsync(tour.MaTour);
            var phuongtiendc = await _phuongTienDCRepository.GetByIdAsync(tour.MaTour);
            var diemden = await _diemDenRepository.GetByIdAsync(tour.MaTour);


            ViewBag.LoaiTour = loaitour;
            ViewBag.ChiTietTour = chitiettour;
            ViewBag.LichTrinh = lichtrinh;
            
            ViewBag.DiemKhoiHanh = diemkhoihanh;
            ViewBag.ChiTietPhuongTien = chiTietphuongtien;
            ViewBag.PhuongTienDC = phuongtiendc;
            ViewBag.DiemDen = diemden;
            ViewBag.Tour = tour;




            return View();
        }

    }
}
