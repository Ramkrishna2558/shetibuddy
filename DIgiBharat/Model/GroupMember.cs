using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DIgiBharat.Model
{
    public class GroupMember
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string GroupMemberName { get; set; }
        [Required]
        public long GroupMemberMobileNumber { get; set; }
        [Required]
        public float WorkingDays { get; set; }
        [Required]
        public float Wages { get; set; }
        public float? AdvancePayment { get; set;}

    }
}
