using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace DIgiBharat.Model
{
    public class GroupModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string GroupName { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public float Amount { get; set; }
        //public long? FarmerMobileNumber { get; set; }
        public string? FarmerName { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string? Email { get; set; }
        public ICollection<GroupMember>? Members { get; set; }
        public ICollection<MemberAttendaceLog> MemberAttendaceLog { get; set; } 
    }
}
