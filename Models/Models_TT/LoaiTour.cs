
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class LoaiTour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaLoai { get; set; }


        public string TenLoai { get; set; }

    }
}
