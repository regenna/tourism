using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class PhuongTienDC
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaPT { get; set; }
       

        public string TenPT { get; set; }
        public int SoLuongCho { get; set; }

        public ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
    }
}
