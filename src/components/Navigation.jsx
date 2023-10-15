import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">My Notes</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
