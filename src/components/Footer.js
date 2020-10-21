import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-back ">
      <div className="all-divs-footer">
        <div>
          <img
            className="footer-img-cursor"
            src={require("../images/logo.png")}
            width="150"
          />
        </div>
        <div className="para-footer ">
          {" "}
          <p className="main-footer footer-img-cursor ">SKYSPACES</p>
          <p className="storage footer-img-cursor">Storage</p>
          <p className="storage footer-img-cursor">Pricing</p>
          <p className="storage footer-img-cursor">Development community</p>
          <p className="storage footer-img-cursor">space</p>
        </div>
        <div className="para-footer para-footer-about footer-img-cursor">
          <p className="main-footer footer-img-cursor">ABOUT</p>
          <p className="storage footer-img-cursor">Blog</p>
          <p className="storage footer-img-cursor">Terms of service</p>
          <p className="storage footer-img-cursor">Privacy and policy</p>
        </div>
        <div className="para-footer para-footer-follow footer-img-cursor" >
          <p className="main-footer footer-img-cursor">FOLLOW US</p>
          <p className="storage footer-img-cursor">Twitter</p>
          <p className="storage footer-img-cursor">Github</p>
          <p className="storage footer-img-cursor">Mastodon</p>
          <p className="storage footer-img-cursor">Discord</p>
        </div>
      </div>

      <div className="footer-input">
        <p className="storage">
          Share your email address for staying in touch with us
        </p>

        <form class="form-inline my-2 my-lg-0 footer-form">
          <input
            class=" mr-sm-2 input-foot input"
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
          <div className="storage">
            {" "}
            &copy;2020 Skynet Hub Technologies. All rights reserved
          </div>
        </div>
        <div>
       
          <img
            className="footer-images-bottom"
            src={require("../images/github.png")}
          />
         
          <img
            className="footer-images-bottom"
            src={require("../images/mastodon.png")}
          />
          <img
            className="footer-images-bottom"
            src={require("../images/github.png")}
          />
          <img className="footer-images-bottom"
          src={require("../images/mastodon.png")}
        />
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
