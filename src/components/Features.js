import React from "react";
import "./Feature.css";

const Home = (props) => {
  return (
    <>
      <div>
        <div>
          <h2 className="features-heading">Features</h2>
        </div>
        <div className="all-cards">
          <div class=" card card1">
            <div class="card-body">
              <img src={require("../images/file.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>

          <div class="card card2">
            <div class="card-body">
              <img src={require("../images/server.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>

          <div class="card card3">
            <div class="card-body">
              <img src={require("../images/connection.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>

          <div class="card card4">
            <div class="card-body">
              <img src={require("../images/laptop1.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>
        </div>

        <div className="all-cards-bottom">
          <div class="card card3">
            <div class="card-body">
              <img src={require("../images/refresh.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>

          <div class="card card2">
            <div class="card-body">
              <img src={require("../images/data.png")} />

              <p class="card-text">Content UploadDownload</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
