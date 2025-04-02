using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFChiTietTourRepository : IChiTietTourRepository
    {

        private readonly ApplicationDbContext _context;
        public EFChiTietTourRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ChiTietTour>> GetAllAsync()
        {
            return await _context.ChiTietTours
                .Include(c => c.Tour)
              
                .ToListAsync();
        }
        public async Task<ChiTietTour> GetByIdAsync(int id)
        {
            return await _context.ChiTietTours
                .Include(c => c.Tour)
               
                .FirstOrDefaultAsync(c => c.MaTour == id); // Tìm theo id
        }
      
        public async Task AddAsync(ChiTietTour chithiettour)
        {
            _context.ChiTietTours.Add(chithiettour);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(ChiTietTour chithiettour)
        {
            _context.ChiTietTours.Update(chithiettour);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var chithiettour = await _context.ChiTietTours.FindAsync(id);
            _context.ChiTietTours.Remove(chithiettour);
            await _context.SaveChangesAsync();
        }
    }
}
