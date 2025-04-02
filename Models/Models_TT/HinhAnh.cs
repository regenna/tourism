using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using web_do_an.Models.Model_TT;

namespace web_do_an.Models.Models_TT
{
    public class HinhAnh
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaHinhAnh { get; set; }

        public string TenHinhAnh { get; set; }

        public int MaTour { get; set; }
        public Tour? tour { get; set; }
    }
}
