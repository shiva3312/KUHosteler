import React, { useState , useEffect } from "react";
import Footer from "../Footer";
import {signout , isAuthenticated} from '../../auth/index.js'
import {Link} from 'react-router-dom'
import '../../css/arpan.css'
import reunion from '../../image/events/reunion.jpg'
import reunion2 from '../../image/events/reunion2.jpg'
import reunion3 from '../../image/events/reunion3.jpg'
import ku from '../../image/ku.jpg'
import bt from '../../image/hostels/bt.jpg'
import BTMENS from '../../image/hostels//btmens.jpg'
import provc from '../../image/provc.jpg'
import VC from '../../image/VC.jpg'
import chan from '../../image/chan.jpg'
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
     <center className="bgch">
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ku} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>WELCOME TO KALYANI UNIVERSITY</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                             
            </div>
          </div>
          <div className="carousel-item">
            <img src={bt} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>START YOUR CAREER WITH OUR CAMPUS</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                              
            </div>
          </div>
          <div className="carousel-item">
            <img src={BTMENS} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>HOSTEL LIFE</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>  
     
  
  




    <section >
          <div className="container">
            <div className="cont">
            
      <div className="box">
      <div className="image">
         <img src={chan}/>
        </div>
        <div className="name_job">Shri Jagdeep Dhankhar</div>
        <div className="name_job">Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>Read More</button>
        </div>
      </div>
      
      <div className="box">
        <div className="image">
          <img src={VC}/>
        </div>
        <div className="name_job">Dr. Manas Kumar Sanyal</div>
        <div className="name_job">Vice Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>Read More </button>
        </div>
      </div>
      
      <div className="box">
        <div className="image">
        <img src={provc}/>
        </div>
        <div className="name_job">Prof. Dr Goutam Paul</div>
        <div className="name_job">Pro Vice Chancellor</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>Read More</button>
        </div>
      </div>
    
    
    
            
</div></div></section> 



      <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-12 col-12">

                      <div className="about-img">
                          <img src={ku} alt="" className="img-fluid"/>
                      </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                      <div className="about-text">
                            <h2>We Provide the Best Quality <br/> Services Ever</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro doloribus obcaecati placeat natus iste odio est non earum?</p>
                            
                      </div>
                  </div>
              </div>
          </div>
      </section> 
      <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Events</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-4 ">
                    <div className="card text-light text-center bg-white pb-2 bgch2 ">
                        <div className="card-body text-dark ">
                          <div className="img-area mb-4">
                              <img src={reunion} className="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-light text-center bg-white pb-2 bgch2 ">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                          <img src={reunion2} className="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-light text-center bg-white pb-2 bgch2 ">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                          <img src={reunion3} className="img-fluid" alt=""/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="services section-padding" id="services">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="section-header text-center pb-5">
                          <h2>Our Services</h2>
                         
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 ">
               
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-laptop"></i>
                            <h3 className="card-title">TOTAL STUDENT</h3>
                            <p className="lead text-warning">150</p>
                            {/* <button className="btn bg-warning text-dark">Read More</button> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 ">
                
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-laptop"></i>
                            <h3 className="card-title">TOTAL ROOM</h3>
                            <p className="lead text-warning">35</p>
                            {/* <button className="btn bg-warning text-dark">Read More</button> */}
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-md-12 col-lg-4 ">
               
                      <div className="card text-white text-center bg-dark pb-2">
                          <div className="card-body">
                            <i className="bi bi-journal"></i>
                              <h3 className="card-title">ROOM CHARGE</h3>
                              <p className="lead text-warning">₹1200</p>
                              {/* <button className="btn bg-warning text-dark">Read More</button> */}
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