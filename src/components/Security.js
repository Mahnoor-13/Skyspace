import React from "react";
import "./Security.css";

const Security = (props) => {
  return (
    <>
      <div className="security-back">
        <div className="security-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-9 mx-auto">
                  <div className="row row-wrap">
                    <div className="col-lg-6  img-div-security ">
                      <div className="security-img">
                        <img
                          src={require("../images/undrawsecureservers9.png")}
                          className="security-img2"
                          alt="home img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 lock-security-heading">
                      <img
                        className="lock"
                        src={require("../images/secure.png")}
                      />

                      <h1 className="security-heading">Security</h1>
                      <h5 className="my-3 security">
                        SkySpce provides simple and intuitive interface to store
                        & manage your data, services and interactions
                      </h5>
                    </div>

                    {/* FOR RESPONSIVE */}

                    <div className=" lock-security-heading2">
                      <img
                        className="lock"
                        src={require("../images/secure.png")}
                      />

                      <h1 className="security-heading">Security</h1>
                      <h5 className="my-3 security">
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

export default Security;
