using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IPhuongTienDCRepository
    {
        Task<IEnumerable<PhuongTienDC>> GetAllAsync();
        Task<PhuongTienDC> GetByIdAsync(int id);
        Task AddAsync(PhuongTienDC phuongtiendc);
        Task UpdateAsync(PhuongTienDC phuongtiendc);
        Task DeleteAsync(int id);
    }
}
