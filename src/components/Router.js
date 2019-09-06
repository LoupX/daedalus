import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import App from "./App";
import NotFound from "./NotFound";
import Signature from "./Signature";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/Signature" component={Signature} />
      <Route path="/App" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
