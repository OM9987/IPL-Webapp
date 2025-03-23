import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5041/api/Ipl/GetTopPlayers')
      .then(response => setPlayers(response.data))
      .catch(error => console.error('Error fetching top players:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Top Players</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Matches Played</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.playerId}>
              <td>{player.playerId}</td>
              <td>{player.playerName}</td>
              <td>{player.matchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPlayers;
