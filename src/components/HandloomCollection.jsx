import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoryData, HandloomCollection } from "../utils/data";
import "../Styles/Collections.css";

export default function HandloomCollectionComponent() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Below ₹1200", "₹1200 - ₹2500", "Above ₹2500"];

  // Example filtering (placeholder)
  const filteredImages = HandloomCollection.flatMap((collection) =>
    collection.img.filter((url) => {
      if (selectedFilter === "All") return true;
      return true; // Replace with actual price filter if data is available
    })
  );

  return (
    <section className="handloom-page">
      {/* Sidebar Section */}
      <div className="sidebar">
        <h3>Filters</h3>
        <ul className="filter-list">
          {filters.map((filter) => (
            <li
              key={filter}
              className={selectedFilter === filter ? "active" : ""}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>

        <h3>Categories</h3>
        <ul className="category-list">
          {categoryData.map((cat, i) => (
            <li key={i} className="category-item">
              <Link
                to={`/${cat.name.replace(/\s+/g, "").toLowerCase()}`}
                className="category-link"
              >
                <img src={cat.img} alt={cat.name} />
                <span>{cat.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        <h2>Handloom Sarees Collection</h2>
        <div className="saree-grid">
          {filteredImages.map((url, i) => (
            <div className="saree-card" key={i}>
              <img src={url} alt={`Handloom Saree ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
