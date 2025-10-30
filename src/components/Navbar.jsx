import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1.png";
import "../Styles/Navbar.css";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import "../components/ProfileMenu.jsx";
import ProfileMenu from "../components/ProfileMenu.jsx";


export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Searching for:", e.target.value);
    // 👉 You can later add filtering or navigation logic here
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="VastraShilp Logo" className="logo" />
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/collections">Collections</Link></li> */}
        <li className="dropdown">
       <li><Link to="/collection">Collections</Link></li>
  {/* { <ul className="dropdown-menu">
    <li><Link to="/collections/silk">Silk Sarees</Link></li>
    <li><Link to="/collections/cotton">Cotton Sarees</Link></li>
    <li><Link to="/collections/party">Party Wear</Link></li>
    <li><Link to="/collections/handloom">Handloom</Link></li>
  </ul> } */}
</li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
      {/* Search + Icons */}
      <div className="right-section">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Sarees..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <ProfileMenu/>
        {/* <div className="icon-container">
          <FaUser className="nav-icon" title="Profile" />
          <FaShoppingCart className="nav-icon" title="Cart" />
        </div> */}
      </div>
    </nav>
  );
}
