using Microsoft.EntityFrameworkCore;
using web_do_an.Models;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFDanhGiaRepository : IDanhGiaRepository
    {

        private readonly ApplicationDbContext _context;
        public EFDanhGiaRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<DanhGia>> GetAllAsync()
        {
            return await _context.DanhGias
                .Include(c => c.Tour)
                .Include(c => c.TaiKhoan)
                .ToListAsync();
        }
        public async Task<DanhGia> GetByIdAsync(int id)
        {
            return await _context.DanhGias
                .Include(c => c.Tour)
                .Include(c => c.TaiKhoan)
                .FirstOrDefaultAsync(c => c.MaTour == id); // Tìm theo id
        }
        public async Task<DanhGia> GetByIdAsync(int id, int maTK)
        {
            return await _context.DanhGias
                .Include(c => c.Tour)
                .Include(c => c.TaiKhoan)
                .FirstOrDefaultAsync(c => c.MaTour == id && c.TaiKhoan.MaTK == maTK);
        }
        public async Task AddAsync(DanhGia danhgia)
        {
            _context.DanhGias.Add(danhgia);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(DanhGia danhgia)
        {
            _context.DanhGias.Update(danhgia);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var danhgia = await _context.DanhGias.FindAsync(id);
            _context.DanhGias.Remove(danhgia);
            await _context.SaveChangesAsync();
        }
    }
}
