import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        {/*
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand  logo" href="#">
            <img
              className="logo-img"
              src={require("../images/logo.png")}
              width="150"
            />
          </a>

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
          </div>

          <div>
            <form class="form-btns">
              <button class="btn  btn-outline-success  btn-color" type="submit">
                Log in
              </button>
              <button
                class="btn btn-outline-success btn-color-signup signup"
                type="submit"
              >
                Sign up
              </button>
            </form>

          </div>
        </nav>
  */}
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand  logo" href="#">
            <img
              className="logo-img"
              src={require("../images/logo.png")}
              width="150"
            />
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto home-all">
              <li class="nav-item active">
                <a class="nav-link nav-items home" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item nav-items">
                <a class="nav-link" href="#">
                  Storage
                </a>
              </li>

              <li class="nav-item nav-items">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>

              <li class="nav-item nav-items">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="form-hamburg">
            <form class="my-2 my-lg-0 form-btns">
              <button
                class="btn  btn-outline-success my-2 my-sm-0   mr-sm-2 btn-color"
                type="submit"
              >
                Log in
              </button>
              <button
                class="btn btn-outline-success my-2 my-sm-0 btn-color-signup signup"
                type="submit"
              >
                Sign up
              </button>
            </form>

            <button
              class="navbar-toggler hamburg"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon nav-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
