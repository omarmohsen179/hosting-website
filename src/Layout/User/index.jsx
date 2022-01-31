import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Footer from "../../Components/Footer";

function User() {
  return (
    <div>
      <Switch></Switch>
      <Footer />
    </div>
  );
}

export default User;
