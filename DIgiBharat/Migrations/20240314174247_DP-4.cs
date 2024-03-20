using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class DP4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MemberID",
                table: "memberAttendaceLogs",
                newName: "MemberId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MemberId",
                table: "memberAttendaceLogs",
                newName: "MemberID");
        }
    }
}
