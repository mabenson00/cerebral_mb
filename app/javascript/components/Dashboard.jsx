import React, { useState } from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation
} from "react-router-dom";
import InsuranceForm from "./InsuranceForm";


function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome To Your Dashboard</h1>
      { !props.isInsuranceComplete &&
      <div>
        <h2>Please provide your insurance details to complete your registration</h2>
        <InsuranceForm
          userId = {props.userId}
          setIsInsuranceComplete={props.setIsInsuranceComplete}
          />
        </div>
      }
      { props.isInsuranceComplete &&
      <div>
        Congrats, you did it! Your insurance is complete
      </div>
      }
    </div>
  )
}

export default Dashboard