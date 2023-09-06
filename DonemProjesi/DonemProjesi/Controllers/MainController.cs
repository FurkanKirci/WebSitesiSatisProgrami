using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Encodings.Web;

namespace DonemProjesi.Controllers;

public class MainController : Controller
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
    public IActionResult RemoveSession()
    {
        if(HttpContext.Session.TryGetValue("Username", out byte[] value))
        {
            HttpContext.Session.Remove("Username");
        }
        return RedirectToAction("Index" , "Login");
    }
}