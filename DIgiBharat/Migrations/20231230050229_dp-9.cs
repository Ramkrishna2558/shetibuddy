using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DIgiBharat.Migrations
{
    /// <inheritdoc />
    public partial class dp9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_groupMembers_Group_GroupModelId",
                table: "groupMembers");

            migrationBuilder.DropColumn(
                name: "GroupId",
                table: "groupMembers");

            migrationBuilder.AlterColumn<long>(
                name: "GroupModelId",
                table: "groupMembers",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_groupMembers_Group_GroupModelId",
                table: "groupMembers",
                column: "GroupModelId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_groupMembers_Group_GroupModelId",
                table: "groupMembers");

            migrationBuilder.AlterColumn<long>(
                name: "GroupModelId",
                table: "groupMembers",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<long>(
                name: "GroupId",
                table: "groupMembers",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddForeignKey(
                name: "FK_groupMembers_Group_GroupModelId",
                table: "groupMembers",
                column: "GroupModelId",
                principalTable: "Group",
                principalColumn: "Id");
        }
    }
}
