import React from "react";
import "./Community.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import ReactStars from "react-stars";

const Community = (props) => {
  return (
    <>
      <div className="community-back">
        <div className="community-heading-display">
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-10 mx-auto">
                  <div className="row comunity-row ">
                    {" "}
                    <div className="  community-heading-image">
                      <FormatQuoteIcon className="layer" />

                      <h1 className="community-heading">
                        What the <b>Community</b> <br /> is saying
                      </h1>
                    </div>
                    <div className="col-lg-8">
                      <section class="pt-5 pb-5">
                        <div class=" container-cards">
                          <div class="row-cards">
                            <div class="col-9 text-right arrow-display">
                              <a
                                class="btn btn-primary mb-3 mr-1 arrow arrow-right"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                              >
                                <ArrowBackIcon className="arrow-back" />
                              </a>
                              <a
                                class="btn btn-primary mb-3 arrow "
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                              >
                                <ArrowForwardIcon className="arrow-back" />
                              </a>
                            </div>

                            <div class=" all-columns">
                              <div
                                id="carouselExampleIndicators2"
                                class="carousel slide"
                                data-ride="carousel"
                                data-interval="false"
                              >
                                <div class="carousel-inner carousel-inner1">
                                  <div class="carousel-item active">
                                    <div class="row card-border-margin">
                                      <div class="col-md-4 mb-1">
                                        <div class="card card-border card-comunity card-comunity-responsive">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image2"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                    <div class="row card-border-margin">
                                      <div class="col-md-4 mb-3">
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image2"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>
                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image2"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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

          {/* *************************************FOR RESPONSIVE ******************/}
          <section id="header" className="">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-1 mx-auto">
                  <div className="row comunity-row2 ">
                    <div className="  community-heading-image2">
                      <FormatQuoteIcon className="layer2" />

                      <h1 className="community-heading2">
                        What the Community is saying
                      </h1>
                    </div>

                    <div className=" ">
                      <section class="pt-5 pb-5">
                        <div class=" container-cards">
                          <div class="row-cards2">
                            <div class=" text-right2 arrow-display2">
                              <a
                                class="btn btn-primary mb-3 mr-1 arrow2 arrow-right2"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                              >
                                <ArrowBackIcon className="arrow-back" />
                              </a>
                              <a
                                class="btn btn-primary mb-3 arrow2 "
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                              >
                                <ArrowForwardIcon className="arrow-back" />
                              </a>
                            </div>
                            <div class=" all-columns">
                              <div
                                id="carouselExampleIndicators2"
                                class="carousel slide"
                                data-ride="carousel"
                              >
                                <div class="carousel-inner carousel-inner2">
                                  <div class="carousel-item active">
                                    <div class="row card-border-margin2">
                                      <div class="mb-1">
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image"
                                              alt="100%x280"
                                              src={require("../images/Layer13.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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
                                    <div class="row card-border-margin2">
                                      <div class="col-md-0 mb-3">
                                        <div class="card card-border card-comunity">
                                          <div className="community-images-stars">
                                            <img
                                              class="img-fluid layer-image2"
                                              alt="100%x280"
                                              src={require("../images/Layer14.png")}
                                            />
                                            <ReactStars
                                              className="stars"
                                              size={22}
                                              color1={"#1ed660"}
                                              color2={"#1ed660"}
                                            />
                                          </div>

                                          <div className="name-experience">
                                            <p class="card-text-align">
                                              With supporting text below as a
                                              natural lead-in to additional
                                              content.With supporting text below
                                              as a natural lead-in to additional
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

export default Community;
