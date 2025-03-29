using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class DiemDen
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaDD { get; set; }

        public string TenDD { get; set; }
        public string MoTa { get; set; }

        public string HinhAnh { get; set; }

        public ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }
    }
}
