import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-cta">
          <h1>Get Fit. Stay Fit.</h1>
          <a href="#membership">
            <div className="btn">Start now</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
