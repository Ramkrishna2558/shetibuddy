using Microsoft.VisualBasic;

namespace DIgiBharat.Model
{
    public class GroupModel
    {
        public long Id { get; set; }
        public string GroupName { get; set; }
        public byte Type { get; set; }
        public string FarmerName { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Email { get; set; }
    }
}
