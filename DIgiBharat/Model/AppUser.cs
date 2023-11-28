using System.ComponentModel.DataAnnotations;

namespace DIgiBharat.Model
{
    public class AppUser
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Mail { get; set; }
        [Required]
        public string Password { get; set; }
        public string Name { get; set; }
        public DateTime? createdOn { get; set; }
        public DateTime? Lastlogin { get; set; }
    }
}
