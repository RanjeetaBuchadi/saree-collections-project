import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoryData, SilkCollection } from "../utils/data";
import "../Styles/Collections.css";

export default function SilkCollectionComponent() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Below ₹1500", "₹1500 - ₹3000", "Above ₹3000"];

  // Example filter logic (you can customize price ranges later if you have price data)
  const filteredImages = SilkCollection.flatMap((collection) =>
    collection.img.filter((url) => {
      if (selectedFilter === "All") return true;
      return true; // Placeholder — replace with price filtering logic when price data is added
    })
  );

  return (
    <section className="silk-page">
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
        <h2>Silk Sarees Collection</h2>
        <div className="saree-grid">
          {filteredImages.map((url, i) => (
            <div className="saree-card" key={i}>
              <img src={url} alt={`Silk Saree ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
