import React, { useState , useEffect } from "react";
import Footer from "./Footer";
import {signout , isAuthenticated} from '../auth/index.js'
import {Link} from 'react-router-dom'
import '../css/arpan.css'
export default function ReportBug({history}) {
  // useEffect(() => {
  //   let li= document.querySelectorAll(".labels");
  //      li.addEventListener("click", (e)=>{
  //        let clickedLi;
  //        if(e.target.classList.contains("bx bxs-chevron-down arrow")){
  //          clickedLi = e.target.parentElement;
  //        }else{
  //          clickedLi = e.target.parentElement.parentElement;
  //        }
  //       clickedLi.classList.toggle("hide");
  //    })
  // }, []);
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

     <div class="table_responsive">
             <h1>HELP DESK of {}</h1>
    <table class="t1">
      <thead>
        <tr>
          <th>Sl</th>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Designation</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp" alt=""/></td>
          <td>Muhibbullah Ansary</td>
          <td>+880 017xx-xxxxxx</td>
          <td>medical</td>
        </tr>

        <tr>
          <td>02</td>
          <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/webp-to-png.png.webp" alt=""/></td>
          <td>Moshior Rahman Arif</td>
          <td>+880 017xx-xxxxxx</td>
          <td>electrician</td>
        </tr>


        <tr>
          <td>03</td>
          <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp" alt=""/></td>
          <td>Suibe</td>
          <td>+880 017xx-xxxxxx</td>
          <td>Attendant</td>
        </tr>

      </tbody>
      <tbody class="labels">
			<tr>
				<td colspan="5">
					<label for="management">PREFECT</label>
					{/* <input type="checkbox" name="management" id="management" data-toggle="toggle"/> */}
          <i class="bx bxs-chevron-down arrow"></i>
				</td>
			</tr>
		</tbody>
		<tbody class="hide">
			<tr>
			<td>03</td>
          <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp" alt=""/></td>
          <td>Suibe</td>
          <td>+880 017xx-xxxxxx</td>
          <td>Attendant</td>
			</tr>
      </tbody>

    </table>
  </div>
<Footer />
 </>
        )};