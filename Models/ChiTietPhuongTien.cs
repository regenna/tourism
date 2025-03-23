using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class ChiTietPhuongTien
    {
        public char MaCTTour { get; set; }
        [ForeignKey("MaCTTour")]
        public ChiTietTour? ChiTietTour { get; set; }

        public char MaPT { get; set; }
        [ForeignKey("MaPT")]
        public PhuongTienDC? PhuongTienDC { get; set; }

        public int TongSL { get; set; }
    }
}
