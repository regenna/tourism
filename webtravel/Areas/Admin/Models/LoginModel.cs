using System.ComponentModel.DataAnnotations;

namespace webtravel.Areas.Admin.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Vui lòng nhập tên tài khoản")]
        public string TenTK { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu")]
        public string MatKhau { get; set; }

        public bool RememberMe { get; set; }
    }
}
