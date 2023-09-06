using DonemProjesi.Models;
using Firebase.Auth;
using FireSharp.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using User = DonemProjesi.Models.User;

namespace DonemProjesi.Controllers
{
    public class SignUpController : Controller
    {
        FirebaseAuthProvider auth;
        public SignUpController()
        {
            auth = new FirebaseAuthProvider(
                           new Firebase.Auth.FirebaseConfig("AIzaSyAHR1Ax9q--4iCRLBACDhxAlHfXDGLi4gA"));
        }

        IFirebaseConfig config = new FireSharp.Config.FirebaseConfig()
        {
            // Firebase projesinin url adresi
            BasePath = "https://donemprojesidb-55d05-default-rtdb.firebaseio.com",
            // Firebase setting sayfasindan aldigimiz secret key
            AuthSecret = "43NWMbWCh2HHIXJWOJtDKupAptHEuGNHhIqE2lDL"
        };
        // Firebase client
        IFirebaseClient client;
        
        public IActionResult Index()
        {
            
            return View();
        }

        [HttpPost]
        public IActionResult SignUp(User user)
        {
            client = new FireSharp.FirebaseClient(config);
            User user2 = new User()
            {
                Id = Guid.NewGuid().ToString(),
                username=user.username,
                name = user.name,
                email = user.email,
                surname = user.surname,
                country = user.country,
                phonenumber = user.phonenumber,
                adress = user.adress,
                password = user.password,
            };
            var gonder = client.Update("users/" + user.username, user2);
            return RedirectToAction("Index");
        }
    }
}
