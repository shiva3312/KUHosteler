import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth/index.js";

export default function Landing({ history }) {
  return (
    
    <div>
      <nav className=" navbar navbar-expand-lg  navbar-light bg-white ">
        <div className="container-fluid">
          <h2 className="ps-5 fs-1 text fw-bold">KuHosteler</h2>

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
                <Link className="nav-link fw-bold" to="#">
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
                <Link className="nav-link fw-bold" to="/manager/dashboard">
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
                <Link className="nav-link fw-bold" to="/student/home">
                  Home
                </Link>
              </li>
              {isAuthenticated() && (
                <Link
                  className="nav-item ps-3 px-3 pt-1"
                  to=""
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <button
                    className="pt-1 pb-1   btn-sm px-2 bg fw-bold text-white fs-6"
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
                      className="pt-1 pb-1   btn-sm px-2 bg fw-bold text-white fs-6"
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
      
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
     
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" class="d-block h-50 w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <div className="content">
        <h2 className="fs-1 text-uppercase " >Welcome!</h2>
        <h2> <i className="icon1 fa fa-university pt-2  fs-1"></i></h2>
        <p className="pt-2 fw-light ">To The Kalyani University Hostel Portal
        <br/><span className="fs-6 dialogue">Trusted and Supported by many students and parents since many years
        </span></p>
       
      </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
      <div className="content">
        <h2 className=" text-uppercase ">Quality Infrastructure</h2>
        <h2> <i className="icon1 fa fa-building pt-2  fs-1"></i></h2>
        <p className="pt-2 fw-light ">Secured, Supportive and Homely environment<br/><span className="dialogue fs-6">We are here to provide you the best infrastructure and good comfort for living</span>
      </p>
      </div>
    </div>
    </div>

    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
      <div className="content">
        <h2 className="fs-1 text-uppercase ">Helping You Grow</h2>
        <h2> <i className="icon1 fa fa-leaf pt-2  fs-1"></i></h2>
        <p className="pt-2 fw-light "> Best environment to focus on study and achieve goals<br/>
        <span className="fs-6 dialogue">We tried our best to keep area noisefree and eco-friendly</span></p>
        <p className=""></p>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="ps-4 pe-4">
  <h1 className=" fs-1 text-start border-bottom ">Our Facilities</h1>
 <div className="lg">
  <div className="text-start col-md-12">
   <i className="fa fa-check text-success bg-light fa-lg">
  </i>
  <span className="fw-bold">&ensp;We provide best environment to study and grow</span>
   
  </div>
  <div className="text-start col-md-12">
   <i className="fa fa-check text-success bg-light fa-lg">
  </i>
  <span className="fw-bold">&ensp;All of our hostels are well secured and protected</span>
   
  </div>
  <div className="text-start col-md-12">
   <i className="fa fa-check text-success bg-light fa-lg">
  </i>
  <span className="fw-bold">&ensp;Ecofriendly and noisefree environment</span>
   
  </div>
  <div className="text-start col-md-12">
   <i className="fa fa-check text-success bg-light fa-lg">
  </i>
  <span className="fw-bold">&ensp;Our student committee also offers a wide range of entertainment events.</span>
   
  </div>
  <div className="text-start col-md-12">
   <i className="fa fa-check text-success bg-light fa-lg">
  </i>
  <span className="fw-bold">&ensp; Large playground available.</span>
   
  </div>
</div>
</div>


<h1 className="pt-2">What students say about us</h1>
<div className=" pt-4 pb-4 mt-5 mb-5">
        <div className="card text-white  mb-3">
          
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="card-body m-2 gradiant shadow">
              <img src="..." class="card-img-top" alt="..."/>
                <p className="card-text  pb-1 fs-sm">Student</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body m-2 gradiant shadow">
              <img src="..." class="card-img-top" alt="..."/>
                <p className="card-text  pb-1 fs-sm">Student</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body m-2 gradiant shadow">
              <img src="..." class="card-img-top" alt="..."/>
                <p className="card-text  pb-1 fs-sm">Student</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body m-2 gradiant shadow">
              <img src="..." class="card-img-top" alt="..."/>
                <p className="card-text  pb-1 fs-sm">Student</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
              <h2>Still having Question?</h2>
      <Footer />
    </div>
  );
}
