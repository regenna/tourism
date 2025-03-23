using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class Tour
    {
        [Key]
        [Required, StringLength(10)]
        public char MaTour { get; set; }
        
        public string TenTour { get; set; }
        public int SoNgay { get; set; }
        public int SoDem { get; set; }
        public string DichVuTour { get; set; }
        public float Gia { get; set; }
        public string AnhDaiDien { get; set; }

        public string MoTaTour { get; set; }

        public string TrangThaiTour { get; set; }

        public char MaLoai { get; set; }
        public LoaiTour? LoaiTour { get; set; }

        public ICollection<DanhGia> DanhGias { get; set; }

    }
}
