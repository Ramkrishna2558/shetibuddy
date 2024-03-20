using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DIgiBharat.Model
{
    public class MemberAttendaceLog
    {
        [Key]
        public long Id { get; set; }

        [ForeignKey("GroupModel")]
        public long GroupId { get; set; }
        [ForeignKey("GroupMember")]
        public long MemberId { get; set; }
        public DateTime? CreatedOn { get; set; }
        public double WorkingMark { get; set; }
    }

    public class MarkAttendanceEntity
    {
        public long MemberId { get; set; }
        public float working { get; set; }
    }
}
