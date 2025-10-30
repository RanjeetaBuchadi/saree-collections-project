import React from "react";
import "../Styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Discover the Beauty of <span>Indian Sarees</span>
        </h1>
        <p>Elegant handwoven sarees for daily wear and grand celebrations.</p>
        <button>Explore Collection</button>
      </div>
      <div className="hero-banner"></div>
    </div>
  );
}
