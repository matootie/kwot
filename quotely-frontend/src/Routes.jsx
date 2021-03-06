import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
