import React, { useState } from "react";
import { Link } from "react-router-dom";
import InsuranceForm from "../components/InsuranceForm.jsx"
import girl from "images/girl-pillow-wide.png";
function Home() {
  const [count, setFormVersion] = useState("short");
    return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-content">
          <h2> Expert Help For Your Emotional Health </h2>
            <InsuranceForm/>
        </div>

        <div className="girl-wrap">
          <img src={girl}></img>
        </div>
      </div>
    </div>
    )
}

export default Home


