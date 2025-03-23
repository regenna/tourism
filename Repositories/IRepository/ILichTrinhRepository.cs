using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface ILichTrinhRepository
    {
        Task<IEnumerable<LichTrinh>> GetAllAsync();
        Task<LichTrinh> GetByIdAsync(int id);
        Task AddAsync(LichTrinh lichtrinh);
        Task UpdateAsync(LichTrinh lichtrinh);
        Task DeleteAsync(int id);
    }
}
