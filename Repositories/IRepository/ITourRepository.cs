using web_do_an.Models.Model_TT;

namespace web_do_an.Repositories.IRepository
{
    public interface ITourRepository
    {
        Task<IEnumerable<Tour>> GetAllAsync();
        Task<Tour> GetByIdAsync(int id);
        Task AddAsync(Tour tour);
        Task UpdateAsync(Tour tour);
        Task DeleteAsync(int id);
    }
}
