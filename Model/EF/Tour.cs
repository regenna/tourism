namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Tour")]
    public partial class Tour
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Tour()
        {
            ChiTietTours = new HashSet<ChiTietTour>();
            DanhGias = new HashSet<DanhGia>();
        }

        [Key]
        public int MaTour { get; set; }

        [StringLength(50)]
        public string TenTour { get; set; }

        public int? SoNgay { get; set; }

        public int? SoDem { get; set; }

        public double? Gia { get; set; }

        [StringLength(50)]
        public string DichVuTour { get; set; }

        [StringLength(50)]
        public string AnhDaiDien { get; set; }

        public int MaLoai { get; set; }

        [StringLength(350)]
        public string MoTaTour { get; set; }

        public bool? TrangThaiTour { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietTour> ChiTietTours { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DanhGia> DanhGias { get; set; }

        public virtual LoaiTour LoaiTour { get; set; }
    }
}
