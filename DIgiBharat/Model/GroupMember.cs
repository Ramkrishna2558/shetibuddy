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
        public float? Working { get; set; }
        public float? AdvancePayment { get; set;}

        [ForeignKey("GroupModel")]
        public long GroupModelId { get; set; }
    }
}
