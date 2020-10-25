import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Details from "./Details";

function Root() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default Root;
