namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DanhGia")]
    public partial class DanhGia
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaTour { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaTK { get; set; }

        [StringLength(100)]
        public string NoiDungDanhGia { get; set; }

        public double? SoSao { get; set; }

        public DateTime? ThoiGianDanhGia { get; set; }

        public virtual TaiKhoan TaiKhoan { get; set; }

        public virtual Tour Tour { get; set; }
    }
}
