using System.ComponentModel.DataAnnotations;

namespace web_do_an.Models
{
    public class LichTrinh
    {
        [Key]
        public char MaLT { get; set; }
        [Required, StringLength(10)]

        public string TenLT { get; set; }

        public string HoatDongSang { get; set; }
        public string HoatDongTrua { get; set; }
        public string HoatDongChieu { get; set; }
        public string TeHoatDongToi { get; set; }


        public char MaCTTour { get; set; }
        public ChiTietTour? ChiTietTour { get; set; }


        public ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }

    }
}
