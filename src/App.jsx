import "./App.css";
import ScrollToTop from "./Components/ScrollTop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import User from "./Layout/User";
import { Fragment } from "react";
import Unknown from "./Layout/Unknown";
function App() {
  return (
    <div id="maincontent">
      <Fragment>
        <ScrollToTop />

        <Switch>
          <Route path="/" component={Unknown} />
        </Switch>
      </Fragment>
    </div>
  );
}

export default App;
