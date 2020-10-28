import React from "react";
import "./Feature.css";

const Home = (props) => {
  return (
    <>
      <div>
        <div>
          <h1 className="features-heading">Features</h1>
        </div>
        <div className="all-cards">
          <div class=" card card1 card-future1">
            <div class="card-body">
              <img src={require("../images/file.png")} />

              <p class="card-text">Content Upload/Download</p>
            </div>
          </div>

          <div class="card card2 card-future">
            <div class="card-body">
              <img src={require("../images/server.png")} />

              <p class="card-text">Space Management</p>
            </div>
          </div>

          <div class="card card3 card-future">
            <div class="card-body">
              <img src={require("../images/connection.png")} />

              <p class="card-text">Private File Sharing</p>
            </div>
          </div>

          <div class="card card4 card-future">
            <div class="card-body">
              <img src={require("../images/laptop1.png")} />

              <p class="card-text"> Public File Sharing</p>
            </div>
          </div>
        </div>

        <div className="all-cards-bottom">
          <div class="card card3 card-future">
            <div class="card-body">
              <img src={require("../images/refresh.png")} />

              <p class="card-text"> Backup</p>
            </div>
          </div>

          <div class="card card2 card-future">
            <div class="card-body">
              <img src={require("../images/data.png")} />

              <p class="card-text"> Activity History</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
