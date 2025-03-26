namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PhieuDatTour")]
    public partial class PhieuDatTour
    {
        [Key]
        public int MaPDT { get; set; }

        public int? SoNguoi { get; set; }

        public DateTime? NgayDat { get; set; }

        public double? TongTien { get; set; }

        [StringLength(50)]
        public string DichVuTour { get; set; }

        public int MaTK { get; set; }

        public int MaCTTour { get; set; }

        public bool? TrangThaiPDT { get; set; }

        public virtual ChiTietTour ChiTietTour { get; set; }

        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}
