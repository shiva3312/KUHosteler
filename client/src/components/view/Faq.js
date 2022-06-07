import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { signout, isAuthenticated } from "../../auth/index.js";
import { Link } from "react-router-dom";
import imamain from "../../image/imgmain.png";
import "../../css/arpan.css";
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
                <Link className="nav-link text-white" to="/student/profile">
                  Profile
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