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

        public List<GroupModel> getgroups(string email)
        {
            return _appDbContext.Group.Where(x=>x.Email == email).ToList();
        }
        public bool createGroup(string name, string email, GroupModel group) {
            group.FarmerName= name;
            group.Email= email;
            group.CreatedOn = DateTime.Now;
            _appDbContext.Group.Add(group);
            _appDbContext.SaveChanges();
            return true;
        }

        public bool deleteGroupById(long id, string email)
        {
           var group= _appDbContext.Group.FirstOrDefault(x => x.Id == id && x.Email == email);
            if (group!=null)
            {
                _appDbContext.Group.Remove(group);
                return true;
            }
            return false;
        }
    }
}
