using System.ComponentModel.DataAnnotations;

namespace DonemProjesi.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        [Key]
        public string username { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string adress { get; set; }
        public string phonenumber { get; set; }
        public string country { get; set; }
    }
}
