using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class ChiTietPhuongTien
    {

        [ForeignKey("MaCTTour")]

        public char MaCTTour { get; set; }
        
        public ChiTietTour? ChiTietTour { get; set; }

        [ForeignKey("MaPT")]
        public char MaPT { get; set; }
        
        public PhuongTienDC? PhuongTienDC { get; set; }

        public int TongSL { get; set; }
    }
}
