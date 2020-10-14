import React from "react";
import "./OpenSource.css";

const OpenSource = (props) => {
  return (
    <>
      <div className="open-back">
        <div className="open-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-9 mx-auto">
                  <div className="row ">
                    <div className="col-lg-6 img-div-open   ">
                      <div className="open-img">
                        <img
                          src={require("../images/undrawcolorschemeswv.png")}
                          className="open-img2"
                          alt="home img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                      <img
                        className="lock"
                        src={require("../images/opensource.png")}
                      />

                      <h1 className="open-heading">OpenSource</h1>
                      <h5 className="my-3 open">
                        SkySpce provides simple and intuitive interface to store
                        & manage your data, services and interactions
                      </h5>
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

export default OpenSource;
