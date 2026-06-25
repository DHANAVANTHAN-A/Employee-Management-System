import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <h2>EMS</h2>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#dashboard">Dashboard</a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;