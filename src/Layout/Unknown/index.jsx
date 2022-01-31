import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../Components/Footer";
import Home from "../../Views/Unkown/Home";
function Unknown() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default Unknown;
