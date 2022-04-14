import React, { useRef } from "react";
import "./Footer.css";
//import back from "../../Assets/Navigation/shared.jpg";
import { useLocation, Link } from "react-router-dom";
import menulogo from "../../Assets/download.png";
import { useHistory } from "react-router-dom";
function Footer() {
  let history = useHistory();
  let pages = useRef([
    { name: "Home", route: "/" },
    { name: "About us", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
    { name: "Our Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact Us", route: "/contact-us" },
  ]);
  let Products = useRef([
    { name: "Shared Hosting", route: "/" },
    { name: "WordPress Hosting", route: "/about-us" },
    { name: "Online Store", route: "/listinings" },
    { name: "VPS Hosting", route: "/our-team" },
    { name: "Dedicated Hosting", route: "/gallery" },
    { name: "Hosting Features", route: "/contact-us" },
  ]);
  let Programs = useRef([
    { name: "WordPress", route: "/" },
    { name: "Affiliates", route: "/about-us" },
    { name: "Marketing Services", route: "/listinings" },
    { name: "WordPress Guide", route: "/our-team" },
    { name: "Professional Email", route: "/gallery" },
    { name: "Bluetopia", route: "/contact-us" },
    { name: "Blue Sky", route: "/contact-us" },
  ]);
  let Support = useRef([
    { name: "Chat", route: "/" },
    { name: "Knowledge Base", route: "/about-us" },
    { name: "Marketing Services", route: "/listinings" },
    { name: "WordPress Guide", route: "/our-team" },
  ]);
  let Company = useRef([
    { name: "WordPress", route: "/" },
    { name: "Affiliates", route: "/about-us" },
    { name: "Marketing Services", route: "/listinings" },
    { name: "WordPress Guide", route: "/our-team" },
    { name: "Professional Email", route: "/gallery" },
    { name: "Bluetopia", route: "/contact-us" },
    { name: "Blue Sky", route: "/contact-us" },
  ]);
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);
  const colsdiv = "";

  return (
    <div
      //  style={{ backgroundImage: "url(" + back + ")" }}
      className="footer-container  "
    >
      <div className=" main-footer">
        <ul className={"footer-list-container remove-dot " + colsdiv}>
          <li className="title-list-footer">{"Products"}</li>
          {Products.current.map((ele) => (
            <li className="footer-list-element">{ele.name}</li>
          ))}
        </ul>
        <ul className={"footer-list-container remove-dot " + colsdiv}>
          <li className="title-list-footer">{"Programs"}</li>
          {Programs.current.map((ele) => (
            <li className="footer-list-element">{ele.name}</li>
          ))}
        </ul>
        <ul className={"footer-list-container remove-dot " + colsdiv}>
          <li className="title-list-footer">{"Programs"}</li>
          {Programs.current.map((ele) => (
            <li className="footer-list-element">{ele.name}</li>
          ))}
        </ul>
        <ul className={"footer-list-container remove-dot " + colsdiv}>
          <li className="title-list-footer">{"Support"}</li>
          {Support.current.map((ele) => (
            <li className="footer-list-element">{ele.name}</li>
          ))}
        </ul>
        <div className="footer-details">
          <div>
            <Link to={"/"}>
              <img
                onClick={() => history.push("/")}
                src={menulogo}
                width={"190px"}
                height={"30px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
