import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">

        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>

          <li>
            <NavLink exact to="/" activeClassName="active-link">Timer</NavLink>
          </li>

          <li>
            <NavLink to="/" activeClassName="active-link">Countdown</NavLink>
          </li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by
            <a href="https://GrahamBling.rocks" target="_blank" rel="noopener noreferrer">
              Graham Anderson
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navigation;
