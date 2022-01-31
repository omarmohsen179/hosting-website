import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Upper.css";
function Upper({ BackgroundImage }) {
  return (
    <div>
      <NavigationBar />
      <div
        className="header__image"
        style={{ backgroundImage: "url(" + BackgroundImage + ")" }}
      >
        <div className="Text-container-Upper">
          <div className="Upper-title">
            RealTors
            <p className="Upper-details">
              Contact our Home Realtors team today to find the home of your
              dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upper;
