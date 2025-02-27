import React from "react";
import myworkdata from '../assets/portfolio/myworkdata.js'
function Work(){
  return (
    <>
      <div id="mywork" className="works">
        <div className="work-title">
          <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
          {myworkdata.map((data, i,x,y) => {
            return (
              <>
                <div key={i} className="mywork-showcontainer">
                <img key={x} src={data.w_img} alt="project img" />
                <p key={y}>{data.w_name}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="mywork-showmore">
          <p>Show More →</p>
        </div>
      </div>
    </>
  );
}
export default Work;