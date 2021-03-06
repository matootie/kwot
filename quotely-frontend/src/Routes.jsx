import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />;
        </Route>
      </Switch>
    </Router>
  );
}