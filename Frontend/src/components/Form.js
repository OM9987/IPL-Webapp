import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const [playerName, setPlayerName] = useState('');
  const [teamId, setTeamId] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [matchesPlayed, setMatchesPlayed] = useState('');

  const addPlayer = () => {
    const playerData = { playerName, teamId, role, age, matchesPlayed };

    axios.post('http://localhost:5041/api/Ipl/AddPlayer', playerData)
      .then(response => alert('Player added successfully!'))
      .catch(error => console.error('Error adding player:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Add Player</h2>
      <div className="form-group">
        <label>Player Name:</label>
        <input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Team ID:</label>
        <input type="number" value={teamId} onChange={e => setTeamId(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <input type="text" value={role} onChange={e => setRole(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Matches Played:</label>
        <input type="number" value={matchesPlayed} onChange={e => setMatchesPlayed(e.target.value)} className="form-control" />
      </div>
      <button onClick={addPlayer} className="btn btn-primary mt-3">Add Player</button>
    </div>
  );
};

export default Form;
