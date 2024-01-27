using Dapper;
using DIgiBharat.Model;
using DIgiBharat.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Security.Claims;

namespace DIgiBharat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupMemberController : ControllerBase
    {
        private readonly GroupMemberService _groupMemberService;
        public GroupMemberController(GroupMemberService groupMemberService)
        {
            _groupMemberService = groupMemberService;
        }

        [HttpGet("GetMembersByGroupId/{Id}")]
        [Authorize]
        public async Task<IActionResult> GetMembersByGroupId(long id)
        {
            var GroupMember = await _groupMemberService.GetByGroupId(id);
            if (GroupMember == null)
            {
                return NotFound();
            }
            return Ok(GroupMember);
        }


        [Route("AddMember")]
        [HttpPost("(Action)")]
        [Authorize]
        public async Task<IActionResult> AddMember([FromBody] GroupMember groupMember)
        {

            if (await _groupMemberService.AddOrUpdate(groupMember))
            {
                return StatusCode(StatusCodes.Status201Created);
            }
            return BadRequest();
        }

        [HttpGet("GetMemberById/{GroupId}/{Id}")]
        [Authorize]
        public async Task<IActionResult> GetMemberById(long groupid, long id)
        {
            var member = await _groupMemberService.GetById(groupid, id);
            if (member == null)
            {
                return BadRequest();
            }
            return Ok(member);
        }
        [HttpDelete("DeleteBy/{GroupId}/{Id}")]
        [Authorize]
        public async Task<IActionResult> Delete(long groupid, long id)
        {
            if (await _groupMemberService.deleteGroupById(groupid, id))
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status404NotFound);
        }

    }
}
