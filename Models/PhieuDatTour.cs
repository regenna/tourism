using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class PhieuDatTour
    {
        [Key]
        public char MaPDT { get; set; }
        [Required, StringLength(10)]

        public int SoNguoi { get; set; }
        public DateTime NgayDat { get; set; }
        public float TongTien { get; set; }
        public string DichVuTour { get; set; }

        public int TrangThaiPDT { get; set; }


        public char MaTK { get; set; }
        public TaiKhoan? TaiKhoan { get; set; }


        public char MaCTTour { get; set; }
        public ChiTietTour? ChiTietTour { get; set; }

    }
}
