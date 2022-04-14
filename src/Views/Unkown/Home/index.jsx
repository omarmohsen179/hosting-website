import React from "react";
import Upper from "../../../Components/Upper/Upper";
import HomePosts from "./Components/HomePosts";
import Sefvices from "./Components/Services";
import "./index.css";
function Home() {
  return (
    <div>
      <Upper />
      <Sefvices />
      <HomePosts />
    </div>
  );
}

export default Home;
