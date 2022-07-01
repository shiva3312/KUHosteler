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
      <div className="bg-white pt-2">
        <div className="section-title  pt-3">
          <img src ={imamain} height="200px"width="170px"/>
            {/* "https://w7.pngwing.com/pngs/1015/947/png-transparent-question-quiz-test-faq-information-others-business-question-3-d-human.png" height="150px" width="150px" alt=""/> */}
          <h2>FAQ</h2>

        </div>
        <div className="row pb-5 mb-3">
          <div className="col-1">
            {/* <div className="card">
              <img src={imamain} height="400px" width="300px" />
              </div>*/}
          </div> 
          <div className="col-10">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How to open an account?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p>
                      There are three types of profile- Manager, Student and Employee </p>
                    <p className="fw-bold">  Manager Profile: </p>
                    <p>You must have a unique code  and some general information that should be provided by University.
                      1.Go to Log In page 2.Click on Sign up option 3.Select profile type as Manager
                      4.enter the unique code and verify 5.enter your email and verify 6.enter other details as required 7.click on Register
                    </p>

                    <p className="fw-bold text-secondary">Great! you have created an account as Manager. </p>

                    <p className="fw-lighter fst-italic">Go to the Log In page and Enter credential. Upload your profile photo.Now you are ready to go! You will be redirected to the manager dashboard page.</p>

                    <p className="fw-bolder">  Student Profile: </p>
                    <p>1.Go to Log In page 2.Click on Sign up option 3.Select profile type as Student.
                      4.enter your email and verify 5.enter other details as required 6.click on Register
                      <p className="fw-lighter fst-italic">Your request for opening new account has been sent to Manager of your hostel. Once it is approved go to Log In page and enter credential.Upload your profile photo.
                      </p>
                    </p>
                    <p className="fw-bold text-secondary">Now You are Ready to Go!</p>
                    <p className="fw-bolder">  Employee Profile: </p>
                    <p>1.Go to Log In page 2.Click on Sign up option 3.Select profile type as Employee.
                      4.enter your email and verify 6.enter other details as required 7.click on Register
                      <p className="fw-lighter fst-italic">Your request for opening new account has been sent to Manager of your hostel. Once it is approved go to Log In page and enter credential.Upload your profile photo.
                      </p></p>
                    <p className="fw-bold text-secondary">Now You are Ready to Go!</p>
                  </div>
                </div>

              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How to add guest?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"> <p>
                    1. Go to your Add Guest page   2. click on add guest  3. enter name and starting and ending date (Today and before toay is invalid date)   4. click on add button 5. Guest is listed and this will be activated when manager varify it
                  </p></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How to delete guest?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p>  1. Go to your Add Guest page 2. click on Delete button   </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    What is the next step after sending request for account
                    opening?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><p>
                    <p> If you have created account as Student / Employee then untill manager varify your account you can't become member of the corresponding hostel </p>
                  </p></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    What happen if my account opening request will be rejected?
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Contact your manager.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">

      </div>


      <Footer />
    </>
  );
}