import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth/index.js";
import { Link } from "react-router-dom";
import imamain from "./image/imgmain.png";
import "../css/arpan.css";
export default function Faq({ history }) {
  useEffect(() => {
    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
          clickedLi = e.target.parentElement;
        } else {
          clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
      });
    }
  }, []);
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
        <div class="accordion">
          <div class="image-box">
            <img src={imamain} />
          </div>
          <div class="accordion-text">
            <div class="title">FAQ</div>
            <ul class="faq-text">
              <li>
                <div class="question-arrow">
                  <span class="question"> How to open a account?</span>
                  <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum, doloribus.
                </p>
                <span class="line"></span>
              </li>
              <li>
                <div class="question-arrow">
                  <span class="question"> How to add guest?</span>
                  <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  JavaScript is a text-based programming language used both on
                  the client-side and server-side that allows you to make web
                  pages interactive
                </p>
                <span class="line"></span>
              </li>
              <li>
                <div class="question-arrow">
                  <span class="question"> How to delete guest?</span>
                  <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                  necessitatibus.
                </p>
                <span class="line"></span>
              </li>
              <li>
                <div class="question-arrow">
                  <span class="question">
                    What is the next step after sending request for account
                    opening?
                  </span>
                  <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, labore.
                </p>
                <span class="line"></span>
              </li>
              <li>
                <div class="question-arrow">
                  <span class="question">
                    What happen if my account opening request will be rejected?
                  </span>
                  <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe, repudiandae!
                </p>
                <span class="line"></span>
              </li>
            </ul>
          </div>
        </div>
      </center>

      <Footer />
    </>
  );
}