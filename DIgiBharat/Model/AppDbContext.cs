using Microsoft.EntityFrameworkCore;

namespace DIgiBharat.Model
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
        public DbSet<GroupModel> Groups { get; set; }
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<GroupMember> groupMembers { get; set; }

        public DbSet<MemberAttendaceLog> memberAttendaceLogs { get; set; }
    }
}
