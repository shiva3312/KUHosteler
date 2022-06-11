import React, { useState , useEffect } from "react";
import Footer from "./Footer";
import {signout , isAuthenticated} from '../auth/index.js'
import {Link} from 'react-router-dom'
import '../css/arpan.css'
import meal from '../image/meal.png'
export default function MealTable({history}) 
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
     <center>
     <h1 className="tit">MEAL MENU</h1>
     <div className="table_respons">
     
     <table className="t1">
      <thead className="t1_thead">
        <tr>
          <th className="thnew">Sl</th>
          <th className="thnew">Image</th>
          <th className="thnew">Day</th>
          <th className="thnew">Morning-Menu</th>
          <th className="thnew">Night-Menu</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td><img src={meal}/></td>
          <td>Sunday</td>
          <td>Rice,Dal,Fish</td>
          <td>Rice,Dal,Chicken</td>
        </tr>

        <tr>
          <td>02</td>
          <td><img src={meal}/></td>
          <td>Monday</td>
          <td>Rice,Dal,Sabji</td>
          <td>Rice,Dal,Fish</td>
        </tr>


        <tr>
          <td>03</td>
          <td><img src={meal}/></td>
          <td>Tuesday</td>
          <td>Rice,Dal,Chicken</td>
          <td>Rice,Dal,Sabji,Papad</td>
        </tr>

        <tr>
          <td>04</td>
          <td><img src={meal}/></td>
          <td>Wednesday</td>
          <td>Rice,Dal,Fish</td>
          <td>Rice,Dal,Sabji,Papad</td>
        </tr>

        <tr>
          <td>05</td>
          <td><img src={meal}/></td>
          <td>Thursday</td>
          <td>Rice,Dal,Chicken</td>
          <td>Rice,Dal,Sabji,Papad</td>
        </tr>

        <tr>
          <td>06</td>
          <td><img src={meal}/></td>
          <td>Friday</td>
          <td>Rice,Dal,Sabji</td>
          <td>Rice,Dal,Fish,Papad</td>
        </tr>

        <tr>
          <td>07</td>
          <td><img src={meal}/></td>
          <td>Saturday</td>
          <td>Rice,Dal,Sabji</td>
          <td>Rice,Dal,Fish</td>
        </tr>
      </tbody>
      
    </table>
  </div>
 </center>
  
             <Footer />
 </>
        )};