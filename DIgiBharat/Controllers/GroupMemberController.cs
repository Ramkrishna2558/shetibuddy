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
        public GroupMemberController( GroupMemberService groupMemberService ) { 
            _groupMemberService = groupMemberService;
        }

        [HttpGet("GetMembersByGroupId/{Id}")]
        [Authorize]
        public async Task<IActionResult> GetMembersByGroupId(long id)
        {
            var GroupMember =await _groupMemberService.GetByGroupId(id);
            if (GroupMember == null)
            {
                return NotFound();
            }
            return Ok(GroupMember);
        }

        public async Task<IActionResult> AddMember( GroupMember groupMember)
        {

            return Ok();
        }
    }
}
