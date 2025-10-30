import React from "react";
import "../Styles/BestSellingSarees.css";
import { BestSelling } from "../utils/data.js";

export default function BestSellingSection() {
  return (
    <section className="best-sellings">
      <h2>Our Best Sellings</h2>
      <div className="best-grid">
        {BestSelling.map((item, i) => (
          <div className="best-card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3 className="best-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}