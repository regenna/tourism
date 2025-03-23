using web_do_an.Models;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFDiemDenRepository : IDiemDenRepository
    {

        private readonly ApplicationDbContext _context;
        public EFDiemDenRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<DiemDen>> GetAllAsync()
        {
            return await _context.DiemDens                
                .ToListAsync();
        }
        public async Task<DiemDen> GetByIdAsync(int id)
        {
            return await _context.DiemDens
                .FirstOrDefaultAsync(c => c.MaDD == id); // Tìm theo id
        }
        public async Task AddAsync(DiemDen diemden)
        {
            _context.DiemDens.Add(diemden);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(DiemDen diemden)
        {
            _context.DiemDens.Update(diemden);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var diemden = await _context.DiemDens.FindAsync(id);
            _context.DiemDens.Remove(diemden);
            await _context.SaveChangesAsync();
        }
    }
}
