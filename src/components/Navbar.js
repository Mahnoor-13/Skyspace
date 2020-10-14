import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand  logo" href="#">
            <img src={require("../images/logo.png")} width="150" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto home-all">
              <li class="nav-item active">
                <a class="nav-link home" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Storage
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0 form-btns">
              <button
                class="btn  btn-outline-success my-2 my-sm-0   mr-sm-2 btn-color-login"
                type="submit"
              >
                Log  in
              </button>
              <button
                class="btn btn-outline-success my-2 my-sm-0 btn-color"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
