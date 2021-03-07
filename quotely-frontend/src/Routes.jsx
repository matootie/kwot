import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./util/auth/PrivateRoute";

// // contexts
// import { useUserContext } from "./util/contexts/";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Authorize from "./pages/Authorize";

import History from "./pages/History";

import Submit from "./pages/Submit";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />

        <PrivateRoute path="/submit" component={Submit} exact />

        <Route exact path="/sign-in">
          <Welcome />
        </Route>
        <Route exact path="/authorize">
          <Authorize />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
      </Switch>
    </Router>
  );
}
