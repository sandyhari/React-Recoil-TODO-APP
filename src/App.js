import React from "react";

import { Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Home";
import Descrip from "./pages/Descrip";
import Header from "./commonComponent/Header";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <hr />
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route path={routes.description}>
          <Descrip />
        </Route>
      </Switch>
    </div>
  );
}
