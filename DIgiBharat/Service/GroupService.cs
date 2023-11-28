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
        public bool createGroup(string name, string email, GroupModel group) {
            group.FarmerName= name;
            group.Email= email;
            _appDbContext.Group.Add(group);
            _appDbContext.SaveChanges();
            return true;
        }
    }
}
