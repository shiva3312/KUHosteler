import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth/index.js";
import { Link } from "react-router-dom";
// import imamain from './image/imgmain.png'
import arpan from "./image/arpan.jpg";
import shivam from "./image/shivam.jpg";
import jukta from "./image/jukta.jpg";
import "../css/arpan.css";
export default function Developer({ history }) {
  return (
    <>
       <nav className=" navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <h2 className="ps-1 fs-1 text fw-bold">KuHosteler</h2>

          <button
            className=" navbar-toggler drkgrn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon drkgrn"></span>
          </button>

          <div
            className=" collapse navbar-collapse ps-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-start ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link text-white " to="#">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-white" to="#">
                  Support
                </Link>
              </li>
              <li
                className="nav-item ps-3 px-3"
                style={{
                  display:
                    isAuthenticated() &&
                      isAuthenticated().user.profileType === 1
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/manager/dashboard">
                  Dashboard
                </Link>
              </li>
              <li
                className="nav-item ps-3 px-3"
                style={{
                  display:
                    isAuthenticated() &&
                      isAuthenticated().user.profileType === 0
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/student/home">
                  Home
                </Link>
              </li>
              {isAuthenticated() && (
                <Link
                  className="nav-item  pt-1"
                  to=""
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <button
                    className=" btn btn-outline-light btn-sm mt-1"
                    type="submit"
                  >
                    Signout
                  </button>
                </Link>
              )}
              {!isAuthenticated() && (
                <li className="nav-item   pt-1">
                  <Link to="/auth/signin">
                    <button
                      className="btn btn-outline-light btn-sm mt-1"
                      type="submit"
                    >
                      Log In
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <center class="bgch">
        <div class="cont">
          <div class="box">
            <div class="image">
              <img src={shivam} />
            </div>
            <div class="name_job">SHIVAM</div>
            <div class="name_job">Full Stack Developer</div>
            <p>
              {" "}
              Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
              Ratione disuja doloremque reiciendi nemo.
            </p>
            <div class="media-icons">
              <a href="#">
                {" "}
                <i class="fab fa-facebook-f"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-twitter"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-instagram"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-linkedin-in"></i>{" "}
              </a>
            </div>
            <div class="btns">
              <button>Read More</button>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={jukta} />
            </div>
            <div class="name_job">JUKTA</div>
            <div class="name_job">Student of DETS, Kalyani University(Batch:2018-2022)</div>
            <p>
              {" "}
              Worked on Front end part
            </p>
            <div class="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div class="btns">
              <button>Read More </button>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={arpan} />
            </div>
            <div class="name_job">ARPAN</div>
            <div class="name_job">Fornt End Developer</div>
            <p>
              {" "}
              Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
              Ratione disuja doloremque reiciendi nemo.
            </p>
            <div class="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div class="btns">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </center>

      <Footer />
    </>
  );
}