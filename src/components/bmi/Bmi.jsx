import React, { useState } from "react";
import './bmi.css';
import Footer from "../footer/Footer";
import POINTS from "../../assets/logos/points.png"

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [activity, setActivity] = useState("Sedentary");
  const [goal, setGoal] = useState("Maintain Weight");
  const [bmi, setBmi] = useState(null);
  const [nutrientIntake, setNutrientIntake] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight && age) {
      const heightMeters = height / 100;
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
      setBmi(bmiValue);

      const bmr = calculateBMR(age, gender, height, weight);
      const tdee = calculateTDEE(bmr, activity);
      const nutrients = calculateNutrientIntake(tdee);
      setNutrientIntake(nutrients);
    } else {
      console.log("Please provide valid height, weight, and age.");
    }
  };

  const calculateBMR = (age, gender, height, weight) => {
    if (gender === "Male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };

  const calculateTDEE = (bmr, activity) => {
    switch (activity) {
      case "Sedentary":
        return bmr * 1.2;
      case "Lightly Active":
        return bmr * 1.375;
      case "Moderately Active":
        return bmr * 1.55;
      case "Very Active":
        return bmr * 1.725;
      case "Extra Active":
        return bmr * 1.9;
      default:
        return bmr;
    }
  };

  const calculateNutrientIntake = (tdee) => {
    const proteinCalories = 0.20 * tdee;
    const carbsCalories = 0.50 * tdee;
    const fatCalories = 0.30 * tdee;

    const proteinGrams = proteinCalories / 4; // 4 calories per gram of protein
    const carbsGrams = carbsCalories / 4; // 4 calories per gram of carbs
    const fatGrams = fatCalories / 9; // 9 calories per gram of fat

    return {
      protein: proteinGrams.toFixed(2),
      carbs: carbsGrams.toFixed(2),
      fat: fatGrams.toFixed(2),
    };
  };

  return (
    <div className="container">
      <section id="bmi">
        <h1 className="bmi-title"><span>BMI</span> Calculator</h1>
        <div className="bmi-container">
          <div className="bmi-london">
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
            <div className="bmi-form-bg">
              <div className="bmi-form">
                <div className="first-row">
                  <div className="name">
                    <p className="input-text">Height in CM</p>
                    <input
                      type="text"
                      name="height"
                      value={height}
                      onChange={handleHeightChange}
                      required
                    />
                  </div>

                  <div className="name">
                    <p className="input-text">Weight in KG</p>
                    <input
                      type="text"
                      name="weight"
                      value={weight}
                      onChange={handleWeightChange}
                      required
                    />
                  </div>
                  <div className="name">
                    <p className="input-text">Your Age</p>
                    <input
                      type="number"
                      name="age"
                      value={age}
                      onChange={handleAgeChange}
                      required
                    />
                  </div>
                  <p className="input-text">Your Gender</p>
                  <br/>
                  <div className="select">
                    <select name="gender" id="format" value={gender} onChange={handleGenderChange} required>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <br/>
                  <p className="input-text">Activity Level</p>
                  <br/>
                  <div className="select">
                    <select name="activity" value={activity} onChange={handleActivityChange}>
                      <option value="Sedentary">Sedentary</option>
                      <option value="Lightly Active">Lightly Active</option>
                      <option value="Moderately Active">Moderately Active</option>
                      <option value="Very Active">Very Active</option>
                      <option value="Extra Active">Extra Active</option>
                    </select>
                  </div>
                  <br/>
                  <p className="input-text">Goal</p>
                  <br/>
                  <div className="select">
                    <select name="goal" value={goal} onChange={handleGoalChange}>
                      <option value="Maintain Weight">Maintain Weight</option>
                      <option value="Mild Weight Loss">Mild Weight Loss (0.25 kg/week)</option>
                      <option value="Weight Loss">Weight Loss (0.5 kg/week)</option>
                      <option value="Extreme Weight Loss">Extreme Weight Loss (1 kg/week)</option>
                      <option value="Mild Weight Gain">Mild Weight Gain (0.25 kg/week)</option>
                      <option value="Weight Gain">Weight Gain (0.5 kg/week)</option>
                      <option value="Extreme Weight Gain">Extreme Weight Gain (1 kg/week)</option>
                    </select>
                  </div>
                </div>
                <br />
                <button className="send-btn">Calculate</button>
                <br/>
                {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
                {nutrientIntake && (
                  <div className="nutrient-intake">
                    <h3>Recommended Daily Nutrient Intake:</h3>
                    <p>Protein: {nutrientIntake.protein} grams/day</p>
                    <p>Carbohydrates: {nutrientIntake.carbs} grams/day</p>
                    <p>Fat: {nutrientIntake.fat} grams/day</p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

<br></br>
<br></br>
<br></br>
<Footer/>
    </div>
  );
};

export default Bmi;
