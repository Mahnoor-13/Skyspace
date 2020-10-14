import React from "react";
import "./Community.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Technology = (props) => {
  //   (function ($) {
  //     "use strict";

  //     // manual carousel controls
  //     $(".next").click(function () {
  //       $(".carousel").carousel("next");
  //       return false;
  //     });
  //     $(".prev").click(function () {
  //       $(".carousel").carousel("prev");
  //       return false;
  //     });
  //   })(jQuery);
  return (
    <>
      <div className="community-back">
        <div className="community-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-9 mx-auto">
                  <div className="row ">
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                      <img
                        className="layer"
                        src={require("../images/Layer11.png")}
                      />

                      <h1 className="community-heading">
                        What the Community is saying
                      </h1>
                    </div>

                    <div className="col-lg-6   ">
                      <section class="pt-5 pb-5">
                        <div class="container container-cards">
                          <div class="row">
                            <div class="col-10 text-right arrow-display">
                              <a
                                class="btn btn-primary mb-3 mr-1 arrow"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                              >
                                <ArrowBackIcon />
                              </a>
                              <a
                                class="btn btn-primary mb-3 arrow "
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                              >
                                <ArrowForwardIcon />{" "}
                              </a>
                            </div>
                            <div class="col-12">
                              <div
                                id="carouselExampleIndicators2"
                                class="carousel slide"
                                data-ride="carousel"
                              >
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <div class="row">
                                      <div class="col-md-4 mb-1">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.
                                            </p>

                                            <p class="john-bent">
                                              <span className="name-card">
                                                {" "}
                                                John Bent
                                              </span>{" "}
                                              <span>|</span>{" "}
                                              <span>CEO & manager,Pelleck</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.
                                            </p>
                                            <p class="john-bent">
                                              <span className="name-card">
                                                {" "}
                                                Jimmy Sawgret
                                              </span>{" "}
                                              <span>|</span>{" "}
                                              <span>Shuhrat</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>

                                          <div className="name-experience">
                                          <p class="card-text-align">
                                            With supporting text below as a
                                            natural lead-in to additional
                                            content.
                                          </p>

                                          <p class="john-bent">
                                            <span className="name-card">
                                              {" "}
                                              John Bent
                                            </span>{" "}
                                            <span>|</span>{" "}
                                            <span>CEO & manager,Pelleck</span>
                                          </p>
                                        </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="carousel-item">
                                    <div class="row">
                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.
                                            </p>
                                            <p class="john-bent">
                                              <span className="name-card">
                                                {" "}
                                                Jimmy Sawgret
                                              </span>{" "}
                                              <span>|</span>{" "}
                                              <span>Shuhrat</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>
                                          <div className="name-experience">
                                          <p class="card-text-align">
                                            With supporting text below as a
                                            natural lead-in to additional
                                            content.
                                          </p>

                                          <p class="john-bent">
                                            <span className="name-card">
                                              {" "}
                                              John Bent
                                            </span>{" "}
                                            <span>|</span>{" "}
                                            <span>CEO & manager,Pelleck</span>
                                          </p>
                                        </div>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <img
                                              className="stars"
                                              src={require("../images/5stars.png")}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.
                                            </p>
                                            <p class="john-bent">
                                              <span className="name-card">
                                                {" "}
                                                Jimmy Sawgret
                                              </span>{" "}
                                              <span>|</span>{" "}
                                              <span>Shuhrat</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
