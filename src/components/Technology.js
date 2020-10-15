import React from "react";
import "./Technology.css";

const Technology = (props) => {
  return (
    <>
      <div className="technology-back">
        <div className="technology-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-9 mx-auto">
                  <div className="row ">
                    <div className="col-md-6 lock-technology-heading">
                      <img
                        className="lock"
                        src={require("../images/laptop.png")}
                      />

                      <h1 className="technology-heading">Technology</h1>
                      <h5 className="my-3 technology">
                        SkySpce provides simple and intuitive interface to store
                        & manage your data, services and interactions
                      </h5>
                    </div>


                     {/* FOR RESPONSIVE */}

                     <div className=" lock-technology-heading2">
                     <img
                       className="lock"
                       src={require("../images/laptop.png")}
                     />

                     <h1 className="technology-heading">technology</h1>
                     <h5 className="my-3 technology">
                       SkySpce provides simple and intuitive interface to store
                       & manage your data, services and interactions
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
