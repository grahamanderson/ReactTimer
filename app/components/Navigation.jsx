import React from 'react'
import {Link} from 'react-router-dom'

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/countdown">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://GrahamBling.rocks" target="_blank" rel="noopener noreferrer">
            Graham Anderson</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
