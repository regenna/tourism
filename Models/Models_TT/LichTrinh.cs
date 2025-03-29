using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models.Model_TT
{
    public class LichTrinh
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaLT { get; set; }


        public string TenLT { get; set; }

        public string HoatDongSang { get; set; }
        public string HoatDongTrua { get; set; }
        public string HoatDongChieu { get; set; }
        public string TeHoatDongToi { get; set; }


        public int MaCTTour { get; set; }
        public ChiTietTour? ChiTietTour { get; set; }


        public ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }

    }
}
