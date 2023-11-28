using DIgiBharat.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DIgiBharat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private IConfiguration _configuration;
        public AppUserController(AppDbContext appDbContext, IConfiguration configuration)
        {
            _appDbContext = appDbContext;
            _configuration = configuration;
        }
        [HttpPost("[action]")]
        public IActionResult Ragister([FromBody] AppUser appUser)
        {
            var userExist=_appDbContext.AppUser.FirstOrDefault(x=>x.Mail==appUser.Mail);
            if (userExist!=null)
            {
                return BadRequest("User Email already exist");
            }
            appUser.createdOn = DateTime.Now;
            _appDbContext.AppUser.Add(appUser);
            _appDbContext.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }



        [HttpPost("[action]")]

        public IActionResult Login([FromBody] Login appUser)
        {
            var user = _appDbContext.AppUser.FirstOrDefault(x => x.Mail == appUser.Email && x.Password == appUser.Password);
            if (user == null)
            {
                return NotFound();
            }

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.Email,user.Mail),
                new Claim(ClaimTypes.Name,user.Name),
                //new Claim(ClaimTypes.Role, user.role)
            };
            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:Issuer"],
                audience: _configuration["JWT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(365),
                signingCredentials: credentials);
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            if (jwt != null)
            {
                user.Lastlogin=DateTime.Now;
                _appDbContext.SaveChanges();
            }
            return Ok(jwt);
        }

    }
}
