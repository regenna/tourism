using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class PhuongTienDC
    {
        [Key]
        [Required, StringLength(10)]
        public char MaPT { get; set; }
       

        public string TenPT { get; set; }
        public int SoLuongCho { get; set; }

        public ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
    }
}
