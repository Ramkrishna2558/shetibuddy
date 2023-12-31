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
            const string query = "select * from groupMembers where Id=@id";
            var Groups = (await db.QueryAsync<GroupMember>(query, new { Id = id })).ToList();
            db.Close();
            return Groups;
        }

     
        
    }
}
