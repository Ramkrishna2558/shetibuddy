using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class DP3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "GroupMemberId",
                table: "memberAttendaceLogs",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "GroupModelId",
                table: "memberAttendaceLogs",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_memberAttendaceLogs_GroupMemberId",
                table: "memberAttendaceLogs",
                column: "GroupMemberId");

            migrationBuilder.CreateIndex(
                name: "IX_memberAttendaceLogs_GroupModelId",
                table: "memberAttendaceLogs",
                column: "GroupModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_memberAttendaceLogs_Groups_GroupModelId",
                table: "memberAttendaceLogs",
                column: "GroupModelId",
                principalTable: "Groups",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_memberAttendaceLogs_groupMembers_GroupMemberId",
                table: "memberAttendaceLogs",
                column: "GroupMemberId",
                principalTable: "groupMembers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_memberAttendaceLogs_Groups_GroupModelId",
                table: "memberAttendaceLogs");

            migrationBuilder.DropForeignKey(
                name: "FK_memberAttendaceLogs_groupMembers_GroupMemberId",
                table: "memberAttendaceLogs");

            migrationBuilder.DropIndex(
                name: "IX_memberAttendaceLogs_GroupMemberId",
                table: "memberAttendaceLogs");

            migrationBuilder.DropIndex(
                name: "IX_memberAttendaceLogs_GroupModelId",
                table: "memberAttendaceLogs");

            migrationBuilder.DropColumn(
                name: "GroupMemberId",
                table: "memberAttendaceLogs");

            migrationBuilder.DropColumn(
                name: "GroupModelId",
                table: "memberAttendaceLogs");
        }
    }
}
