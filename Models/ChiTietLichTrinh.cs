using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class ChiTietLichTrinh
    {
        public char MaLT { get; set; }
        [ForeignKey("MaLT")]
        public LichTrinh? LichTrinh { get; set; }


        public char MaDD { get; set; }
        [ForeignKey("MaDD")]
        public DiemDen? DiemDen { get; set; }


        public DateTime Ngay { get; set; }

    }
}
