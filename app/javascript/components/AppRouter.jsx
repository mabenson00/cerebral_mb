import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Header from "./Header"

export default function AppRouter(props)  {
  const [userId, setUserId] = useState(props.user_email)
  const [userEmail, setUserEmail] = useState(props.user_id)
  const isLoggedIn = !!userId

  const homeRoute = () => {
    if (!isLoggedIn) {
      return (
        <Home {...props}
          setUserId={setUserId}
          setUserEmail={setUserEmail}
          userEmail={userEmail}
          userId={userId}
        />
      )
    }

    return (
      <Redirect to="/dashboard" />
    )
  }

  return (
    <div>
    <Header />
    <Router>
      <Switch>
        <Route
          exact path='/'
          render={(props) => (
            homeRoute()
          )}
        />
        <Route path="/dashboard"
            render={(props) => (
              <Dashboard {...props}
                setUserId={setUserId}
                setUserEmail={setUserEmail}
                userEmail={userEmail}
                userId={userId}
              />
            )}
          />
      </Switch>
    </Router>
    </div>
  )
};

