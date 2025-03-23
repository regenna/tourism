using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface ILoaiTourRepository
    {
        Task<IEnumerable<LoaiTour>> GetAllAsync();
        Task<LoaiTour> GetByIdAsync(int id);
        Task AddAsync(LoaiTour loaitour);
        Task UpdateAsync(LoaiTour loaitour);
        Task DeleteAsync(int id);
    }
}
