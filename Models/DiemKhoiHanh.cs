using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class DiemKhoiHanh
    {
        [Key]

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaDKH { get; set; }

        
        public string TenDKH { get; set; }
     
        public string DC { get; set; }
    }
}
