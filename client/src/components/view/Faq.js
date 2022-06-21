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
        <div className="accordion">
          <div className="image-box">
            <img src={imamain} />
          </div>
          <div className="accordion-text">
            <div className="title">FAQ</div>
            <ul className="faq-text">
              <li>
                <div className="question-arrow">
                  <span className="question"> How to open a account?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                <p>
                  There are three type of profile Manager , Student and Employee </p>
                 <p>  1. To open account as manager </p>
                 <p>     Requirment : User should have a code and some general information.</p>
                 <p>     Procedure : 1. Go to SignUp page </p>
                 <p>                 2. Select profile type as Manager </p>
                 <p>                 3. Enter the code and varify</p>
                 <p>                 4. Enter you email and varify </p>
                 <p>                 5. Enter you required details </p>
                 <p>                 6. Register</p>
                 <p>             Great you created an account as Manager Now SignIn </p>

                 <p>                   7. Goto to signIn page and Enter credential </p>
                 <p>                   8. if you have not uploaded you pic then upload only one time</p>

                 <p>                   after upload you will redirect to Manager dashboard ...</p>

                 <p>  2. To open account as Student/Employee </p>
                 <p>   same process but you don't need any code to open account </p>
                 <p>  If your hostel name is not in hostel list if mean your hostel is not hosted the service  </p>
                 </p>             
                            
                
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question"> How to add guest?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                <p>  1. Go to you Add Guest page  </p>
                <p>   2. click on add guest  </p>
                <p> 3. enter name and starting and ending date (Today and before is invalid date) </p>
                <p>  4. click add button  </p>
                <p>  5. Guest is listed and this will be activated when manager varify it</p>
                </p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question"> How to delete guest?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                <p>  1. Go to you Add Guest page  </p>
                <p>   2. click on Delete button   </p>
                </p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">
                    What is the next step after sending request for account
                    opening?
                  </span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                <p> If you have created account as Student / Employee then untill manager varify your account you can't become member of the corresponding hostel </p>
                </p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">
                    What happen if my account opening request will be rejected?
                  </span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>
                  Contact to your manager
                </p>
                <span className="line"></span>
              </li>
            </ul>
          </div>
        </div>
      </center>

      <Footer />
    </>
  );
}