import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/match-details" className="nav-link">Match Details</Link>
      </li>
      <li className="nav-item">
        <Link to="/top-players" className="nav-link">Top Players</Link>
      </li>
      <li className="nav-item">
        <Link to="/matches-by-date-range" className="nav-link">Matches By Date Range</Link>
      </li>
      <li className="nav-item">
        <Link to="/form" className="nav-link">Form</Link>
      </li>
    </ul>
  );
};

export default Navigation;
