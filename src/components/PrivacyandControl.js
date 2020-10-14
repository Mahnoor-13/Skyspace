import React from "react";
import "./PrivacyandControl.css";

const PrivacyandControl = (props) => {
  return (
    <>
      <div className="privacy-back">
        <div className="privacy-heading-display">
            <section id="header"  className="">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-9 mx-auto">
                <div className="row ">
                  <div className="col-md-6 d-flex justify-content-center flex-column">
                  <img className="lock" src={require("../images/padlock.png")} />

                    <h1 className="privacy-heading">
                     Privacy and Control
                    </h1>
                    <h5 className="my-3 privacy">
                      SkySpce provides simple and intuitive interface to store &
                      manage your data, services and interactions
                    </h5>
                  </div>
                  <div className="col-lg-6  img-div-privacy  ">
                    <div className="privacy-img">
                      <img
                        src={require("../images/undrawsecureloginpdn.png")}
                        className="privacy-img2"
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

export default PrivacyandControl;
