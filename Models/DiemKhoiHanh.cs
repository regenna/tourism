using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class DiemKhoiHanh
    {
        [Key]

        [Required, StringLength(10)]
        public char MaDKH { get; set; }

        [MaxLength(10)]
        public int SDT { get; set; }
      

        public string TenDKH { get; set; }
     
        public string DC { get; set; }
    }
}
