using Microsoft.AspNetCore.Mvc;

namespace MovieRoom.API.Controllers;

[ApiController]
[Route("api/weatherforecast")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet]
    public IEnumerable<object> Get()
    {
        var rng = new Random();
        return Enumerable.Range(1, 5).Select(index => new {
            date = DateTime.Now.AddDays(index),
            temperatureC = rng.Next(-20, 55),
            summary = Summaries[rng.Next(Summaries.Length)]
        });
    }
}
