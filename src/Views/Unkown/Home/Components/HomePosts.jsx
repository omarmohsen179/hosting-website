import React from "react";
import img2 from "../../../../Assets/post1.webp";
const HomePosts = () => {
  const posts = [
    {
      Image: img2,
      uppertitle: "Bluehost Website Builder",
      mainTitle: "Our new Builder makes WordPress website creation fun & easy.",
      body: "Designing a professional website has never been simpler. Now you can enjoy building your dream site in WordPress without using any code.",
    },
  ];
  return (
    <div className="container home-posts-container">
      {posts.map((ele) => (
        <div>
          <div className="upper-title-home-post">{ele.uppertitle}</div>
          <div className="main-title-home-post">{ele.mainTitle}</div>
          <div className="post-body-home  ">{ele.body}</div>
          <div className="post-image-container">
            <img src={ele.Image} width={"100%"} height={"100%"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePosts;
