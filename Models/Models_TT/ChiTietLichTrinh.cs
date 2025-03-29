using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class ChiTietLichTrinh
    {
        [ForeignKey("MaLT")]
        public int MaLT { get; set; }

        public LichTrinh? LichTrinh { get; set; }

        [ForeignKey("MaDD")]
        public int MaDD { get; set; }

        public DiemDen? DiemDen { get; set; }


        public DateTime Ngay { get; set; }

    }
}
