import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "../../Assets/download.svg";
import menulogo from "../../Assets/download.png";
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
  const openMenu = () => {
    setsubmenu(false);
    document.getElementById("touch").classList.remove("collapsed");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("maincontent").style.right = "250px";
    document.getElementById("maincontent").style.position = "absolute";
    document.getElementById("mySidenav").style.right = "0";
  };
  const closeMenu = () => {
    setsubmenu(true);
    document.getElementById("touch").classList.add("collapsed");
    document.getElementById("maincontent").style.right = "0";
    document.getElementById("maincontent").style.position = "";
    document.getElementById("mySidenav").style.width = "0px";
  };
  const setDimension = useCallback(() => {
    if (window.innerWidth > 998) {
      closeMenu();
    }
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  }, [window]);
  const getRoutes = useCallback(() => {
    return pages.current.filter((ele) => location.pathname == ele.route)[0];
  }, [location.pathname]);
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const Buttontoggler = () => {
    return (
      <div
        style={{ width: "60px" }}
        className="collabse-button"
        onClick={() => (submenu ? openMenu() : closeMenu())}
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
    );
  };
  return (
    <nav className={" NavbarDraw container "} id="mynav">
      <div className="mainclass  ">
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
                  key={index}
                  className={
                    getRoutes().route == ele.route
                      ? "active-page allnav"
                      : " allnav"
                  }
                >
                  <Link className="Horizontal-list-elements " to={ele.route}>
                    {ele.name}
                  </Link>
                  {ele?.dropdown ? (
                    <div className="dropdown-content">
                      {ele.dropdown.map((ele, indexx) => (
                        <Link key={indexx} className="drop-down-link">
                          {ele.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="Horizontal-list  remove-dot">
            {pages2.current.map((ele, index) => (
              <li
                key={index}
                className={getRoutes().route == ele.route ? "active-page" : ""}
              >
                <Link className="Horizontal-list-elements" to={ele.route}>
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
          <div id="mySidenav" className="sidenav">
            <ul className=" remove-dot " style={{ position: "absolute" }}>
              <li>
                <Link className=" " to={"/"}>
                  <img
                    onClick={() => history.push("/")}
                    src={menulogo}
                    width={"190px"}
                    height={"30px"}
                  />
                </Link>
              </li>
              {pages.current.map((ele, index) => (
                <li key={index}>
                  <Link className=" " to={ele.route}>
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
          <Buttontoggler />
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
