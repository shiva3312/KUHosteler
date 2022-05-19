import React, { useState , useEffect } from "react";
import Footer from "./Footer";
import {signout , isAuthenticated} from '../auth/index.js'
import {Link} from 'react-router-dom'
import '../css/arpan.css'
import reunion from './image/reunion.jpg'
import reunion2 from './image/reunion2.jpg'
import reunion3 from './image/reunion3.jpg'
import ku from './image/ku.jpg'
import bt from './image/bt.jpg'
import BTMENS from './image/BTMENS.jpg'
import user2 from './image/user2.jpg'
import provc from './image/provc.jpg'
import VC from './image/VC.jpg'
import chan from './image/chan.jpg'
export default function AboutHostel({history}) 
       {
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
                <Link className="nav-link text-white" to="/student/home">
                  Home
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
     <center class="bgch">
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ku} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>WELCOME TO KALYANI UNIVERSITY</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                             
            </div>
          </div>
          <div class="carousel-item">
            <img src={bt} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>START YOUR CAREER WITH OUR CAMPUS</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                              
            </div>
          </div>
          <div class="carousel-item">
            <img src={BTMENS} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>HOSTEL LIFE</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                              
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
     
  
  




    <section >
          <div class="container">
            <div class="cont">
            
      <div class="box">
      <div class="image">
         <img src={chan}/>
        </div>
        <div class="name_job">Shri Jagdeep Dhankhar</div>
        <div class="name_job">Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
          <button>Read More</button>
        </div>
      </div>
      
      <div class="box">
        <div class="image">
          <img src={VC}/>
        </div>
        <div class="name_job">Dr. Manas Kumar Sanyal</div>
        <div class="name_job">Vice Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
          <button>Read More </button>
        </div>
      </div>
      
      <div class="box">
        <div class="image">
        <img src={provc}/>
        </div>
        <div class="name_job">Prof. Dr Goutam Paul</div>
        <div class="name_job">Pro Vice Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
          <button>Read More</button>
        </div>
      </div>
    
    
    
            
</div></div></section> 



      <section>
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-12 col-12">

                      <div class="about-img">
                          <img src={ku} alt="" class="img-fluid"/>
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                      <div class="about-text">
                            <h2>We Provide the Best Quality <br/> Services Ever</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro doloribus obcaecati placeat natus iste odio est non earum?</p>
                            
                      </div>
                  </div>
              </div>
          </div>
      </section> 
      <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header text-center pb-5">
                        <h2>Our Events</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4 ">
                    <div class="card text-light text-center bg-white pb-2 bgch2 ">
                        <div class="card-body text-dark ">
                          <div class="img-area mb-4">
                              <img src={reunion} class="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-light text-center bg-white pb-2 bgch2 ">
                        <div class="card-body text-dark">
                          <div class="img-area mb-4">
                          <img src={reunion2} class="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-light text-center bg-white pb-2 bgch2 ">
                        <div class="card-body text-dark">
                          <div class="img-area mb-4">
                          <img src={reunion3} class="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section class="services section-padding" id="services">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="section-header text-center pb-5">
                          <h2>Our Services</h2>
                         
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 col-lg-4 ">
               
                    <div class="card text-white text-center bg-dark pb-2">
                        <div class="card-body">
                            <i class="bi bi-laptop"></i>
                            <h3 class="card-title">TOTAL STUDENT</h3>
                            <p class="lead text-warning">150</p>
                            {/* <button class="btn bg-warning text-dark">Read More</button> */}
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 ">
                
                    <div class="card text-white text-center bg-dark pb-2">
                        <div class="card-body">
                            <i class="bi bi-laptop"></i>
                            <h3 class="card-title">TOTAL ROOM</h3>
                            <p class="lead text-warning">35</p>
                            {/* <button class="btn bg-warning text-dark">Read More</button> */}
                        </div>
                    </div>
                </div>
                  <div class="col-12 col-md-12 col-lg-4 ">
               
                      <div class="card text-white text-center bg-dark pb-2">
                          <div class="card-body">
                            <i class="bi bi-journal"></i>
                              <h3 class="card-title">ROOM CHARGE</h3>
                              <p class="lead text-warning">₹1200</p>
                              {/* <button class="btn bg-warning text-dark">Read More</button> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>  
      
</center>
  
  
             <Footer />
 </>
        )};