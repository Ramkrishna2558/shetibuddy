using Dapper;
using DIgiBharat.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace DIgiBharat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private IConfiguration _configuration;
        public readonly string connstring;
        public AppUserController(AppDbContext appDbContext, IConfiguration configuration)
        {
            _appDbContext = appDbContext;
            _configuration = configuration;
            connstring = "Data Source=.\\SQLEXPRESS;Initial Catalog=digi-bharat;Integrated Security=True;Trust Server Certificate=true";
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> Ragister([FromBody] AppUser appUser)
        {
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            string query = "select * from AppUsers where Email=@Email;";
            var userExist = await db.QueryFirstOrDefaultAsync<AppUser>(query, new { Email = appUser.Email });
            db.Close();
            
            if (userExist!=null)
            {
                return BadRequest("User Email already exist");
            } else if (appUser.ConformPassword!=appUser.Password)
            {
                return BadRequest("Passowrd and Conform Pasword must be same");
            }
            using var connection = new SqlConnection(connstring);
            connection.Open();
            const string insertquery = "insert into AppUsers ( ConformPassword, Password, Name, createdOn, Email ) values (@ConformPassword, @Password, @Name ,GETDATE(),@Email);";
            int rowsAffected = connection.Execute(query,appUser);
            connection.Close();
            return StatusCode(StatusCodes.Status201Created);
        }



        [HttpPost("[action]")]

        public IActionResult Login([FromBody] Login appUser)
        {
            var user = _appDbContext.AppUsers.FirstOrDefault(x => x.Email == appUser.Email && x.Password == appUser.Password);
            if (user == null)
            {
                return NotFound();
            }

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.Email,user.Email),
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
