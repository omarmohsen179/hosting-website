import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "../../Assets/download.svg";
import { useLocation, Link, useHistory } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  let history = useHistory();
  let [submenu, setsubmenu] = useState(true);
  let pages = useRef([
    {
      name: "WordPress",
      route: "/",
      dropdown: [{ name: "WordPress" }, { name: "WordPress Hosting" }],
    },
    {
      name: "Hosting",
      route: "/about-us",
      dropdown: [{ name: "WordPress" }, { name: "WordPress Hosting" }],
    },
    { name: "Domain", route: "/listinings" },
    { name: "Website & store", route: "/our-team" },
    { name: "Professional Service", route: "/gallery" },
    { name: "Email", route: "/contact-us" },
    { name: "Resources", route: "/contact-us" },
  ]);
  let pages2 = useRef([
    { name: "Contact Us", route: "/" },
    { name: "Log in", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = useCallback(() => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  }, [window]);
  const getRoutes = useCallback(() => {
    return pages.current.filter((ele) => location.pathname == ele.route)[0];
  }, [location.pathname]);
  useEffect(() => {
    /* axios
      .get("http://localhost:44379/Api/Branch", {
        firstName: "Finn",
        lastName: "Williams",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );*/
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  useEffect(() => {
    console.log();
  }, [location.pathname]);

  let [addclass, setaddclass] = useState(false);
  return (
    <nav className={" NavbarDraw container "} id="mynav">
      <div className="mainclass  container">
        <div className="main-section-navigation ">
          <div className="Logo-size " style={{ cursor: "pointer" }}>
            <img
              onClick={() => history.push("/")}
              src={logo}
              width={"160px"}
              height={"30px"}
            />
          </div>
          <div>
            <ul className="Horizontal-list  remove-dot">
              {pages.current.map((ele, index) => (
                <li
                  className={
                    getRoutes().route == ele.route
                      ? "active-page allnav"
                      : " allnav"
                  }
                  onMouseOver={() => {
                    document
                      .getElementById("dropdown-item-list" + index)
                      .classList.add("display-list-nav");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("dropdown-item-list" + index)
                      .classList.remove("display-list-nav");
                  }}
                >
                  <Link className="Horizontal-list-elements " to={ele.route}>
                    {ele.name}
                  </Link>

                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="Horizontal-list  remove-dot">
            {pages2.current.map((ele) => (
              <li
                className={getRoutes().route == ele.route ? "active-page" : ""}
              >
                <Link className="Horizontal-list-elements" to={ele.route}>
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
          <div id="mySidenav" class="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>

          <input
            style={{ display: "none" }}
            id="check02"
            type="checkbox"
            name="menu"
          />
          <div
            style={{ width: "60px" }}
            className="collabse-button"
            onClick={() => {
              document.getElementById("touch").classList.toggle("collapsed");
              setsubmenu(!submenu);
              if (submenu) {
                document.getElementById("mySidenav").style.width = "250px";
                //ar
                //document.getElementById("maincontent").style.marginLeft ="250px";
                // document.getElementById("mySidenav").style.left = "0";
                //en
                document.getElementById("maincontent").style.marginRight =
                  "250px";
                document.getElementById("mySidenav").style.right = "0";
              } else {
                document.getElementById("maincontent").style.marginRight = "0";
                document.getElementById("mySidenav").style.width = "0px";
              }

              //    document.getElementById("sidemenu").classList.toggle("open");
            }}
          >
            <button
              className={"navbar-toggler " + (submenu ? "collapsed" : "")}
              type="button"
              id="touch"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "transparent", cursor: "pointer " }}
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
{
  /*      
  
   <div className="first-nav ">
          <ul className="Horizontal-list  remove-dot">
            {pages.current.map((ele) => (
              <li
                className={getRoutes().route == ele.route ? "active-page" : ""}
              >
                <Link className="Horizontal-list-elements" to={ele.route}>
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="secondary-nav">
          <ul className="Horizontal-list  remove-dot">
            {pages2.current.map((ele) => (
              <li
                className={getRoutes().route == ele.route ? "active-page" : ""}
              >
                <Link className="Horizontal-list-elements" to={ele.route}>
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <input
          style={{ display: "none" }}
          id="check02"
          type="checkbox"
          name="menu"
        />
        <div
          style={{ width: "60px" }}
          className="collabse-button"
          onClick={() => {
            document.getElementById("mynav").classList.toggle("transition");
            document
              .getElementById("displayedlist")
              .classList.toggle("transition-list");
            document.getElementById("touch").classList.toggle("collapsed");
          }}
        >
          <button
            className="navbar-toggler collapsed"
            type="button"
            id="touch"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </div>
  
  
  
  
  
  
  
  
  
  
  <div>
        <ul className="DropDownList2" id={"displayedlist"}>
          {pages.current.map((ele) => (
            <li className={getRoutes().route == ele.route ? "active-page" : ""}>
              <Link to={ele.route}>{ele.name}</Link>
            </li>
          ))}
        </ul>
      </div> 
  
    .DropDownList li {
    display: block;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: background 0.3s;
    white-space: nowrap;
  }
  .DropDownList li a {
    color: white;
    text-decoration: none;
    font-family: "Montserrat", Arial, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 13px;
  }
   input:checked ~ .DropDownList {
  max-height: 600px;
  transition: max-height 0.5s ease-in;
}
  .DropDownList {
    max-height: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    background: #86110e;
    position: absolute;
    transition: max-height 0.5s ease-out;

    min-width: 100%;
    left: 0;
    top: 90px;
  }
            <input
            id="check02"
            type="checkbox"
            name="menu"
            style={{ display: "none" }}
          />
  <input
          style={{ display: "none" }}
          id="check02"
          type="checkbox"
          name="menu"
        />

        <ul className="DropDownList">
          <li className="active-page">
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Listining</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a href="#">Listining</a>
          </li>
</ul>

  input:checked ~ .DropDownList {
  max-height: 600px;
  transition: max-height 0.5s ease-in;
}*/
}
