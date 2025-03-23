using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IChiTietPhuongTienRepository
    {
        Task<IEnumerable<ChiTietPhuongTien>> GetAllAsync();
        Task<ChiTietPhuongTien> GetByIdAsync(int id);
        Task<ChiTietPhuongTien> GetByIdAsync(int id, int maLT);
        Task AddAsync(ChiTietPhuongTien chitietphuongtien);
        Task UpdateAsync(ChiTietPhuongTien chitietphuongtien);
        Task DeleteAsync(int id);
    }
}
