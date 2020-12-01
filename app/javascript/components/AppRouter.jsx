import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default function AppRouter(props)  {
  const [userId, setUserId] = useState(props.user_email)
  const [userEmail, setUserEmail] = useState(props.user_id)
  const isLoggedIn = !!userId
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          render={(props) => (
            <Home {...props}
              setUserId = {setUserId}
              setUserEmail = {setUserEmail}
              userEmail = {userEmail}
              userId = {userId}
            />
          )}
        />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  )
};

