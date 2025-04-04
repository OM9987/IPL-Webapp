﻿using IPL_System.DAO;
using IPL_System.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks.Dataflow;
using Newtonsoft.Json;

namespace IPL_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IplController : Controller
    {
        private readonly IIplDao _iplDao;
        public IplController(IIplDao iplDao)
        {
            _iplDao = iplDao;
        }
        [HttpPost("AddPlayer")]
        public async Task<IActionResult> AddPlayer([FromBody] Player player)
        {
            if (await _iplDao.AddPlayer(player))
            {
                return Ok(new { message = "Player added successfully." });
            }
            return BadRequest(new { message = "Failed to add player." });
        }

        [HttpGet("GetMatchStatistics")]
        public async Task<IActionResult> GetMatchStatistics()
        {
            var result = await _iplDao.GetMatchStatistics();
            return Ok(result);
        }

        [HttpGet("GetTopPlayers")]
        public async Task<IActionResult> GetTopPlayers()
        {
            var result = await _iplDao.GetTopPlayers();
            return Ok(result);
        }

        [HttpGet("GetMatchesByDateRange")]
        public async Task<IActionResult> GetMatchesByDateRange([FromQuery] DateTime startDate, [FromQuery] DateTime endDate)
        {
            var result = await _iplDao.GetMatchesByDateRange(startDate, endDate);
            return Ok(result);
        }
    }
}
