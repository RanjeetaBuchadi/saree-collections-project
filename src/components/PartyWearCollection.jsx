import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoryData, PartyWearCollection } from "../utils/data";
import "../Styles/Collections.css";

export default function PartyWearCollectionComponent() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Below ₹2000", "₹2000 - ₹4000", "Above ₹4000"];

  // Dummy filter logic (can be updated when you add prices)
  const filteredImages = PartyWearCollection.flatMap((collection) =>
    collection.img.filter((url) => {
      if (selectedFilter === "All") return true;
      return true; // placeholder
    })
  );

  return (
    <section className="partywear-page">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="content">
        <h2>Party Wear Sarees Collection</h2>
        <div className="saree-grid">
          {filteredImages.map((url, i) => (
            <div className="saree-card" key={i}>
              <img src={url} alt={`Party Wear Saree ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
