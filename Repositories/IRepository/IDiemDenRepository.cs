using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IDiemDenRepository
    {
        Task<IEnumerable<DiemDen>> GetAllAsync();
        Task<DiemDen> GetByIdAsync(int id);
        Task AddAsync(DiemDen diemden);
        Task UpdateAsync(DiemDen diemden);
        Task DeleteAsync(int id);
    }
}
