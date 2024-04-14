import React, { useState } from "react";
import './bmi.css';
import Footer from "../footer/Footer";
import POINTS from "../../assets/logos/points.png"

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightMeters = height / 100; // Convert height from cm to meters
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      // Handle input validation or error
      console.log("Please provide valid height and weight.");
    }
  };

  return (
    <div className="container">
      <section id="contact">
        <h1 className="contact-title"><span>BMI</span> Calculator</h1>
        <div className="contact-container">
          <div className="contact-london">
            <h2>BMI Categories</h2>
            <ul>
              <li>
                <img src={POINTS} alt="" />
                If BMI is less than 18.5 = Underweight
              </li>
              <li>
                <img src={POINTS} alt="" />
                If BMI is between 18.5 - 24.9 = Normal
              </li>
              <li>
                <img src={POINTS} alt="" />
                If BMI is between 25 - 29.9 = Overweight
              </li>
              <li>
                <img src={POINTS} alt="" />
                If BMI is greater than 30 = Obesity
              </li>
            </ul>
          </div>

          <form onSubmit={calculateBMI}>
            <div className="contact-form-bg">
              <div className="contact-form">
                <div className="first-row">
                  <div className="name">
                    <p className="input-text">Your Height in CM</p>
                    <input
                      type="text"
                      name="height"
                      value={height}
                      onChange={handleHeightChange}
                      required
                    />
                  </div>

                  <div className="email">
                    <p className="input-text">Your Weight in KG</p>
                    <input
                      type="text"
                      name="weight"
                      value={weight}
                      onChange={handleWeightChange}
                      required
                    />
                  </div>
                </div>
                <br />
                {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
                <br></br>
                <button className="send-btn">Calculate BMI</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bmi;
