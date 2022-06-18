import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { signout, isAuthenticated } from '../../auth/index.js'
import { Link } from 'react-router-dom'
import '../../css/arpan.css'
import reunion from '../../image/events/reunion.jpg'
import reunion2 from '../../image/events/reunion2.jpg'
import reunion3 from '../../image/events/reunion3.jpg'
import ku from '../../image/ku.jpg'
// import bt from '../../image/hostels/bt.jpg'
import BTMENS from '../../image/hostels//btmens.jpg'
import provc from '../../image/provc.jpg'
import VC from '../../image/VC.jpg'
import chan from '../../image/chan.jpg'

export default function AboutHostel({ history }) {

  //    useEffect(() => {
  //   const script = document.createElement("script")
  //   script.innerHTML = `
  //    var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     slidesPerGroup: 3,
  //     loop: true,
  //     loopFillGroupWithBlank: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   })`
  //   document.body.appendChild(script)
  // }, []);


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
      <section className="features">
        <div className="container pt-4">
          <div className="section-title">
            <h2>About Hostel</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img src={ku} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="fa fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fa fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              </ul>
            </div>
          </div>

          <div className="row" >
            <div className="col-md-5 order-1 order-md-2">
              <img src={BTMENS} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-title pt-3">
        <h2>Our Services</h2>
      </div>
      <div className="facts section-bg " >
        <div className="container">
          <div className="row counters ">
            <div className="col-lg-3 col-6 text-center">
              <span>50</span>
              <p>Rooms</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span>150</span>
              <p>Students</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span>20</span>
              <p>Staffs</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span>1200</span>
              <p>Room Charges</p>
            </div>
          </div>
        </div>
      </div>
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Tetstimonials</h2>
         </div>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-item swiper-slide">
                  <img src={chan} className="testimonial-img" alt="" />
                  <h3>Shri Jagdeep Dhankhar</h3>
                  <h4>Chancellor</h4>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-item swiper-slide">
                  <img src={VC} className="testimonial-img" alt="" />
                  <h3>Dr. Manas Kumar Sanyal</h3>
                  <h4>Pro Vice Chancellor</h4>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-item swiper-slide">
                  <img src={provc} className="testimonial-img" alt="" />
                  <h3>Prof. Dr Goutam Paul</h3>
                  <h4>Pro Vice Chancellor</h4>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-title">
        <h2>Our Events</h2>
      </div>
      <section className="portfolio">
        <div className="container">
          <div className="row portfolio-container" >
            <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
              <div className="portfolio-item">
                <img src={reunion3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
              <div className="portfolio-item">
                <img src={reunion2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
              <div className="portfolio-item">
                <img src={reunion} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
};