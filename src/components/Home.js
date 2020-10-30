import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <>
      <section id="header" Contact className="">
      <div>
      {" "}
      <h1 className="own-your-space2">
        {" "}
        Own Your Space 
      </h1>{" "}
    </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row flex own-spec">
                <div className="col-9  pt-lg-0 order-2 order-lg-1 all-home-padding-responsive">
                  
                  <div className="para-btn-res">
                    {" "}
                    <h5 className="my-3 skyspace-provivides">
                      SkySpace provides simple and intuitive interface to store &
                      manage your data, services and interactions
                    </h5>
                    <button class="btn   give-it-try" type="submit">
                      Give it a try !
                    </button>
                  </div>
                </div>


                <div className="col-6  pt-lg-0 order-2 order-lg-1 all-home-padding">
                <h1 className="own-your-space">
                  {" "}
                  Own Your Space that's truly yours in every aspect.
                </h1>
                <div className="para-btn-res">
                  {" "}
                  <h5 className="my-3 skyspace-provivides">
                    SkySpace provides simple and intuitive interface to store &
                    manage your data, services and interactions
                  </h5>
                  <button class="btn   give-it-try" type="submit">
                    Give it a try !
                  </button>
                </div>
              </div>
                <div className="col-lg-6  order-lg-2">
                {/* // vector-img-div"> */}
                  <div className="img-div">
                    <img
                      src={require("../images/girlimage.jpg")}
                      // src={require("../images/Vector.png")}
                      className="img-vector"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
