using web_do_an.Models;

namespace web_do_an.Repositories.EFRepository
{
    public class EFLoaiTourRepository : ILoaiTourRepository
    {

        private readonly ApplicationDbContext _context;
        public EFLoaiTourRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<LoaiTour>> GetAllAsync()
        {
            return await _context.LoaiTours
                .ToListAsync();
        }
        public async Task<LoaiTour> GetByIdAsync(int id)
        {
            return await _context.LoaiTours
                .FirstOrDefaultAsync(c => c.MaLoai == id); // Tìm theo id

        }
        public async Task AddAsync(LoaiTour loaitour)
        {
            _context.LoaiTours.Add(loaitour);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(LoaiTour loaitour)
        {
            _context.LoaiTours.Update(loaitour);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var loaitour = await _context.LoaiTours.FindAsync(id);
            _context.LoaiTours.Remove(loaitour);
            await _context.SaveChangesAsync();
        }
    }
}
