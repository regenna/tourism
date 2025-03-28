using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_do_an.Areas.Admin.Models
{
    
        public class LoginModel
        {
            [Required(ErrorMessage = "Tên tài khoản là bắt buộc.")]
            public string TenTK { get; set; }

            [Required(ErrorMessage = "Mật khẩu là bắt buộc.")]
            public string MatKhau { get; set; }

            public bool RememberMe { get; set; }
        }
    
}
