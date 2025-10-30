import React from "react";
import "../Styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About VastraShilp Sarees</h1>

      {/* ✨ Elegant Golden Divider */}
      {/* <img
        src="https://png.pngtree.com/png-vector/20230322/ourmid/pngtree-decorative-golden-floral-divider-png-image_6675947.png"
        alt="divider"
        className="divider-img"
      /> */}

      <p>
        <strong>VastraShilp</strong> is where tradition meets elegance. 
        We bring you the finest handwoven <strong>silk sarees</strong> 
        that reflect the soul of Indian heritage with a modern touch. 
      </p>

      <p>
        Each saree is crafted by skilled artisans using age-old techniques, 
        blending rich colors and intricate designs to make you feel confident, 
        graceful, and timeless.
      </p>

      <p className="quote">
        <em>
          “Every drape tells a story — of beauty, heritage, and the woman who wears it.”
        </em>
      </p>
    </div>
  );
}
