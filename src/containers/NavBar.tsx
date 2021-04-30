import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="topBar">
      <div className="logo">Servers Explorer</div>
      <div className="menu">
        <NavLink to="/" className="item" activeClassName="active">
          Servers
        </NavLink>
        <NavLink className="item" to="/logout">
          Log out
        </NavLink>
      </div>
    </div>
  );
}
