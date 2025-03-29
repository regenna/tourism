using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFToaiKhoanRepository : ITaiKhoanRepository
    {


        private readonly ApplicationDbContext _context;
        public EFToaiKhoanRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<TaiKhoan>> GetAllAsync()
        {
            return await _context.TaiKhoans
                .ToListAsync();
        }
        public async Task<TaiKhoan> GetByIdAsync(int id)
        {
            return await _context.TaiKhoans
                .FirstOrDefaultAsync(c => c.MaTK == id); // Tìm theo id
        }
        public async Task AddAsync(TaiKhoan taikhoan)
        {
            _context.TaiKhoans.Add(taikhoan);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(TaiKhoan taikhoan)
        {
            _context.TaiKhoans.Update(taikhoan);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var taikhoan = await _context.TaiKhoans.FindAsync(id);
            _context.TaiKhoans.Remove(taikhoan);
            await _context.SaveChangesAsync();
        }
    }
}
