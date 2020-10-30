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
                <div className="col-11 mx-auto">
                  <div className="row row-sec row-wrap">
                    <div className="col-lg-6  img-div-security ">
                      <div className="security-img">
                        <img
                          src={require("../images/undrawsecureservers9.png")}
                          className="security-img2"
                          alt="home img"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 lock-security-heading">
                      <img
                        className="lock"
                        src={require("../images/secure.png")}
                      />

                      <h1 className="security-heading">Security</h1>
                      <h5 className="my-3 security">
                        Data is stored in secured decentralized cloud storage
                        powered by Sia blockchain. It is only data storage
                        platform that's fully decentralized without any
                        middleman or single failure point. Sia blockchain is
                        secured by same standards as bitcoin blockchain
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
                        Data is stored in secured decentralized cloud storage
                        powered by Sia blockchain. It is only data storage
                        platform that's fully decentralized without any
                        middleman or single failure point. Sia blockchain is
                        secured by same standards as bitcoin blockchain
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
