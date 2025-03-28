using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Sockets;

namespace web_do_an.Models
{
    public class TaiKhoan
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaTK { get; set; }
        [Required(ErrorMessage = "Tên tài khoản là bắt buộc.")]
        public string TenTK { get; set; }
        public string TenKH { get; set; }
        [Required(ErrorMessage = "Mật khẩu là bắt buộc.")]
        public string MatKhau { get; set; }
        [Required(ErrorMessage = "Email là bắt buộc.")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ.")]
        public string? Email { get; set; }

        public string? Image { get; set; }

        public string? DC { get; set; }
        [Required(ErrorMessage = "Số điện thoại là bắt buộc.")]
        public string? SDT { get; set; }
        public string? SoTourDaDat { get; set; }
        public string LoaiTK { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Chỉ gán giá trị khi tạo mới
        public DateTime CreatedDate { get; set; }

        public bool? TrangThaiTK { get; set; }

        public ICollection<DanhGia> DanhGias { get; set; }
    }
}
