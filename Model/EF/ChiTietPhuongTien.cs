namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietPhuongTien")]
    public partial class ChiTietPhuongTien
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaCTTour { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaPT { get; set; }

        [StringLength(1)]
        public string TongSL { get; set; }

        public virtual ChiTietTour ChiTietTour { get; set; }

        public virtual PhuongTienDC PhuongTienDC { get; set; }
    }
}
