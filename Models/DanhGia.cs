using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class DanhGia
    {
        [ForeignKey("MaTour")]
        public int MaTour { get; set; }
        
        public Tour? Tour { get; set; }

        [ForeignKey("MaTK")]
        public int MaTK { get; set; }
       
        public TaiKhoan? TaiKhoan { get; set; }


        public string? NoiDungDanhGia { get; set; }
        public float? SoSao { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime ThoiGianDanhGia { get; set; }
        
    }
}
