using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class PhieuDatTour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaPDT { get; set; }
        

        public int SoNguoi { get; set; }
        public DateTime NgayDat { get; set; }
        public float TongTien { get; set; }
        public string DichVuTour { get; set; }

        public bool? TrangThaiPDT { get; set; }


        public int MaTK { get; set; }
        public TaiKhoan? TaiKhoan { get; set; }


        public int MaCTTour { get; set; }
        public ChiTietTour? ChiTietTour { get; set; }

    }
}
