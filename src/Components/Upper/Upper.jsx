import React from "react";
import ButtonComponent from "../ButtonComponent";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Upper.css";
function Upper({ BackgroundImage }) {
  return (
    <div
      style={{
        background: " linear-gradient(to right  , #b9dffb 50%, #dcf0fd 50%)",
        margin: 0,
        paddingTop: "4.5%",
      }}
    >
      <div className="row " style={{ margin: 0 }}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="Upper-container ">
            <h2 class="small-heading">Shared Hosting</h2>
            <h2 class="large-heading">Web hosting done right.</h2>
            <ButtonComponent Text={"Host Your Site"} />
            <div class="price">
              <strong>
                <span class="starting-price">
                  <p>Starting at</p>
                  <span class="currency-symbol">$</span>2.95
                  <span class="term-text">/mo*</span>
                </span>
              </strong>
            </div>
            <div>
              <ul>
                <li>
                  <p>Drag-and-Drop WordPress Builder</p>
                </li>
                <li>
                  <p>300+ Design Templates</p>
                </li>
                <li>
                  <p>Total WordPress Design Freedom</p>
                </li>
                <li>
                  <p>Domain for 1st Year</p>
                </li>
              </ul>
            </div>
            <div className="Upper-title">
              RealTors
              <p className="Upper-details">
                Contact our Home Realtors team today to find the home of your
                dreams.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="Upper-container ">
            <h2 class="small-heading">Shared Hosting</h2>
            <h2 class="large-heading">Web hosting done right.</h2>
            <ButtonComponent Text={"Host Your Site"} />
            <div className="Upper-title">
              RealTors
              <p className="Upper-details">
                Contact our Home Realtors team today to find the home of your
                dreams.
              </p>
            </div>
          </div>
        </div>

        {/*<div className="col-12">
      <div className="Text-container-Upper">
        <div className="Upper-title">
          RealTors
          <p className="Upper-details">
            Contact our Home Realtors team today to find the home of your
            dreams.
          </p>
        </div>
      </div>
    </div>*/}
      </div>
    </div>
  );
}

export default Upper;
