using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class ChiTietPhuongTien
    {

        [ForeignKey("MaCTTour")]

        public int MaCTTour { get; set; }

        public ChiTietTour? ChiTietTour { get; set; }

        [ForeignKey("MaPT")]
        public int MaPT { get; set; }

        public PhuongTienDC? PhuongTienDC { get; set; }

        public int TongSL { get; set; }
    }
}
