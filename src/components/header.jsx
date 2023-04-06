import React from "react";
import freehitlogo from '../images/freehitLogo.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="title-bar">
      <h1>
        <img className="logo" src={freehitlogo} alt="My Image" />
        FREE-HIT
      </h1>
      <ul className="hnav-links">
        <li>
          <input
            type="text"
            placeholder="Search for a tool..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
