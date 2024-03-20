using Dapper;
using DIgiBharat.Model;
using Microsoft.Data.SqlClient;
using System.Data;

namespace DIgiBharat.Service
{
    public class GroupMemberService
    {
        private readonly string connection;
        public GroupMemberService() {
            connection = "Data Source=.\\SQLEXPRESS;Initial Catalog=digi-bharat;Integrated Security=True;Trust Server Certificate=true";
        }

        public async Task<List<GroupMember>> GetByGroupId(long id)
        {
            using IDbConnection db = new SqlConnection(connection);
            db.Open();
            const string query = "select * from groupMembers where GroupModelId=@Id;";
            var Groups = (await db.QueryAsync<GroupMember>(query, new { Id = id })).ToList();
            db.Close();
            return Groups;
        }

        public async Task<bool> AddOrUpdate( GroupMember groupMember)
        {
            using IDbConnection db = new SqlConnection(connection);
            db.Open();
            int a;
            const string qurey = "INSERT INTO groupMembers (GroupMemberName, GroupMemberMobileNumber, Working, AdvancePayment, GroupModelId) VALUES (@GroupMemberName, @GroupMemberMobileNumber, @Working, @AdvancePayment, @GroupModelId);";
            const string updateQurey = "UPDATE groupMembers SET GroupMemberName = @GroupMemberName, GroupMemberMobileNumber = @GroupMemberMobileNumber, Working=@Working, AdvancePayment=@AdvancePayment WHERE Id = @Id;";
            if (groupMember.Id == 0)
            {
                a = (await db.ExecuteAsync(qurey, groupMember));
            }
            else
            {
                a= (await db.ExecuteAsync(updateQurey, groupMember));
            }
            db.Close();
            if (a>0) {
                return true;
            }
            return false;
        }


        public async Task<GroupMember> GetById(long groupid, long id)
        {
            GroupMember Group = new GroupMember();
            using IDbConnection db = new SqlConnection(connection);
            db.Open();
            const string query = "select * from groupMembers where GroupModelId=@GroupModelId and Id=@Id;";
            Group = (await db.QueryFirstOrDefaultAsync<GroupMember>(query, new { GroupModelId= groupid, Id = id }));
            db.Close();
            return Group;
        }

        public async Task<bool> deleteGroupById(long groupid, long id)
        {
            using IDbConnection db = new SqlConnection(connection);
            db.Open();
            string query = "DELETE FROM groupMembers WHERE Id = @Id and GroupModelId=@GroupModelId;";
            int done = await db.ExecuteAsync(query, new { GroupModelId = groupid, Id = id });
            db.Close();
            if (done > 0)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> attendance(MarkAttendanceEntity member, long groupId)
        {
            var memberdetail = await GetById(member.MemberId, groupId);
            if (memberdetail != null)
            {
                memberdetail.Working = memberdetail.Working + member.working;
                if (await AddOrUpdate(memberdetail))
                {
                    return true;
                }
            }
            
            return false;
        }
    }
}
