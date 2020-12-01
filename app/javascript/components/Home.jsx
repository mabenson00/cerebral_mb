import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation
} from "react-router-dom";
import SignUpForm from "../components/SignUpForm.jsx"
import girl from "images/girl-pillow-wide.png";
function Home(props) {
    return (
    <div className="home-container">
      <div className="hero-container">
          <h4> {props.userEmail} </h4>
        <div className="hero-content">
            <h2> {props.userId} Expert Help For Your Emotional Health</h2>
            <SignUpForm
            setUserId ={props.setUserId}
            setUserEmail ={props.setUserEmail}/>
        </div>

        <div className="girl-wrap">
            <img src={girl}></img>
        </div>
      </div>
    </div>
    )
}

export default Home


