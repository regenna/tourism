using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IChiTietLichTrinhRepository
    {
        Task<IEnumerable<ChiTietLichTrinh>> GetAllAsync();
        Task<ChiTietLichTrinh> GetByIdAsync(int id);
        Task<ChiTietLichTrinh> GetByIdAsync(int id, int maLT);
        Task AddAsync(ChiTietLichTrinh chitietlichtrinh);
        Task UpdateAsync(ChiTietLichTrinh chitietlichtrinh);
        Task DeleteAsync(int id);
    }
}
