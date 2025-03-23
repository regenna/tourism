using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IDiemKhoiHanhRepository
    {
        Task<IEnumerable<DiemKhoiHanh>> GetAllAsync();
        Task<DiemKhoiHanh> GetByIdAsync(int id);
        Task AddAsync(DiemKhoiHanh diemkhoihanh);
        Task UpdateAsync(DiemKhoiHanh diemkhoihanh);
        Task DeleteAsync(int id);
    }
}
