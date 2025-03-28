using System.ComponentModel.DataAnnotations;

namespace web_do_an.Areas.Admin.Models
{
    public class SignUpModel
    {
        [Required(ErrorMessage = "Tên tài khoản là bắt buộc.")]
        public string TenTK { get; set; }

        [Required(ErrorMessage = "Email là bắt buộc.")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Số điện thoại là bắt buộc.")]
        public string SDT { get; set; }

        [Required(ErrorMessage = "Mật khẩu là bắt buộc.")]
        public string MatKhau { get; set; }
    }
}
