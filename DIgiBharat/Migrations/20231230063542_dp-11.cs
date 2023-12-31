using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class dp11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Wages",
                table: "groupMembers");

            migrationBuilder.RenameColumn(
                name: "WorkingDays",
                table: "groupMembers",
                newName: "Working");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Groups",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(byte),
                oldType: "tinyint");

            migrationBuilder.AddColumn<float>(
                name: "amount",
                table: "Groups",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "amount",
                table: "Groups");

            migrationBuilder.RenameColumn(
                name: "Working",
                table: "groupMembers",
                newName: "WorkingDays");

            migrationBuilder.AlterColumn<byte>(
                name: "Type",
                table: "Groups",
                type: "tinyint",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<float>(
                name: "Wages",
                table: "groupMembers",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
