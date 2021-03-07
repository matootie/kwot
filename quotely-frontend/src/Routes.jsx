import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./util/auth/PrivateRoute";

// // contexts
// import { useUserContext } from "./util/contexts/";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Authorize from "./pages/Authorize";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <Route exact path="/sign-in">
          <Welcome />
        </Route>

        <Route exact path="/authorize">
          <Authorize />
        </Route>
      </Switch>
    </Router>
  );
}
