using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class Tour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaTour { get; set; }

        public string TenTour { get; set; }
        public int SoNgay { get; set; }
        public int SoDem { get; set; }
        public string DichVuTour { get; set; }
        public float Gia { get; set; }
        public string AnhDaiDien { get; set; }

        public string MoTaTour { get; set; }

        public int TrangThaiTour { get; set; }

        public int MaLoai { get; set; }
        public LoaiTour? LoaiTour { get; set; }

        public int MaDKH { get; set; }
        public DiemKhoiHanh? DiemKhoiHanh { get; set; }

        public int MaDD { get; set; }
        public DiemDen? DiemDen { get; set; }



    }
}
