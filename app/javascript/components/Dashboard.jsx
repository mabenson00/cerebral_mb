import React, { useState } from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation
} from "react-router-dom";
import InsuranceForm from "./InsuranceForm";


function Dashboard(props) {
  const [isInsuranceComplete, setIsInsuranceComplete] = useState(false)

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome To Your Dashboard</h1>
      { !isInsuranceComplete &&
      <div>
        <h2>Please provide your insurance details to complete your registration</h2>
        <InsuranceForm
        userId = {props.userId}
        setIsInsuranceComplete={setIsInsuranceComplete}/>
        </div>
      }
      { isInsuranceComplete &&
      <div>
        Congrats, you did it! Your insurance is complete
      </div>

      }
    </div>
  )
}

export default Dashboard