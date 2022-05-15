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
      <nav className=" navbar navbar-expand-lg p-2 navbar-light bg-white ">
        <div className="container-fluid">
          <h3 className="ps-5 fs-1 text fw-bold">KuHosteler</h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ps-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ps-3 px-3">
                <Link className="nav-link fw-bold" to="/student/abouthostel">
                  About
                </Link>
              </li>
              <li className="nav-item ps-3 px-3">
                <Link className="nav-link fw-bold" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item ps-3 px-3">
                <Link className="nav-link fw-bold" to="#">
                  Support
                </Link>
              </li>
              {isAuthenticated() && (
                <Link
                  className="nav-item ps-3 px-3 pt-1"
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <button
                    className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6"
                    type="submit"
                  >
                    Signout
                  </button>
                </Link>
              )}
              {!isAuthenticated() && (
                <li className="nav-item ps-3 px-3 pt-1">
                  <Link to="/auth/signin">
                    <button
                      className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6"
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
      <center>
        <div class="container">
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
            <div class="name_job">JUKTA MAITRA</div>
            <div class="name_job">Student of DETS, Kalyani University(Batch 2018-2022)</div>
            <p>
              {" "}
             Worked on front end part of this website.
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
