namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TaiKhoan")]
    public partial class TaiKhoan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TaiKhoan()
        {
            DanhGias = new HashSet<DanhGia>();
            PhieuDatTours = new HashSet<PhieuDatTour>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaTK { get; set; }

        [StringLength(30)]
        public string TenKH { get; set; }

        [StringLength(10)]
        public string SDT { get; set; }

        [StringLength(250)]
        public string DC { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SoTourDaDat { get; set; }

        [StringLength(50)]
        public string TenTK { get; set; }

        [StringLength(50)]
        public string MatKhau { get; set; }

        [StringLength(50)]
        public string Image { get; set; }

        [StringLength(20)]
        public string LoaiTK { get; set; }

        public bool? Status { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? UpdateDate { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DanhGia> DanhGias { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuDatTour> PhieuDatTours { get; set; }
    }
}
