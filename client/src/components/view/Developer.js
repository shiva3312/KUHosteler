import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { signout, isAuthenticated } from "../../auth/index.js";
import { Link } from "react-router-dom";
// import imamain from '../image/imgmain.png'
import arpan from "../../image/developers/arpan.jpg";
import shivam from "../../image/developers/shivam.jpg";
import jukta from "../../image/developers/jukta.jpg";
import "../../css/arpan.css";
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
      <main id="main">
      <div className="section-title mt-3 pt-3">
            <h2>Our Team</h2>
          </div>
   <div className="team mb-5" >
      <div className="container p-2">
        <div className="row ">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                    <img src={shivam} className="img-fluid " alt="" />
                <div className="social1">
                  <Link 
                    to={{ pathname: "https://www.facebook.com/kingcobra196" }} 
                    target="_blank">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "https://www.instagram.com/cshivam718/?hl=en" }} 
                    target="_blank">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "https://www.linkedin.com/in/shivam-chaurasia-093844190/"  }}
                    target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Shivam Chaurasiya</h4>
                <span>Full Stack Developer</span>
                <p>I am a rising sophomore at University of Kalyani majoring in Information Technology and a very enthusiastic MERN stack developer. I started my journey as coder who loves coding and now heading towards being a passionate developer, contributing and creating fascinating projects on open source platforms. I am eager to work more on open source platforms , adding further new compelling projects to my list and want to enhance myself as a perfectionist developer .</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={jukta} className="img-fluid" alt=""/>
                <div className="social1">
                  <Link 
                    to={{ pathname: "#" }} 
                    target="_blank">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "#" }} 
                    target="_blank">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "#"  }}
                    target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Jukta Maitra</h4>
                <span>Front End Developer</span>
                <p>I am a student of Kalyani University, Department of Engineering & Technological Studies.I am beginner in Web Development.With my basic knowledge I have tried to design this website.I wish to update it and make it more userfriendly in future with my gained knowledge.</p>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={arpan} className="img-fluid" alt=""/>
                <div className="social1">
                  <Link 
                    to={{ pathname: "#" }} 
                    target="_blank">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "#" }} 
                    target="_blank">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link 
                    to={{  pathname: "#"  }}
                    target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Arpan Pal</h4>
                <span>Front End Developer</span>
                <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </main>
     

      <Footer />
    </>
  );
}