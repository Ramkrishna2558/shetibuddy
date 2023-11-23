using DIgiBharat.Model;

namespace DIgiBharat.Service
{
    public class GroupService
    {
        private readonly AppDbContext _appDbContext;
        public GroupService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public List<GroupModel> getall()
        {

            return _appDbContext.Group.ToList();
        }
    }
}
