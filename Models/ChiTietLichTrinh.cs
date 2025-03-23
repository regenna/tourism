using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class ChiTietLichTrinh
    {
        [ForeignKey("MaLT")]
        public char MaLT { get; set; }
        
        public LichTrinh? LichTrinh { get; set; }

        [ForeignKey("MaDD")]
        public char MaDD { get; set; }
        
        public DiemDen? DiemDen { get; set; }


        public DateTime Ngay { get; set; }

    }
}
