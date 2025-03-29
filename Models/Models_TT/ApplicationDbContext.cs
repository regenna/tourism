using Microsoft.EntityFrameworkCore;

namespace web_do_an.Models.Model_TT
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }
        public DbSet<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
        public DbSet<DiemDen> DiemDens { get; set; }

        public DbSet<LichTrinh> LichTrinhs { get; set; }
        public DbSet<PhuongTienDC> PhuongTienDCs { get; set; }

        public DbSet<TaiKhoan> TaiKhoans { get; set; }
        public DbSet<Tour> Tours { get; set; }
        public DbSet<ChiTietTour> ChiTietTours { get; set; }
        public DbSet<DanhGia> DanhGias { get; set; }
        public DbSet<DiemKhoiHanh> DiemKhoiHanhs { get; set; }
        public DbSet<LoaiTour> LoaiTours { get; set; }
        public DbSet<PhieuDatTour> PhieuDatTours { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Cấu hình bảng trung gian


            // Cấu hình bảng trung gian
            modelBuilder.Entity<DanhGia>()
                .HasKey(sk => new { sk.MaTour, sk.MaTK }); // Khóa chính kết hợp

            modelBuilder.Entity<DanhGia>()
                .HasOne(sk => sk.Tour)
                .WithMany(s => s.DanhGias)
                .HasForeignKey(sk => sk.MaTour);

            modelBuilder.Entity<DanhGia>()
                .HasOne(sk => sk.TaiKhoan)
                .WithMany(k => k.DanhGias)
                .HasForeignKey(sk => sk.MaTK);


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


            // Cấu hình bảng trung gian
            modelBuilder.Entity<ChiTietLichTrinh>()
                .HasKey(sk => new { sk.MaDD, sk.MaLT }); // Khóa chính kết hợp

            modelBuilder.Entity<ChiTietLichTrinh>()
                .HasOne(sk => sk.DiemDen)
                .WithMany(s => s.ChiTietLichTrinhs)
                .HasForeignKey(sk => sk.MaDD);

            modelBuilder.Entity<ChiTietLichTrinh>()
                .HasOne(sk => sk.LichTrinh)
                .WithMany(k => k.ChiTietLichTrinhs)
                .HasForeignKey(sk => sk.MaLT);

        }


    }

}

