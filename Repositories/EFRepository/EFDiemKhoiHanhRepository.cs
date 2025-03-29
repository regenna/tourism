using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFDiemKhoiHanhRepository : IDiemKhoiHanhRepository
    {

        private readonly ApplicationDbContext _context;
        public EFDiemKhoiHanhRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<DiemKhoiHanh>> GetAllAsync()
        {
            return await _context.DiemKhoiHanhs
                
                .ToListAsync();
        }
        public async Task<DiemKhoiHanh> GetByIdAsync(int id)
        {
            return await _context.DiemKhoiHanhs
                .FirstOrDefaultAsync(c => c.MaDKH == id); // Tìm theo id
        }
        public async Task AddAsync(DiemKhoiHanh diemkhoihanh)
        {
            _context.DiemKhoiHanhs.Add(diemkhoihanh);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(DiemKhoiHanh diemkhoihanh)
        {
            _context.DiemKhoiHanhs.Update(diemkhoihanh);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var diemkhoihanh = await _context.DiemKhoiHanhs.FindAsync(id);
            _context.DiemKhoiHanhs.Remove(diemkhoihanh);
            await _context.SaveChangesAsync();
        }
    }
}
