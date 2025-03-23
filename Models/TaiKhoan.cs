using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class TaiKhoan
    {
        [Key]
        public char MaTK { get; set; }
        public string TenKH { get; set; }
        public string MatKhau { get; set; }
        public string DC { get; set; }
        public string SDT { get; set; }
        public string SoTourDaDat { get; set; }
        public string LoaiTK { get; set; }

        public int TrangThaiTK { get; set; }

        public ICollection<DanhGia> DanhGias { get; set; }
    }
}
