using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface ITaiKhoanRepository
    {
        Task<IEnumerable<TaiKhoan>> GetAllAsync();
        Task<TaiKhoan> GetByIdAsync(int id);
        Task AddAsync(TaiKhoan taikhoan);
        Task UpdateAsync(TaiKhoan taikhoan);
        Task DeleteAsync(int id);
    }
}
