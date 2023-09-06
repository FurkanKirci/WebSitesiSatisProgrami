using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using Firebase.Auth;
using FireSharp.Response;
using Newtonsoft.Json;
using FireSharp.Interfaces;
using Newtonsoft.Json.Linq;
using DonemProjesi.Models;

namespace DonemProjesi.Controllers
{
    public class LoginController : Controller
    {
        FirebaseAuthProvider auth;
        public LoginController()
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
        public async Task<IActionResult> LogIn(string username, string password)
        {
            client = new FireSharp.FirebaseClient(config);
            FirebaseResponse response = await client.GetAsync("users/");

            dynamic data = JsonConvert.DeserializeObject<dynamic>(response.Body);
            if (data != null)
            {
                foreach (var item in data)
                {
                    if (username == JsonConvert.DeserializeObject<Models.User>(((JProperty)item).Value.ToString()).username && password== JsonConvert.DeserializeObject<Models.User>(((JProperty)item).Value.ToString()).password)
                    {
                        HttpContext.Session.SetString("Username", username);
                        return RedirectToAction("Index","Main");
                    }
                }
            }
            return RedirectToAction("Index");
        }
    }
}
