import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../Components/Footer";
import Home from "../../Views/Unkown/Home";
import FixedIcons from "../../Components/FixedIcons";
function Unknown() {
  return (
    <div>
      <NavigationBar />
      <FixedIcons />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Unknown;
