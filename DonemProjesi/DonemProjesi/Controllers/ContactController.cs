using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace DonemProjesi.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            if (HttpContext.Session.TryGetValue("Username", out byte[] value))
            {
                // Session'da değer varsa, değeri string olarak al ve buton içine yaz
                string myValue = Encoding.UTF8.GetString(value);
                myValue += "/Cikis Yap";
                ViewBag.ButtonText = myValue;
            }
            else
            {
                // Session'da değer yoksa, buton içine "BUTON" yaz
                ViewBag.ButtonText = "Giriş Yap/Kayıt Ol";
            }

            return View();
        }
    }
}
