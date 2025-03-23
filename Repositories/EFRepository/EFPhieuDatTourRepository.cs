using web_do_an.Models;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFPhieuDatTourRepository : IPhieuDatTourRepository
    {


        private readonly ApplicationDbContext _context;
        public EFPhieuDatTourRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PhieuDatTour>> GetAllAsync()
        {
            return await _context.PhieuDatTours
                .Include(c => c.TaiKhoan)
                .Include(c => c.ChiTietTour)
                .ToListAsync();
        }
        public async Task<PhieuDatTour> GetByIdAsync(int id)
        {
            return await _context.PhieuDatTours
                .Include(c => c.TaiKhoan)
                .Include(c => c.ChiTietTour)
                .FirstOrDefaultAsync(c => c.MaTK == id); // Tìm theo id
        }
        public async Task<PhieuDatTour> GetByIdAsync(int id, int macttour)
        {
            return await _context.PhieuDatTours
                .Include(c => c.TaiKhoan)
                .Include(c => c.ChiTietTour)
                .FirstOrDefaultAsync(c => c.MaTK == id && c.ChiTietTour.MaCTTour == macttour);
        }
        public async Task AddAsync(PhieuDatTour phieudattour)
        {
            _context.PhieuDatTours.Add(phieudattour);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(PhieuDatTour phieudattour)
        {
            _context.PhieuDatTours.Update(phieudattour);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var phieudattour = await _context.PhieuDatTours.FindAsync(id);
            _context.PhieuDatTours.Remove(phieudattour);
            await _context.SaveChangesAsync();
        }
    }
}
