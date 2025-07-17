import React from "react";
import "./App.css";
import pic2 from "./assets/pic2.jpg";

function Hero() {
  return (
    <section className="hero-wrapper">
      <img src={pic2} alt="Hero" className="hero-background" />
      <div className="hero-overlay">
        <h1 className="hero-heading">Your Path to Healthier,<br />Stronger Hair Starts Here.</h1>
        <button className="quiz-btn">Take a Quiz now!</button>
      </div>
    </section>
  );
}

export default Hero;
