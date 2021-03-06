import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { signout, isAuthenticated } from "../../auth/index.js";
import { Link } from "react-router-dom";
import "../../css/arpan.css";
import user from '../../image/user2.jpg'
import electric from '../../image/electric.png'
export default function ReportBug({ history }) {
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
      <h1 className="tit">{}HELP DESK</h1>
      <div className="table_respons">
            
    <table className="t1">
      <thead className="t1_thead">
        <tr>
          <th className="thnew">Sl</th>
          <th className="thnew">Image</th>
          <th className="thnew">Name</th>
          <th className="thnew">Phone</th>
          <th className="thnew">Designation</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td><img src={user} /></td>
          <td>Prof.Madan ch. Ghosh</td>
          <td>9433828586</td>
          <td>Provost</td>
        </tr>

        <tr>
          <td>02</td>
          <td><img src={user}/></td>
          <td>Mr. Sarit Baran Chowdhury</td>
          <td>9831102770</td>
          <td>University Engineer</td>
        </tr>

        <tr>
          <td>03</td>
          <td><img src={user}/></td>
          <td>Pradip Subhash</td>
          <td>9153834659/9674044198</td>
          <td>Ambulance Driver</td>
        </tr>
        <tr>
          <td>04</td>
          <td><img src={user}/></td>
          <td>Sumit</td>
          <td>7890152102/9563727973</td>
          <td>Electrical Service Night</td>
        </tr>
        <tr>
          <td>05</td>
          <td><img src={user}/></td>
          <td>Bikash Maiti</td>
          <td>9903076918</td>
          <td>Steward</td>
        </tr>
        <tr>
          <td>06</td>
          <td><img src={user}/></td>
          <td>Krishnapada Kar</td>
          <td>8777689669</td>
          <td>Attendant</td>
        </tr>
        <tr>
          <td>07</td>
          <td><img src={user}/></td>
          <td>Sumit Konai</td>
          <td>8768102653</td>
          <td>Library Assistant</td>
        </tr>
      </tbody>
      <tbody className="labels">
			<tr>
				<td colSpan="5">
				<label className="badge bg-danger text-wrap ">PREFECT</label>
					{/* <input type="checkbox" name="management" id="management" data-toggle="toggle"/> */}
          {/* <i className="bx bxs-chevron-down arrow"></i> */}
				</td>
			</tr>
		</tbody>
		<tbody className="hide">
			<tr>
			<td>01</td>
      <td><img src={user}/></td>
          <td>Rustom Mondal</td>
          <td>7980624597</td>
          <td>Mess Prefect</td>
			</tr>

      <tr>
			<td>02</td>
      <td><img src={user}/></td>
          <td>Nanda Das</td>
          <td>9547445915</td>
          <td>Garden Prefect</td>
			</tr>
      <tr>
			<td>03</td>
      <td><img src={user}/></td>
          <td>Sujoy Mondal</td>
          <td>7602835627</td>
          <td>Game Prefect</td>
			</tr>
      <tr>
			<td>04</td>
      <td><img src={user}/></td>
          <td>Md. Ersad Ali</td>
          <td>8617664617</td>
          <td>Auditor Prefect</td>
			</tr>
      <tr>
			<td>05</td>
      <td><img src={user}/></td>
          <td>Suraj Das</td>
          <td>9635201242</td>
          <td>Auditor Prefect</td>
			</tr>
      <tr>
			<td>06</td>
      <td><img src={user}/></td>
          <td>Sujit Saha</td>
          <td>8777092234</td>
          <td>Maintenance Prefect</td>
			</tr>
      </tbody>
      <tbody className="labels">
			<tr>
				<td colSpan="5">
					<label className="badge bg-danger text-wrap">Electrical Office</label>
					{/* <input type="checkbox" name="management" id="management" data-toggle="toggle"/> */}
          {/* <i className="bx bxs-chevron-down arrow"></i> */}
				</td>
			</tr>
		</tbody>
    <thead className="t1_thead">
        <tr>
          <th className="thnew">Sl</th>
          <th className="thnew">Image</th>
          <th className="thnew">Electric Provider</th>
          <th className="thnew">Help Line No</th>
          <th className="thnew">Consumer Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td><img src={electric}/></td>
          <td>WBSEB</td>
          <td>18003453213</td>
          <td>332006888</td>
        </tr></tbody>
    </table>
  </div>
      <Footer />
    </>
  );
}
