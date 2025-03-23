using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class DiemDen
    {
        [Key]
        [Required, StringLength(10)]
        public char MaDD { get; set; }
        
        public string TenDD { get; set; }
        public string MoTa { get; set; }

        public string HinhAnh { get; set; }

        public ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }
    }
}
