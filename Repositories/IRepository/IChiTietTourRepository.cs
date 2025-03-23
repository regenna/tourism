using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IChiTietTourRepository
    {
        Task<IEnumerable<ChiTietTour>> GetAllAsync();
        Task<ChiTietTour> GetByIdAsync(int id);
        Task<ChiTietTour> GetByIdAsync(int id, int maDKh);
        Task AddAsync(ChiTietTour chitiettour);
        Task UpdateAsync(ChiTietTour chitiettour);
        Task DeleteAsync(int id);
    }
}
