namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietLichTrinh")]
    public partial class ChiTietLichTrinh
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaLT { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaDD { get; set; }

        [StringLength(1)]
        public string Ngay { get; set; }

        public virtual DiemDen DiemDen { get; set; }

        public virtual LichTrinh LichTrinh { get; set; }
    }
}
