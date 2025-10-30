import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>VastraShilp • Handpicked sarees • Since 2025</p>
      <p>© {new Date().getFullYear()} VastraShilp. All rights reserved.</p>
      <div>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}