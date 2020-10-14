import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-back ">
      <div className="all-divs-footer">
        <div>
          <img src={require("../images/logo.png")} width="150" />
        </div>

        <div className="para-footer">
          {" "}
          <p className="main-footer">SKYSPACES</p>
          <p className="storage">Storage</p>
          <p className="storage">Pricing</p>
          <p className="storage">Development community</p>
          <p className="storage">space</p>
        </div>
        <div className="para-footer para-footer-about">
          <p className="main-footer">ABOUT</p>
          <p className="storage">Blog</p>
          <p className="storage">Terms of service</p>
          <p className="storage">Privacy and policy</p>
        </div>
        <div className="para-footer para-footer-follow">
          <p className="main-footer">FOLLOW US</p>
          <p className="storage">Twitter</p>
          <p className="storage">Github</p>
          <p className="storage">Mastodon</p>
          <p className="storage">Discord</p>
        </div>
      </div>

      <div className="footer-input">
        <p className="storage">
          Share your email address for staying in touch with us
        </p>

        <form class="form-inline my-2 my-lg-0 footer-form">
          <input
            class="form-control mr-sm-2 input-foot"
            type="search"
            placeholder="Search"
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
      <hr />
      <div className="footer-followon ">
        <div>
          <div className="storage"> &copy;2020 Skynet Hub Technologies. All rights reserved</div>
        </div>
        <div >
            <img src={require("../images/github.png")} />
            <img src={require("../images/mastodon.png")} />
            <img src={require("../images/mastodon.png")} />
            <img src={require("../images/github.png")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
