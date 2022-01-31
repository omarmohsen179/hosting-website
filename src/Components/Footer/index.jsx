import React, { useRef } from "react";
import "./Footer.css";
//import back from "../../Assets/Navigation/shared.jpg";
import { useLocation, Link } from "react-router-dom";
function Footer() {
  let pages = useRef([
    { name: "Home", route: "/" },
    { name: "About us", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
    { name: "Our Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact Us", route: "/contact-us" },
  ]);
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);
  const colsdiv = "col-lg-4 col-md-4 col-sm-12";
  return (
    <div
      //  style={{ backgroundImage: "url(" + back + ")" }}
      className="footer-container "
    >
      <div className="row main-footer" style={{ margin: 0 }}>
        <div className={colsdiv}>
          <h2 className="footer-section-title">Our Office</h2>
          <div className="footer-section-content">
            13 El-Khalifa El-Maamoun, Mansheya El-Bakry, Heliopolis, Cairo
            Governorate
          </div>
        </div>
        <div className={colsdiv}>
          <div className="footer-section">
            <h2 className="footer-section-title">Web Context</h2>
            <ul className="remove-dot footer-section-content">
              {pages.current.map((ele) => (
                <li>
                  <Link
                    className="Horizontal-list-elements element-hover"
                    to={ele.route}
                    style={{ lineHeight: "40px" }}
                  >
                    {ele.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={colsdiv}>
          <h2 className="footer-section-title">Stay Connected</h2>
          <div className="footer-section-content">
            <div className="footerContactsContainer">
              {social.current.map((ele) => {
                return (
                  <a target="_blank" className="footerContactsContainerIcon">
                    <i className={"fab fa-" + ele.type}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
