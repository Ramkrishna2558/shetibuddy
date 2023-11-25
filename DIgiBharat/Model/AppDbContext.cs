using Microsoft.EntityFrameworkCore;

namespace DIgiBharat.Model
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
        public DbSet<GroupModel> Group { get; set; }
        public DbSet<AppUser> AppUser { get; set; }
    }
}
