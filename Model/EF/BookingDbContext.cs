using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;


namespace Model.EF
{
    public partial class BookingDbContext : DbContext
    {
        public BookingDbContext()
            : base("name=BookingDbContext")
        {
        }

        public virtual DbSet<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }
        public virtual DbSet<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
        public virtual DbSet<ChiTietTour> ChiTietTours { get; set; }
        public virtual DbSet<DanhGia> DanhGias { get; set; }
        public virtual DbSet<DiemDen> DiemDens { get; set; }
        public virtual DbSet<DiemKhoiHanh> DiemKhoiHanhs { get; set; }
        public virtual DbSet<LichTrinh> LichTrinhs { get; set; }
        public virtual DbSet<LoaiTour> LoaiTours { get; set; }
        public virtual DbSet<PhieuDatTour> PhieuDatTours { get; set; }
        public virtual DbSet<PhuongTienDC> PhuongTienDCs { get; set; }
        public virtual DbSet<TaiKhoan> TaiKhoans { get; set; }
        public virtual DbSet<Tour> Tours { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChiTietLichTrinh>()
                .Property(e => e.Ngay)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<ChiTietPhuongTien>()
                .Property(e => e.TongSL)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<ChiTietTour>()
                .HasMany(e => e.ChiTietPhuongTiens)
                .WithRequired(e => e.ChiTietTour)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ChiTietTour>()
                .HasMany(e => e.LichTrinhs)
                .WithRequired(e => e.ChiTietTour)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ChiTietTour>()
                .HasMany(e => e.PhieuDatTours)
                .WithRequired(e => e.ChiTietTour)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<DiemDen>()
                .HasMany(e => e.ChiTietLichTrinhs)
                .WithRequired(e => e.DiemDen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<DiemKhoiHanh>()
                .HasMany(e => e.ChiTietTours)
                .WithRequired(e => e.DiemKhoiHanh)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<LichTrinh>()
                .HasMany(e => e.ChiTietLichTrinhs)
                .WithRequired(e => e.LichTrinh)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<LoaiTour>()
                .HasMany(e => e.Tours)
                .WithRequired(e => e.LoaiTour)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PhuongTienDC>()
                .HasMany(e => e.ChiTietPhuongTiens)
                .WithRequired(e => e.PhuongTienDC)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<TaiKhoan>()
                .Property(e => e.SDT)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<TaiKhoan>()
                .Property(e => e.LoaiTK)
                .IsFixedLength();

            modelBuilder.Entity<TaiKhoan>()
                .HasMany(e => e.DanhGias)
                .WithRequired(e => e.TaiKhoan)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<TaiKhoan>()
                .HasMany(e => e.PhieuDatTours)
                .WithRequired(e => e.TaiKhoan)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Tour>()
                .HasMany(e => e.ChiTietTours)
                .WithRequired(e => e.Tour)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Tour>()
                .HasMany(e => e.DanhGias)
                .WithRequired(e => e.Tour)
                .WillCascadeOnDelete(false);
        }
    }
}
