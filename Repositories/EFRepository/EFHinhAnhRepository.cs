using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Models.Models_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFHinhAnhRepository : IHinhAnhRepository
    {

        private readonly ApplicationDbContext _context;
        public EFHinhAnhRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<HinhAnh>> GetAllAsync()
        {
            return await _context.HinhAnhs
                .Include(c => c.tour)
                .ToListAsync();
        }
        public async Task<HinhAnh> GetByIdAsync(int id)
        {
            return await _context.HinhAnhs
                .Include(c => c.tour)

                .FirstOrDefaultAsync(c => c.MaHinhAnh == id); // Tìm theo id
        }
        public async Task AddAsync(HinhAnh hinhanh)
        {
            _context.HinhAnhs.Add(hinhanh);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(HinhAnh hinhanh)
        {
            _context.HinhAnhs.Update(hinhanh);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var hinhanh = await _context.HinhAnhs.FindAsync(id);
            _context.HinhAnhs.Remove(hinhanh);
            await _context.SaveChangesAsync();
        }

    }
}
