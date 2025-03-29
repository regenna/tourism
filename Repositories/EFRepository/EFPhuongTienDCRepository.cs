using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFPhuongTienDCRepository : IPhuongTienDCRepository
    {


        private readonly ApplicationDbContext _context;
        public EFPhuongTienDCRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PhuongTienDC>> GetAllAsync()
        {
            return await _context.PhuongTienDCs
                .ToListAsync();
        }
        public async Task<PhuongTienDC> GetByIdAsync(int id)
        {
            return await _context.PhuongTienDCs
                .FirstOrDefaultAsync(c => c.MaPT == id); // Tìm theo id
        }
        public async Task AddAsync(PhuongTienDC phuongtiendc)
        {
            _context.PhuongTienDCs.Add(phuongtiendc);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(PhuongTienDC phuongtiendc)
        {
            _context.PhuongTienDCs.Update(phuongtiendc);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var phuongtiendc = await _context.PhuongTienDCs.FindAsync(id);
            _context.PhuongTienDCs.Remove(phuongtiendc);
            await _context.SaveChangesAsync();
        }

    }
}
