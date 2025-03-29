using web_do_an.Models.Model_TT;

namespace web_do_an.user
{
    public class user_TK
    {
        public readonly ApplicationDbContext _context;

        public user_TK(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }



        public TaiKhoan? GetTaiKhoan(string tentk)
        {
            return _context.TaiKhoans.FirstOrDefault( x=> x.TenTK == tentk);
        }

        public List<TaiKhoan> getList()
        {
            return _context.TaiKhoans.ToList();
        }


        public void AddTaiKhoan(TaiKhoan tk)
        {
            _context.TaiKhoans.Add(tk);
            _context.SaveChanges();
            
        }

        public void UpdateTaiKhoan(TaiKhoan tk)
        {
            var us = _context.TaiKhoans.FirstOrDefault(x => x.MaTK == tk.MaTK);

            us.MatKhau = tk.MatKhau;
            us.TenKH = tk.TenKH;
            us.DC = tk.DC;
            us.SDT = tk.SDT;
            us.Image = tk.Image;

            _context.SaveChanges();
 

        }

        public int Login(string tentk, string password)
        {
            var user = _context.TaiKhoans.FirstOrDefault(x => x.TenTK == tentk);
            if (user == null)
            {
                return -2;// tài khoản không tồn tại
            }
            else
            {
                if (user.TrangThaiTK == false)
                {
                    return 0;// tài khoản bị khóa
                }
                else
                {
                    if (user.MatKhau == password)
                    {
                        return 1;// đăng nhâp   thành công
                    }
                    else
                    {
                        return -1;// sai mật khẩu
                    }
                }
            }
        }


    }
}
