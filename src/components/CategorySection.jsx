import React from "react";
import "../Styles/CategorySection.css";
import { categoryData } from "../utils/data";
import { Link } from "react-router-dom"; // ✅ import Link

export default function CategorySection() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categoryData.map((cat, i) => (
          <Link
            key={i}
            to={`/${cat.name.toLowerCase().replace(" ", "")}`} // ✅ dynamic route like /silksaree
            className="category-card"
          >
            <img src={cat.img} alt={cat.name} />
            <div className="category-overlay">
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
