namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PhuongTienDC")]
    public partial class PhuongTienDC
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PhuongTienDC()
        {
            ChiTietPhuongTiens = new HashSet<ChiTietPhuongTien>();
        }

        [Key]
        public int MaPT { get; set; }

        public int? SoLuongCho { get; set; }

        [StringLength(50)]
        public string TenPt { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietPhuongTien> ChiTietPhuongTiens { get; set; }
    }
}
