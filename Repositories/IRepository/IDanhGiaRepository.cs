using web_do_an.Models;

namespace web_do_an.Repositories.IRepository
{
    public interface IDanhGiaRepository
    {
        Task<IEnumerable<DanhGia>> GetAllAsync();
        Task<DanhGia> GetByIdAsync(int id);
        Task<DanhGia> GetByIdAsync(int id, int maTK);

        Task AddAsync(DanhGia danhgia);
        Task UpdateAsync(DanhGia danhgia);
        Task DeleteAsync(int id);
    }
}
