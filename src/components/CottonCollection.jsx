import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoryData, CottonCollection } from "../utils/data";
import "../Styles/Collections.css";

export default function CottonCollectionComponent() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Below ₹1000", "₹1000 - ₹2000", "Above ₹2000"];

  const filteredImages = CottonCollection.flatMap((collection) =>
    collection.img.filter((url) => {
      if (selectedFilter === "All") return true;
      return true;
    })
  );

  return (
    <section className="cotton-page">
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
              {/* ✅ Wrapped inside a Link */}
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

      <div className="content">
        <h2>Cotton Sarees Collection</h2>
        <div className="saree-grid">
          {filteredImages.map((url, i) => (
            <div className="saree-card" key={i}>
              <img src={url} alt={`Cotton Saree ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
