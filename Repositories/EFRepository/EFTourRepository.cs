using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFTourRepository : ITourRepository
    {


        private readonly ApplicationDbContext _context;
        public EFTourRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Tour>> GetAllAsync()
        {
            return await _context.Tours
                .Include(c => c.LoaiTour)
                .ToListAsync();
        }
        public async Task<Tour> GetByIdAsync(int id)
        {
            return await _context.Tours
                .Include(c => c.LoaiTour)

                .FirstOrDefaultAsync(c => c.MaLoai == id); // Tìm theo id
        }
        public async Task AddAsync(Tour tour)
        {
            _context.Tours.Add(tour);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(Tour tour)
        {
            _context.Tours.Update(tour);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var tour = await _context.Tours.FindAsync(id);
            _context.Tours.Remove(tour);
            await _context.SaveChangesAsync();
        }
    }
}
