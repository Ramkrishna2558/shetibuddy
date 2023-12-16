using DIgiBharat.Model;
using DIgiBharat.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
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

        [HttpGet("GetAll")]
        [Authorize]
        public IActionResult GetAll()
        {
            //User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email);
            var item = _groupService.getall();
            return Ok(item);
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            var Email = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var Groups = _groupService.getgroups(Email);
            if(Groups != null) {
            return Ok(Groups);
            }

            return NotFound();
        }

        [Route("Create")]
        [HttpPost("(Action)")]
        [Authorize]
        public IActionResult Create([FromBody] GroupModel group)
        {
            var FarmerName = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
            var Email = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            if (_groupService.createGroup(FarmerName, Email, group))
            {
                return StatusCode(StatusCodes.Status201Created);
            }
            else
                return StatusCode(StatusCodes.Status400BadRequest);
        }


        [HttpDelete("DeleteBy/{id}")]
        [Authorize]
        public IActionResult Delete(long id)
        {
            var Email = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            if (_groupService.deleteGroupById(id, Email))
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status404NotFound);
        }
    }
}
