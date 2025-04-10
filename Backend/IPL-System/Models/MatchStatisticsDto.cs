﻿namespace IPL_System.Models
{
    public class MatchStatisticsDto
    {
        public int MatchId { get; set; }
        public DateTime MatchDate { get; set; }
        public string Venue { get; set; }
        public string Team1Name { get; set; }
        public string Team2Name { get; set; }
        public int TotalEngagements { get; set; }
    }
}
