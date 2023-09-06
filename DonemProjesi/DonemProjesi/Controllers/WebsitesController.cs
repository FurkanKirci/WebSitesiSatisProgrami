using Microsoft.AspNetCore.Mvc;

namespace DonemProjesi.Controllers
{
    public class WebsitesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
