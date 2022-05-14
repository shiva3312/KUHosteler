import React, { useState , useEffect } from "react";
import Footer from "./Footer";
import {signout , isAuthenticated} from '../auth/index.js'
import {Link} from 'react-router-dom'
import '../css/arpan.css'
import meal from './image/meal.png'
export default function MealTable({history}) 
       {
        return(
 <>
            <nav className=" navbar navbar-expand-lg p-2 navbar-light bg-white ">
             <div className="container-fluid">
            <h3 className="ps-5 fs-1 text fw-bold">KuHosteler</h3>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
          
             <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">                            
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" to="/student/abouthostel">About</Link>
                    </li>
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" to="#">Contact</Link>
                    </li>
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" to="#">Support</Link>
                    </li>
                    {isAuthenticated() && (                       
                        <Link className="nav-item ps-3 px-3 pt-1"  onClick={() => signout(() => { history.push("/"); }) } >
                        <button className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6" type="submit">Signout</button>
                        </Link>
                     )}
                     {!isAuthenticated() &&(
                        <li className="nav-item ps-3 px-3 pt-1">
                        <Link to="/auth/signin"><button className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6" type="submit">Log In</button></Link>
                        </li>
                    )}
                                        
                 </ul>
            </div>
        </div>
     </nav>
     <center>
     <h1 class="tit">MEAL MENU</h1>
     <div class="table_respons">
     
     <table class="t1">
      <thead class="t1_thead">
        <tr>
          <th class="thnew">Sl</th>
          <th class="thnew">Image</th>
          <th class="thnew">Day</th>
          <th class="thnew">Morning-Menu</th>
          <th class="thnew">Night-Menu</th>
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