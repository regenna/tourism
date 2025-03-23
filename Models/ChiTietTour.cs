using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class ChiTietTour
    {
        [Key]
        public char MaCTTour { get; set; }
        [Required, StringLength(10)]
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
