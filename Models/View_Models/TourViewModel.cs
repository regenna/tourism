using web_do_an.Models.Model_TT;

namespace web_do_an.Models.View_Model
{
    public class TourViewModel
    {
        public IEnumerable<Tour> Tours { get; set; }
        public IEnumerable<LichTrinh> lichTrinhs { get; set; }

        public IEnumerable<LoaiTour> loaiTours { get; set; }
        public IEnumerable<ChiTietPhuongTien> chiTietPhuongTiens { get; set; }
        public IEnumerable<PhuongTienDC> phuongTienDCs { get; set; }
     
        public IEnumerable<DiemDen> diemDens { get; set; }


    }
}
