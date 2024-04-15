import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-cta">
          <h1 className="hero-tag">Get <span>Fit</span>. Stay <span>Fit</span>.</h1>
          <a href="#membership">
            <div className="btn">START NOW</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
