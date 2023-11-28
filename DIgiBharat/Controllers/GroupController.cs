using DIgiBharat.Model;
using DIgiBharat.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DIgiBharat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupController : ControllerBase
    {
       private readonly GroupService _groupService;

        public GroupController(GroupService groupService)
        {
            _groupService = groupService;

        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            //User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email);
            var item = _groupService.getall();
            return Ok(item);
        }

        [HttpPost("(Action)")]
        [Authorize]
        public IActionResult Create([FromBody]GroupModel group) 
        {
            var FarmerName = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
            var Email=User.Claims.FirstOrDefault(x=>x.Type == ClaimTypes.Email)?.Value;
            if (FarmerName.Any() && Email.Any()) {
                if (_groupService.createGroup(FarmerName, Email, group))
                {
                    return StatusCode(StatusCodes.Status201Created);
                }
            }
            
            return Ok();
        }
    }
}
