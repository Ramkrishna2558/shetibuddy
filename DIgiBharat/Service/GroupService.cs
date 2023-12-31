using Dapper;
using DIgiBharat.Model;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Runtime.Intrinsics.Arm;
using System.Text.RegularExpressions;

namespace DIgiBharat.Service
{
    public class GroupService
    {
        public readonly string connstring;
        public GroupService()
        {
             connstring = "Data Source=.\\SQLEXPRESS;Initial Catalog=digi-bharat;Integrated Security=True;Trust Server Certificate=true";
        }
        public async Task<List<GroupModel>> getall()
        {
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            const string query = "Select * from Groups;";
            var Groups = (await db.QueryAsync<GroupModel>(query)).ToList();
            db.Close();
            return Groups;
        }

        public async Task<GroupModel> getById(long id, string email)
        {
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            const string query = "Select * from Groups where Id=@Id And Email=@Email;";
            var Group = await db.QueryFirstOrDefaultAsync<GroupModel>(query, new { Id = id, Email=email });
            db.Close();
            return Group;
        }

        public async Task<List<GroupModel>> getgroups(string email)
        {
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            const string query = "Select * from Groups where Email=@Email;";
            var Groups= (await db.QueryAsync<GroupModel>(query, new {Email=email})).ToList();
            db.Close();
            return Groups;
        }
        public async Task<bool> createGroup(string name, string email, GroupModel group) {
            int done = 0;
            group.FarmerName= name;
            group.Email= email;
            group.CreatedOn = DateTime.Now;
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            const string insertquery = "insert into Groups (GroupName, Type, FarmerName, CreatedOn, Email, Amount) values( @GroupName, @Type, @FarmerName, GETDATE() , @Email, @Amount)";
            const string updatetquery = "UPDATE Groups SET GroupName=@GroupName, Type=@Type, Amount=@Amount where id=@Id and Email=@Email;";
            if (group.Id == 0)
            {
                done = await db.ExecuteAsync(insertquery, group);
            } else
            {
                 done= await db.ExecuteAsync(updatetquery, group);
            }
            db.Close();
            if (done > 0)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> deleteGroupById(long id, string email)
        {
            using IDbConnection db = new SqlConnection(connstring);
            db.Open();
            string query = "DELETE FROM Groups WHERE Id = @Id and Email=@Email;";
            int done = await db.ExecuteAsync(query, new { Id = id, Email=email });
            db.Close();
            if (done>0)
            {
                return true;
            }
            return false;
        }
    }
}
