using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web_do_an.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DiemDens",
                columns: table => new
                {
                    MaDD = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenDD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HinhAnh = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiemDens", x => x.MaDD);
                });

            migrationBuilder.CreateTable(
                name: "DiemKhoiHanhs",
                columns: table => new
                {
                    MaDKH = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenDKH = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DC = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiemKhoiHanhs", x => x.MaDKH);
                });

            migrationBuilder.CreateTable(
                name: "LoaiTours",
                columns: table => new
                {
                    MaLoai = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenLoai = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoaiTours", x => x.MaLoai);
                });

            migrationBuilder.CreateTable(
                name: "PhuongTienDCs",
                columns: table => new
                {
                    MaPT = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenPT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoLuongCho = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhuongTienDCs", x => x.MaPT);
                });

            migrationBuilder.CreateTable(
                name: "TaiKhoans",
                columns: table => new
                {
                    MaTK = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTK = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenKH = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MatKhau = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SDT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoTourDaDat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LoaiTK = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrangThaiTK = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaiKhoans", x => x.MaTK);
                });

            migrationBuilder.CreateTable(
                name: "Tours",
                columns: table => new
                {
                    MaTour = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoNgay = table.Column<int>(type: "int", nullable: false),
                    SoDem = table.Column<int>(type: "int", nullable: false),
                    DichVuTour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gia = table.Column<float>(type: "real", nullable: false),
                    AnhDaiDien = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTaTour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrangThaiTour = table.Column<int>(type: "int", nullable: false),
                    MaLoai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tours", x => x.MaTour);
                    table.ForeignKey(
                        name: "FK_Tours_LoaiTours_MaLoai",
                        column: x => x.MaLoai,
                        principalTable: "LoaiTours",
                        principalColumn: "MaLoai",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietTours",
                columns: table => new
                {
                    MaCTTour = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NgayKhoiHanh = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NgayKetThuc = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SoChoDaDat = table.Column<int>(type: "int", nullable: false),
                    MaTour = table.Column<int>(type: "int", nullable: false),
                    TourMaTour = table.Column<int>(type: "int", nullable: true),
                    MaDKH = table.Column<int>(type: "int", nullable: false),
                    DiemKhoiHanhMaDKH = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietTours", x => x.MaCTTour);
                    table.ForeignKey(
                        name: "FK_ChiTietTours_DiemKhoiHanhs_DiemKhoiHanhMaDKH",
                        column: x => x.DiemKhoiHanhMaDKH,
                        principalTable: "DiemKhoiHanhs",
                        principalColumn: "MaDKH");
                    table.ForeignKey(
                        name: "FK_ChiTietTours_Tours_TourMaTour",
                        column: x => x.TourMaTour,
                        principalTable: "Tours",
                        principalColumn: "MaTour");
                });

            migrationBuilder.CreateTable(
                name: "LichTrinhs",
                columns: table => new
                {
                    MaLT = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenLT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoatDongSang = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoatDongTrua = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoatDongChieu = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TeHoatDongToi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MaTour = table.Column<int>(type: "int", nullable: false),
                    tourMaTour = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LichTrinhs", x => x.MaLT);
                    table.ForeignKey(
                        name: "FK_LichTrinhs_Tours_tourMaTour",
                        column: x => x.tourMaTour,
                        principalTable: "Tours",
                        principalColumn: "MaTour");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietPhuongTiens",
                columns: table => new
                {
                    MaCTTour = table.Column<int>(type: "int", nullable: false),
                    MaPT = table.Column<int>(type: "int", nullable: false),
                    TongSL = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietPhuongTiens", x => new { x.MaCTTour, x.MaPT });
                    table.ForeignKey(
                        name: "FK_ChiTietPhuongTiens_ChiTietTours_MaCTTour",
                        column: x => x.MaCTTour,
                        principalTable: "ChiTietTours",
                        principalColumn: "MaCTTour",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChiTietPhuongTiens_PhuongTienDCs_MaPT",
                        column: x => x.MaPT,
                        principalTable: "PhuongTienDCs",
                        principalColumn: "MaPT",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PhieuDatTours",
                columns: table => new
                {
                    MaPDT = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SoNguoi = table.Column<int>(type: "int", nullable: false),
                    NgayDat = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TongTien = table.Column<float>(type: "real", nullable: false),
                    DichVuTour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrangThaiPDT = table.Column<bool>(type: "bit", nullable: true),
                    MaTK = table.Column<int>(type: "int", nullable: false),
                    TaiKhoanMaTK = table.Column<int>(type: "int", nullable: true),
                    MaCTTour = table.Column<int>(type: "int", nullable: false),
                    ChiTietTourMaCTTour = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhieuDatTours", x => x.MaPDT);
                    table.ForeignKey(
                        name: "FK_PhieuDatTours_ChiTietTours_ChiTietTourMaCTTour",
                        column: x => x.ChiTietTourMaCTTour,
                        principalTable: "ChiTietTours",
                        principalColumn: "MaCTTour");
                    table.ForeignKey(
                        name: "FK_PhieuDatTours_TaiKhoans_TaiKhoanMaTK",
                        column: x => x.TaiKhoanMaTK,
                        principalTable: "TaiKhoans",
                        principalColumn: "MaTK");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietLichTrinhs",
                columns: table => new
                {
                    MaLT = table.Column<int>(type: "int", nullable: false),
                    MaDD = table.Column<int>(type: "int", nullable: false),
                    Ngay = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietLichTrinhs", x => new { x.MaDD, x.MaLT });
                    table.ForeignKey(
                        name: "FK_ChiTietLichTrinhs_DiemDens_MaDD",
                        column: x => x.MaDD,
                        principalTable: "DiemDens",
                        principalColumn: "MaDD",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChiTietLichTrinhs_LichTrinhs_MaLT",
                        column: x => x.MaLT,
                        principalTable: "LichTrinhs",
                        principalColumn: "MaLT",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietLichTrinhs_MaLT",
                table: "ChiTietLichTrinhs",
                column: "MaLT");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietPhuongTiens_MaPT",
                table: "ChiTietPhuongTiens",
                column: "MaPT");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietTours_DiemKhoiHanhMaDKH",
                table: "ChiTietTours",
                column: "DiemKhoiHanhMaDKH");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietTours_TourMaTour",
                table: "ChiTietTours",
                column: "TourMaTour");

            migrationBuilder.CreateIndex(
                name: "IX_LichTrinhs_tourMaTour",
                table: "LichTrinhs",
                column: "tourMaTour");

            migrationBuilder.CreateIndex(
                name: "IX_PhieuDatTours_ChiTietTourMaCTTour",
                table: "PhieuDatTours",
                column: "ChiTietTourMaCTTour");

            migrationBuilder.CreateIndex(
                name: "IX_PhieuDatTours_TaiKhoanMaTK",
                table: "PhieuDatTours",
                column: "TaiKhoanMaTK");

            migrationBuilder.CreateIndex(
                name: "IX_Tours_MaLoai",
                table: "Tours",
                column: "MaLoai");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChiTietLichTrinhs");

            migrationBuilder.DropTable(
                name: "ChiTietPhuongTiens");

            migrationBuilder.DropTable(
                name: "PhieuDatTours");

            migrationBuilder.DropTable(
                name: "DiemDens");

            migrationBuilder.DropTable(
                name: "LichTrinhs");

            migrationBuilder.DropTable(
                name: "PhuongTienDCs");

            migrationBuilder.DropTable(
                name: "ChiTietTours");

            migrationBuilder.DropTable(
                name: "TaiKhoans");

            migrationBuilder.DropTable(
                name: "DiemKhoiHanhs");

            migrationBuilder.DropTable(
                name: "Tours");

            migrationBuilder.DropTable(
                name: "LoaiTours");
        }
    }
}
