using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class DanhGia
    {
        public char MaTour { get; set; }
        [ForeignKey("MaTour")]
        public Tour? Tour { get; set; }


        public char MaTK { get; set; }
        [ForeignKey("MaTK")]
        public TaiKhoan? TaiKhoan { get; set; }


        public string NoiDungDanhGia { get; set; }
        public float SoSao { get; set; }
        
        public DateTime ThoiGianDanhGia { get; set; }
        
    }
}
