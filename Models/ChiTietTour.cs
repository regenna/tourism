using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class ChiTietTour
    {
        [Key]
        [Required, StringLength(10)]
        public char MaCTTour { get; set; }
        
        public DateTime NgayKhoiHanh { get; set; }
        public DateTime NgayKetThuc { get; set; }
        public int SoChoDaDat { get; set; }


        public char MaTour { get; set; }
        public Tour? Tour { get; set; }


        public char MaDKH { get; set; }
        public DiemKhoiHanh? DiemKhoiHanh { get; set; }

        public ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }

    }
}
