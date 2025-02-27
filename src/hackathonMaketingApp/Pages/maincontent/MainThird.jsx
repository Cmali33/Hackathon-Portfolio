import React from "react";
import "../../Styles/Home.css";
const MainThird = () => {
  return (
    <>
      <main style={{ height: "500px" }} className="thid-main">
        <div className="section-blog">
          <h2 className="main-third-heading">Explore Our More Products</h2>
          <p className="section-common-subheading">
            Explore our products for insightful articles,tips,and updates on the
            world of education,skill,development, and personal growth.
          </p>
        </div>
        <div className="grid grid-four--cols" style={{ height: "500px" }}>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://cdn.pixabay.com/photo/2020/08/12/19/05/beauty-product-5483456_640.jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg?size=626&ext=jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://content.jdmagicbox.com/quickquotes/images_main/knitted-cotton-girls-shirt-802431157-luablfp4.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
            <div className="blog-content"></div>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcDqjEyKdEhwGlEyJUfhnDfbDkq-OUWtEIQ&s"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
            <div className="blog-content"></div>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://cdn.pixabay.com/photo/2015/04/20/23/21/makeup-732405_1280.jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
            <div className="blog-content"></div>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
            <div className="blog-content"></div>
          </div>
          <div className="blog">
            <figure>
              <img
                id="img"
                src="https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_1280.jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainThird;
