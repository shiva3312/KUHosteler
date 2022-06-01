import React, { useState , useEffect } from "react";
import Footer from "./Footer";
import {signout , isAuthenticated} from '../auth/index.js'
import {Link} from 'react-router-dom'
import '../css/arpan.css'
import id from './image/id.png'
export default function SuggestFeature({history}) 
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
     
      <div className="container pt-5 mt-3 mb-5 pb-3">
        <div className="row ps-5 pe-5 ">
         <div className="card ps-5 sf">
         <div className="topic1 ">HAVE A BETTER SUGGESTION<br/> IN MIND? </div>
          <div className=" col-5 topic1"><img src={id} height="100px" width="100px"alt=""/>
              </div>
          <div className="topic2 pt-4">Share With Us!</div>
          </div>
         
          <div className="col-3 pt-5 ps-0 pe-0 text-center">
            <img src="https://static.vecteezy.com/system/resources/previews/004/105/877/original/self-education-owl-reading-books-isolated-smart-character-cartoon-bird-with-glasses-studying-illustration-owl-get-education-learning-reading-free-vector.jpg" className="imge1 img-thumbnail shadow"alt=".."/>
          </div>
          <div className="text-center col-9 pt-5 mt-3 ps-0 ">
          <div className="mb-3">
            
  <input type="name" className="shadow-sm form-control" id="exampleFormControlInput2" placeholder="name"/>
</div>
          <div className="mb-3">
  <input type="email" className="shadow-sm form-control" id="exampleFormControlInput1" placeholder="email"/>
</div>

<div className="mb-3">
  <textarea className="shadow-sm form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Suggestion"></textarea>
</div>
<button type="submit" className="btn btn-dark">Submit</button>
          </div>
          </div>
      </div>
      


     {/* <center>
                <div className="conta">
              <div className="content">
              <div className="">
              <img src={id} alt=""/>
                 </div>
             <form action="#">
                <div className="topic">GIVE US A BETTER SUGGESTION</div>
               <div className="input-box">
               <input type="text" required/>
                <label>Enter your name</label>
              </div>
             <div className="input-box">
                 <input type="text" required/>
                <label>Decribe about the change</label>
             </div>
              <div className="message-box">
              <textarea></textarea>
              <label>How we will do this change</label>
           </div>
                <div className="input-box">
               <input type="submit" value="Send Message"/>
           </div>
       </form>
          </div>
        </div>
</center> */}
  
  
             <Footer />
 </>
        )};