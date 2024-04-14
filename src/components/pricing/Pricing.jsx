import React from "react";
import "../membership/membership.css";
import Footer from "../footer/Footer";

const Pricing = () => {
  return (
    <section id="membership">
      <div className="membership-container">
          <h1>
            It's your time to <span>strike!</span>
          </h1>
          <h2 className="plans-h2">Membership plans</h2>

        <div className="membership-cards">
          <div className="membership-card">
            <p className="price">₹2999</p>
            <p className="per_month">Per month Cost : 750</p>
            <ul>
              <li> - Pay 3 Months Get 1 Months Free</li>
            </ul>
            <div className="btn-basic">Basic</div>
          </div>

          <div className="membership-card-strike">
            <p className="price">₹3999</p>
            <p className="per_month">Per month Cost : 666</p>
            <ul>
              <li> - Pay 4 Months Get 2 Months Free</li>
            </ul>
            <div className="btn-strike">Advance</div>
          </div>

          <div className="membership-card">
            <p className="price">₹7999</p>
            <p className="per_month">Per month Cost : 666</p>
            <ul>
              <li> - Annual Membership</li>
            </ul>
            <div className="btn-pro">Pro</div>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
