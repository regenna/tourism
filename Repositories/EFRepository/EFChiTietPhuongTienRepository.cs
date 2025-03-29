using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.IRepository;

namespace web_do_an.Repositories.EFRepository
{
    public class EFChiTietPhuongTienRepository : IChiTietPhuongTienRepository
    {
        private readonly ApplicationDbContext _context;
        public EFChiTietPhuongTienRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ChiTietPhuongTien>> GetAllAsync()
        {
            return await _context.ChiTietPhuongTiens
                .Include(c => c.PhuongTienDC)
                .Include(c => c.ChiTietTour)
                .ToListAsync();
        }
        public async Task<ChiTietPhuongTien> GetByIdAsync(int id)
        {
            return await _context.ChiTietPhuongTiens
                .Include(c => c.PhuongTienDC)
                .Include(c => c.ChiTietTour)
                .FirstOrDefaultAsync(c => c.MaPT == id); // Tìm theo id
        }
        public async Task<ChiTietPhuongTien> GetByIdAsync(int id, int maLT)
        {
            return await _context.ChiTietPhuongTiens
                .Include(c => c.PhuongTienDC)
                .Include(c => c.ChiTietTour)
                .FirstOrDefaultAsync(c => c.MaPT == id && c.ChiTietTour.MaTour == maLT);
        }
        public async Task AddAsync(ChiTietPhuongTien chitietphuongtien)
        {
            _context.ChiTietPhuongTiens.Add(chitietphuongtien);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(ChiTietPhuongTien chitietphuongtien)
        {
            _context.ChiTietPhuongTiens.Update(chitietphuongtien);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var chitietphuongtien = await _context.ChiTietPhuongTiens.FindAsync(id);
            _context.ChiTietPhuongTiens.Remove(chitietphuongtien);
            await _context.SaveChangesAsync();
        }


    }
}
