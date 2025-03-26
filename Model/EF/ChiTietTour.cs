namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietTour")]
    public partial class ChiTietTour
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ChiTietTour()
        {
            ChiTietPhuongTiens = new HashSet<ChiTietPhuongTien>();
            LichTrinhs = new HashSet<LichTrinh>();
            PhieuDatTours = new HashSet<PhieuDatTour>();
        }

        [Key]
        public int MaCTTour { get; set; }

        public DateTime? NgayKhoiHanh { get; set; }

        public DateTime? NgayKetThuc { get; set; }

        public int? SoChoDaDat { get; set; }

        public int MaTour { get; set; }

        public int MaDKh { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }

        public virtual DiemKhoiHanh DiemKhoiHanh { get; set; }

        public virtual Tour Tour { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LichTrinh> LichTrinhs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuDatTour> PhieuDatTours { get; set; }
    }
}
