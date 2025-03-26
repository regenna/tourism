namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DiemDen")]
    public partial class DiemDen
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DiemDen()
        {
            ChiTietLichTrinhs = new HashSet<ChiTietLichTrinh>();
        }

        [Key]
        public int MaDD { get; set; }

        [StringLength(50)]
        public string TenDD { get; set; }

        [StringLength(350)]
        public string MoTa { get; set; }

        [StringLength(50)]
        public string HinhAnh { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietLichTrinh> ChiTietLichTrinhs { get; set; }
    }
}
