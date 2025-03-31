using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFLichTrinhRepository : ILichTrinhRepository
    {

        private readonly ApplicationDbContext _context;
        public EFLichTrinhRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<LichTrinh>> GetAllAsync()
        {
            return await _context.LichTrinhs
                .Include(c => c.tour)
                .ToListAsync();
        }
        public async Task<LichTrinh> GetByIdAsync(int id)
        {
            return await _context.LichTrinhs
                .Include(c => c.tour)
                
                .FirstOrDefaultAsync(c => c.MaTour == id); // Tìm theo id
        }
        public async Task AddAsync(LichTrinh lichtrinh)
        {
            _context.LichTrinhs.Add(lichtrinh);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(LichTrinh lichtrinh)
        {
            _context.LichTrinhs.Update(lichtrinh);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var lichtrinh = await _context.LichTrinhs.FindAsync(id);
            _context.LichTrinhs.Remove(lichtrinh);
            await _context.SaveChangesAsync();
        }
    }
}
