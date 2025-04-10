import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MatchDetails = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5041/api/Ipl/GetMatchStatistics')
      .then(response => setMatches(response.data))
      .catch(error => console.error('Error fetching match statistics:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Match Statistics</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Match ID</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Total Engagements</th>
          </tr>
        </thead>
        <tbody>
          {matches.map(match => (
            <tr key={match.matchId}>
              <td>{match.matchId}</td>
              <td>{new Date(match.matchDate).toLocaleDateString()}</td>
              <td>{match.venue}</td>
              <td>{match.team1Name}</td>
              <td>{match.team2Name}</td>
              <td>{match.totalEngagements}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchDetails;
