using Microsoft.EntityFrameworkCore;
using web_do_an.Models.Models_TT;

namespace web_do_an.Models.Model_TT
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
      
        public DbSet<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
        public DbSet<DiemDen> DiemDens { get; set; }

        public DbSet<HinhAnh> HinhAnhs { get; set; }
        public DbSet<LichTrinh> LichTrinhs { get; set; }
        public DbSet<PhuongTienDC> PhuongTienDCs { get; set; }

        public DbSet<TaiKhoan> TaiKhoans { get; set; }
        public DbSet<Tour> Tours { get; set; }
        public DbSet<ChiTietTour> ChiTietTours { get; set; }
       
        public DbSet<DiemKhoiHanh> DiemKhoiHanhs { get; set; }
        public DbSet<LoaiTour> LoaiTours { get; set; }
        public DbSet<PhieuDatTour> PhieuDatTours { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tour>()
                .HasOne(t => t.LoaiTour)         // `Tour` có một `LoaiTour`
                .WithMany(lt => lt.Tours)        // `LoaiTour` có nhiều `Tour`
                .HasForeignKey(t => t.MaLoai);   // Khóa ngoại là `MaLoai`

            // Cấu hình bảng trung gian
            modelBuilder.Entity<ChiTietPhuongTien>()
                .HasKey(sk => new { sk.MaCTTour, sk.MaPT }); // Khóa chính kết hợp

            modelBuilder.Entity<ChiTietPhuongTien>()
                .HasOne(sk => sk.ChiTietTour)
                .WithMany(s => s.ChiTietPhuongTiens)
                .HasForeignKey(sk => sk.MaCTTour);

            modelBuilder.Entity<ChiTietPhuongTien>()
                .HasOne(sk => sk.PhuongTienDC)
                .WithMany(k => k.ChiTietPhuongTiens)
                .HasForeignKey(sk => sk.MaPT);


          

        }


    }

}

