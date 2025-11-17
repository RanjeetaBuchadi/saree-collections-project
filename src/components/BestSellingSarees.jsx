// src/components/BestSellingSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/BestSellingSarees.css";
import { BestSelling } from "../utils/Data.js";

export default function BestSellingSection() {
  const navigate = useNavigate();

  return (
    <section className="best-sellings">
      <h2>Our Best Sellings</h2>
      <div className="best-grid">
        {BestSelling.map((item, i) => (
          <div
  className="best-card"
  key={item.id}
  onClick={() => navigate(`/product/${item.id}`)}
>

            <div className="best-card-content">
              <img src={item.img} alt="Saree" />
              <p className="best-desc">{item.description}</p>
              <p className="best-price">
                <span className="original-price">{item.originalPrice}</span>{" "}
                <span className="discount-price">{item.discountedPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
//