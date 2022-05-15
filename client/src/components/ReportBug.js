import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth/index.js";
import { Link } from "react-router-dom";
import "../css/arpan.css";
import email from "./image/email.png";
export default function ReportBug({ history }) {
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
        <div class="conta">
          <div class="content">
            <div class="image-box">
              <img src={email} alt="" />
            </div>
            <form action="#">
              <div class="topic">REPORT ANY BUG</div>
              <div class="input-box">
                <input type="text" required />
                <label>Enter your name</label>
              </div>
              <div class="input-box">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <div class="message-box">
                <textarea></textarea>
                <label>Enter your message</label>
              </div>
              <div class="input-box">
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </center>

      <Footer />
    </>
  );
}
