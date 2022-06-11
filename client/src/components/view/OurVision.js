import React, { useState , useEffect } from "react";
import Footer from "../Footer";
import {signout , isAuthenticated} from '../../auth/index.js'
import {Link} from 'react-router-dom'
import '../../css/arpan.css'
import vision from '../../image/VISION.png'
export default function OurVision({history}) 
       {
        return(
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
      <img src={vision} />
    </div>
    <div className="accordion-text">
      <div className="title">OUR VISION</div>
      <p className="faq-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>

    </div>
  </div>
 </center>
  
             <Footer />
 </>
        )};