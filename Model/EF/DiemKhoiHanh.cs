namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DiemKhoiHanh")]
    public partial class DiemKhoiHanh
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DiemKhoiHanh()
        {
            ChiTietTours = new HashSet<ChiTietTour>();
        }

        [Key]
        public int MaDKh { get; set; }

        [StringLength(50)]
        public string TenDKH { get; set; }

        [StringLength(50)]
        public string DC { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietTour> ChiTietTours { get; set; }
    }
}
