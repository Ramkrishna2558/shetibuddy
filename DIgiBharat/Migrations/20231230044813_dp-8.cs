using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class dp8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Mail",
                table: "AppUser",
                newName: "ConformPassword");

            migrationBuilder.AddColumn<long>(
                name: "GroupId",
                table: "groupMembers",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GroupId",
                table: "groupMembers");

            migrationBuilder.RenameColumn(
                name: "ConformPassword",
                table: "AppUser",
                newName: "Mail");
        }
    }
}
