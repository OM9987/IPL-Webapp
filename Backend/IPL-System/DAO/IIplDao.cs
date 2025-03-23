using System.Numerics;
using IPL_System.Models;

namespace IPL_System.DAO
{
    public interface IIplDao
    {
        Task<bool> AddPlayer(Player player);
        Task<List<PlayerDto>> GetTopPlayers();
        Task<List<MatchStatisticsDto>> GetMatchStatistics();
        Task<List<MatchDto>> GetMatchesByDateRange(DateTime startDate, DateTime endDate);
    }
}