import React from "react";
import "./Technology.css";

const Technology = (props) => {
  return (
    <>
      <div className="technology-back">
        <div className="technology-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-11 mx-auto">
                  <div className="row row-tec ">
                    <div className="col-md-6 lock-technology-heading">
                      <img
                        className="lock"
                        src={require("../images/laptop.png")}
                      />

                      <h1 className="technology-heading">Technology</h1>
                      <h5 className="my-3 technology">
                        SkySpace runs completely on your browser and connects to
                        Skynet CDN for accessing yoour data on Sia Storage. User
                        has option to choose Skynet Free Public Portal or Paid
                        portal or run yourown Skynet portal locally to connect
                        to Sia blockchain. More about Sia and Skyet. Link1, Link2.
                      </h5>
                    </div>

                    {/* FOR RESPONSIVE */}

                    <div className=" lock-technology-heading2">
                      <img
                        className="lock"
                        src={require("../images/laptop.png")}
                      />

                      <h1 className="technology-heading">Technology</h1>
                      <h5 className="my-3 technology">
                        SkySpce provides simple and intuitive interface to store
                        & manage your data, services and interactions SkySpce
                        provides simple and intuitive interface to store &
                        manage your data, services and interactions
                      </h5>
                    </div>

                    <div className="col-lg-6 img-div-technology ">
                      <div className="technology-img">
                        <img
                          src={require("../images/undrawDatapointsrevk.png")}
                          className="technology-img2"
                          alt="home img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Technology;
