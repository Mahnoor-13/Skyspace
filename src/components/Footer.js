import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-back ">
      <div className="all-divs-footer">
        <div className="footer-skyspace-img">
          <img
            className="footer-img-cursor"
            src={require("../images/logo.png")}
            width="200"
          />
        </div>
        <div className="para-footer ">
          {" "}
          <h4 className="main-footer footer-img-cursor ">SKYSPACES</h4>
          <h6 className="storage footer-img-cursor footer-img-cursor1">
            Storage
          </h6>
          <h6 className="storage footer-img-cursor footer-space">Pricing</h6>
          <h6 className="storage footer-img-cursor footer-space">
            Development community
          </h6>
          <h6 className="storage footer-img-cursor footer-space">space</h6>
        </div>
        <div className="para-footer para-footer-about footer-img-cursor">
          <h4 className="main-footer footer-img-cursor ">ABOUT</h4>
          <h6 className="storage footer-img-cursor footer-img-cursor1">Blog</h6>
          <h6 className="storage footer-img-cursor footer-space">
            Terms of service
          </h6>
          <h6 className="storage footer-img-cursor footer-space">
            Privacy and policy
          </h6>
        </div>
        <div className="para-footer para-footer-follow ">
          <h4 className="main-footer footer-img-cursor">FOLLOW US</h4>
          <h6 className="storage footer-img-cursor footer-img-cursor1">
            Twitter
          </h6>
          <h6 className="storage footer-img-cursor footer-space">Github</h6>
          <h6 className="storage footer-img-cursor footer-space">Mastodon</h6>
          <h6 className="storage footer-img-cursor footer-space">Discord</h6>
        </div>
      </div>
      {/*************************For Responsive****************/}
      <div className="footer-responsive">
        <div className="responsive-image-sky-space">
          <img
            className="footer-img-cursor2 logo-responsive"
            src={require("../images/logo.png")}
            width="180"
          />
        </div>
        <div className="all-divs-footer2">
          <div className="para-footer sky-space">
            <p className="main-footer footer-img-cursor2 ">SKYSPACES</p>
            <p className="storage footer-img-cursor2">Storage</p>
            <p className="storage footer-img-cursor2">Pricing</p>
            <p className="storage footer-img-cursor2">Development community</p>
            <p className="storage footer-img-cursor2">space</p>

            <p className="main-footer footer-img-cursor2">ABOUT</p>
            <p className="storage footer-img-cursor2">Blog</p>
            <p className="storage footer-img-cursor2">Terms of service</p>
            <p className="storage footer-img-cursor2">Privacy and policy</p>
          </div>
          <div className="para-footer para-footer-about footer-img-cursor2">
            <p className="main-footer footer-img-cursor-follow">FOLLOW US</p>
            <p className="storage footer-img-cursor2">Twitter</p>
            <p className="storage footer-img-cursor2">Github</p>
            <p className="storage footer-img-cursor2">Mastodon</p>
            <p className="storage footer-img-cursor2">Discord</p>
          </div>
        </div>
      </div>
      {/***************************************  ********************************/}
      <div className="footer-input">
        <p className="storage email">
          Share your email address for staying in touch with us
        </p>

        <form class="form-inline my-2 my-lg-0 footer-form">
          <input
            class=" mr-sm-2 input-foot input"
            type="search"
            placeholder="Email address"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0 footer-subscribe"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="bottom-border"></div>{" "}
      <div className="footer-followon ">
        <div>
          <div className="storage-bottom all-right-reserved">
            &copy;2020 Skynet Hub Technologies. All rights reserved
          </div>
        </div>
        <div className="all-images-footor-bottom">
          <div>
            <img
              className="footer-images-bottom"
              src={require("../images/github.png")}
            />
          </div>
          <div>
            <img
              className="footer-images-bottom img-twitter"
              src={require("../images/twit.png")}
            />
          </div>

          <div>
            <img
              className="footer-images-bottom"
              src={require("../images/mastodon.png")}
            />
          </div>

          <div>
            <img
              className="footer-images-bottom"
              src={require("../images/discord1.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
