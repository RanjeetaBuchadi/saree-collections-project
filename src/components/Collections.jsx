import React from "react";
import { collection } from "../utils/data";
import "../Styles/Collections.css";

export default function Collections() {
  return (
    <section className="saree-category">
      <h2 className="collections-heading">All Saree Collections</h2>

      {collection.map((item, index) => (
        <div key={index} className="collection-section">
          {/* <h3 className="collection-title">{item.name}</h3> */}
          <div className="saree-grid">
            {item.img.map((url, i) => (
              <div className="saree-card" key={i}>
                <img src={url} alt={`${item.name} ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
