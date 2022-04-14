import React from "react";
import img1 from "../../../../Assets/s1.png";
import img2 from "../../../../Assets/s2.svg";
function Sefvices() {
  const list = [
    {
      image: img1,
      desc: "Picked as 2021 PC Magazine Editors' Choice for Web Hosting.",
    },
    {
      image: img2,
      desc: "Bluehost is one of the top recommended WordPress providers by WordPress.org",
    },
    ,
    {
      image: img2,
      desc: "Bluehost is one of the top recommended WordPress providers by WordPress.org",
    },
  ];
  return (
    <div className="services-container" id="scrolls">
      {list.map((ele, index) => (
        <>
          <div className="service-element">
            <img src={ele.image} />
            <div>{ele.desc}</div>
          </div>
          {index !== list.length - 1 ? (
            <div
              style={{ borderLeft: " 1px solid black", marginRight: "10px" }}
            ></div>
          ) : null}
        </>
      ))}
    </div>
  );
}

export default Sefvices;
