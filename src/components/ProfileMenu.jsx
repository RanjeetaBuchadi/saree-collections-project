import React from "react";
import "../Styles/ProfileMenu.css";

export default function ProfileMenu() {
  return (
    <div className="profile-container">
      <div className="profile-icon">
        <img
  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
  alt="profile"
/>

      </div>

      {/* Dropdown menu */}
      <div className="profile-dropdown">
        <p className="greeting">👋 Hello, User!</p>
        <p className="welcome">Welcome to <span>Vastrashilp</span></p>

        <button className="signup-btn">Sign Up</button>

        <hr />

        <a href="/orders" className="dropdown-link">My Orders</a>
        <a href="/delete-account" className="dropdown-link delete">Delete Account</a>
      </div>
    </div>
  );
}
