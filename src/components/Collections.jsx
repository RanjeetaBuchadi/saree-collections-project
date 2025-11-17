import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection } from "../utils/Data"; // importing all products
import "../Styles/Collections.css";

export default function Collections() {
  const navigate = useNavigate(); // navigation hook for product click

  // ------------------------------------
  // PRICE SLIDER STATE
  // ------------------------------------
  const [minPrice, setMinPrice] = useState(0);       // starting slider value
  const [maxPrice, setMaxPrice] = useState(3000);    // ending slider value

  // ------------------------------------
  // QUICK PRICE BUTTONS (Below 499, etc.)
  // ------------------------------------
  const [quickPrice, setQuickPrice] = useState("");  // stores selected quick filter

  // ------------------------------------
  // COLOR FILTER STATE (multiple checkboxes)
  // ------------------------------------
  const [selectedColors, setSelectedColors] = useState([]);

  // ------------------------------------
  // CATEGORY FILTER STATE (multiple checkboxes)
  // ------------------------------------
  const [selectedCategories, setSelectedCategories] = useState([]);

  // ------------------------------------
  // COMMON HANDLER FOR CHECKBOXES
  // ------------------------------------
  const handleCheckboxChange = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));      // remove from list
    } else {
      setter([...list, value]);                      // add to list
    }
  };

  // ------------------------------------
  // MAIN FILTER LOGIC
  // ------------------------------------
  const filteredData = collection.filter((item) => {
    const price = item.priceValue; // numeric value of price

    // 1️⃣ QUICK PRICE BUTTONS
    let matchesQuick = true;
    if (quickPrice === "499") matchesQuick = price <= 499;
    if (quickPrice === "999") matchesQuick = price <= 999;
    if (quickPrice === "1999") matchesQuick = price <= 1999;
    if (quickPrice === "2000plus") matchesQuick = price >= 2000;

    // 2️⃣ SLIDER FILTER (only applies when quickPrice is NOT active)
    let matchesSlider = true;
    if (quickPrice === "") {
      matchesSlider = price >= minPrice && price <= maxPrice;
    }

    // 3️⃣ COLOR FILTER
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(item.color);

    // 4️⃣ CATEGORY FILTER
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    // final check: product must satisfy ALL matching conditions
    return matchesQuick && matchesSlider && matchesColor && matchesCategory;
  });

  return (
    <section className="collections-page">
      <div className="collections-layout">

        {/* ---------------------------------------------------------------- */}
        {/* SIDEBAR FILTER SECTION */}
        {/* ---------------------------------------------------------------- */}
        <aside className="collections-sidebar">

          <h3>Filters</h3>

          {/* ------------------------ PRICE RANGE FILTER ------------------------ */}
          <div className="filter-box">
            <h4>Price Range</h4>

            {/* Dual Slider */}
            <div className="slider-container">
              {/* MIN Price Slider */}
              <input
                type="range"
                min="0"
                max="3000"
                value={minPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value <= maxPrice) {
                    setMinPrice(value);       // update min
                    setQuickPrice("");        // disable quick filter
                  }
                }}
                className="range-slider"
              />

              {/* MAX Price Slider */}
              <input
                type="range"
                min="0"
                max="3000"
                value={maxPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minPrice) {
                    setMaxPrice(value);       // update max
                    setQuickPrice("");        // disable quick filter
                  }
                }}
                className="range-slider"
              />

              {/* Display values */}
              <div className="price-values">
                <span>₹{minPrice}</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>

            {/* QUICK PRICE BUTTONS */}
            <div className="quick-price">
              <button onClick={() => setQuickPrice("499")}>Below ₹499</button>
              <button onClick={() => setQuickPrice("999")}>Below ₹999</button>
              <button onClick={() => setQuickPrice("1999")}>Below ₹1999</button>
              <button onClick={() => setQuickPrice("2000plus")}>Above ₹2000</button>
            </div>
          </div>

          {/* ------------------------ COLOR FILTER ------------------------ */}
          <div className="filter-box">
            <h4>Color</h4>
            {["red", "Blue", "Green", "Black", "White"].map((color) => (
              <label key={color} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() =>
                    handleCheckboxChange(color, selectedColors, setSelectedColors)
                  }
                />
                {color.toUpperCase()}
              </label>
            ))}
          </div>

          {/* ------------------------ CATEGORY FILTER ------------------------ */}
          <div className="filter-box">
            <h4>Category</h4>
            {["Silk Saree", "Cotton Saree", "PartyWear Saree", "Handloom Saree","Banarasi Saree"].map((cat) => (
              <label key={cat} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() =>
                    handleCheckboxChange(cat, selectedCategories, setSelectedCategories)
                  }
                />
                {cat.toUpperCase()}
              </label>
            ))}
          </div>

          {/* RESET BUTTON */}
          <button
            className="reset-btn"
            onClick={() => {
              setSelectedColors([]);      // clear color filters
              setSelectedCategories([]);  // clear category filters
              setMinPrice(0);             // reset slider
              setMaxPrice(3000);
              setQuickPrice("");          // reset quick buttons
            }}
          >
            Reset Filters
          </button>
        </aside>

        {/* ---------------------------------------------------------------- */}
        {/* PRODUCT GRID DISPLAY */}
        {/* ---------------------------------------------------------------- */}
        <div className="collections-grid">
          {filteredData.map((item) => (
            <div
              key={item.id}                                      // unique key
              className="collection-card"                        // card styling
              onClick={() => navigate(`/collection/${item.id}`)} // go to product page
            >
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} />         {/* product image */}
              </div>


              <div className="collection-content">
                <h3>{item.title}</h3>                           {/* product title */}
                <p className="collection-desc">{item.description}</p>
                <p className="collection-price">₹{item.priceValue}</p>{/* formatted price */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
