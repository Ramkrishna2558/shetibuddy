using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class dp13 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_groupMembers_Groups_GroupModelId",
                table: "groupMembers");

            migrationBuilder.DropIndex(
                name: "IX_groupMembers_GroupModelId",
                table: "groupMembers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_groupMembers_GroupModelId",
                table: "groupMembers",
                column: "GroupModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_groupMembers_Groups_GroupModelId",
                table: "groupMembers",
                column: "GroupModelId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
