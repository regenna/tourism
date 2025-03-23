
using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class LoaiTour
    {
        [Key]
        [Required, StringLength(10)]
        public char MaLoai { get; set; }
        

        public string TenLoai { get; set; }

    }
}
