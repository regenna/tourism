using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Models
{
    public class ChiTietTour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaCTTour { get; set; }
        
        public DateTime NgayKhoiHanh { get; set; }
        public DateTime NgayKetThuc { get; set; }
        public int SoChoDaDat { get; set; }


        public int MaTour { get; set; }
        public Tour? Tour { get; set; }


        public int MaDKH { get; set; }
        public DiemKhoiHanh? DiemKhoiHanh { get; set; }

        public ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }

    }
}
