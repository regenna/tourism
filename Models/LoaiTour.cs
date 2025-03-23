
using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class LoaiTour
    {
        [Key]
        public char MaLoai { get; set; }
        [Required, StringLength(10)]

        public string TenLoai { get; set; }

    }
}
