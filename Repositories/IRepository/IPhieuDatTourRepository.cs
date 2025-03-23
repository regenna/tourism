using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IPhieuDatTourRepository
    {
        Task<IEnumerable<PhieuDatTour>> GetAllAsync();
        Task<PhieuDatTour> GetByIdAsync(int id);
        Task<PhieuDatTour> GetByIdAsync(int id, int macttour);
        Task AddAsync(PhieuDatTour phieudattour);
        Task UpdateAsync(PhieuDatTour phieudattour);
        Task DeleteAsync(int id);
    }
}
