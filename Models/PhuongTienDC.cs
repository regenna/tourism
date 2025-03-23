using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class PhuongTienDC
    {
        [Key]
        public char MaPT { get; set; }
        [Required, StringLength(10)]

        public string TenPT { get; set; }
        public int SoLuongCho { get; set; }

        public ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
    }
}
