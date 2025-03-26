using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.EF;

namespace Model.DAO
{

    public class user_Dao
    {
        BookingDbContext db = null;

        public user_Dao()
        {
            db = new BookingDbContext();
        }

        public TaiKhoan getItem (string tentk)
        {
            return db.TaiKhoans.FirstOrDefault(x=>x.TenTK==tentk);

        }

        public List<TaiKhoan> getList()
        {
            return db.TaiKhoans.ToList();
        }

        public TaiKhoan Add(TaiKhoan user)
        {
            db.TaiKhoans.Add(user);
            db.SaveChanges();
            return user;
        }

        public TaiKhoan Update(TaiKhoan user)
        {
            var us = db.TaiKhoans.FirstOrDefault(x => x.MaTK == user.MaTK);
            us.MatKhau = user.MatKhau;
            us.TenKH = user.TenKH;
            us.SDT = user.SDT;
            us.DC = user.DC;
            us.SoTourDaDat = user.SoTourDaDat;
            us.Image = user.Image;
            us.UpdateDate = user.UpdateDate;
            db.SaveChanges();
            return user;
        }

        public int Login(string tentk, string password)
        {
            var user = db.TaiKhoans.FirstOrDefault(x => x.TenTK == tentk);
            if (user == null)
            {
                return -2;// tài khoản không tồn tại
            }
            else
            {
                if (user.Status == false)
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
