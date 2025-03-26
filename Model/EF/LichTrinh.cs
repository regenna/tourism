namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LichTrinh")]
    public partial class LichTrinh
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LichTrinh()
        {
            ChiTietLichTrinhs = new HashSet<ChiTietLichTrinh>();
        }

        [Key]
        public int MaLT { get; set; }

        [StringLength(50)]
        public string TenLT { get; set; }

        [StringLength(50)]
        public string HoatDongSang { get; set; }

        [StringLength(50)]
        public string HoatDongTrua { get; set; }

        [StringLength(50)]
        public string HoatDongChieu { get; set; }

        [StringLength(50)]
        public string HoatDongToi { get; set; }

        public int MaCTTour { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }

        public virtual ChiTietTour ChiTietTour { get; set; }
    }
}
