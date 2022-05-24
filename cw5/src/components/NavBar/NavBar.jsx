import React from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="nav-bar">
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? "Hide Exercises" : "Show Exercises"}
      </button>
      {showMenu && (
        <ul className="nav-bar__menu">
          <li>
            <Link to="/exercise-1">Exercise One</Link>
          </li>
          <li>
            <Link to="/exercise-2">Exercise Two</Link>
          </li>
          <li>
            <Link to="/exercise-3">Exercise Three</Link>
          </li>
          <li>
            <Link to="/exercise-4">Exercise Four</Link>
          </li>
          <li>
            <Link to="/exercise-5">Exercise Five</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
