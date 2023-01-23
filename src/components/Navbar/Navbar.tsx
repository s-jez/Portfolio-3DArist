import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-title">
          <span></span>
          <span className="nav-title__artist">
            <a href="#">Wiktoria Skórek</a>
          </span>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
