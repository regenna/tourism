using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFChiTietLichTrinhRepository : IChiTietLichTrinhRepository
    {
        private readonly ApplicationDbContext _context;
        public EFChiTietLichTrinhRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ChiTietLichTrinh>> GetAllAsync()
        {
            return await _context.ChiTietLichTrinhs
                .Include(c => c.DiemDen)
                .Include(c => c.LichTrinh)
                .ToListAsync();
        }

        public async Task<ChiTietLichTrinh> GetByIdAsync(int id)
        {
            return await _context.ChiTietLichTrinhs
                .Include(c => c.DiemDen)
                .Include(c => c.LichTrinh)
                .FirstOrDefaultAsync(c => c.MaDD == id);
        }
        public async Task<ChiTietLichTrinh> GetByIdAsync(int id, int maLT  )
        {
            return await _context.ChiTietLichTrinhs
                .Include(c => c.DiemDen)
                .Include(c => c.LichTrinh)
                .FirstOrDefaultAsync(c => c.MaDD ==id && c.LichTrinh.MaLT== maLT );
        }
        public async Task AddAsync(ChiTietLichTrinh chitietlichtrinh)
        {
            _context.ChiTietLichTrinhs.Add(chitietlichtrinh);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(ChiTietLichTrinh chitietlichtrinh)
        {
            _context.ChiTietLichTrinhs.Update(chitietlichtrinh);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var chitietlichtrinh = await _context.ChiTietLichTrinhs.FindAsync(id);
            _context.ChiTietLichTrinhs.Remove(chitietlichtrinh);
            await _context.SaveChangesAsync();
        }

       
    }
}
