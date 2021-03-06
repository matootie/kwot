import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // contexts
// import { useUserContext } from "./util/contexts/";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Authorize from "./pages/Authorize";


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/authorize">
          <Authorize />
        </Route>
      </Switch>
    </Router>
  );
}
