using web_do_an.Models.Model_TT;
using web_do_an.Models.Models_TT;

namespace web_do_an.Repositories.IRepository
{
    public interface IHinhAnhRepository
    {
        Task<IEnumerable<HinhAnh>> GetAllAsync();
        Task<HinhAnh> GetByIdAsync(int id);
        Task AddAsync(HinhAnh hinhanh);
        Task UpdateAsync(HinhAnh hinhanh);
        Task DeleteAsync(int id);
    }
}
