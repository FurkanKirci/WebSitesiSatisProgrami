using Microsoft.AspNetCore.Mvc;

namespace DonemProjesi.Controllers
{
    public class ResponseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
