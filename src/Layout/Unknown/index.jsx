import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Footer from "../../Components/Footer";
import Home from "../../Views/Unkown/Home";
import FixedIcons from "../../Components/FixedIcons";
import Login from "../../Views/Unkown/Login";
function Unknown() {
  //<FixedIcons />
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />

        <Route path={"/not-found"} component={() => <h1>Not Found</h1>} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Unknown;
