// manger Layout ..
// import React from "react";
// import Menu from "./ManLinks";
import "../../styles.css";
import "../../css/manager.css";
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth";
import Footer from "../Footer";
import ShowImage from "../ShowImage";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
  history,
}) => (
  <div>
    <input type="checkbox" id="sidebar-toggle" />
    <div>
    <div className="row shadow-sm m-1">
      <div className="col-10 bg-white  ">
    <label htmlFor="sidebar-toggle" className=" p-2 fa fa-bars fa-lg small1">
    </label>
    </div>
    <div className="col-2 bg-white">
     <div>
      {/* <ShowImage user={isAuthenticated().user} /> */}
       <img src="https://cdn.pixabay.com/photo/2017/09/28/11/10/the-university-2795163_960_720.jpg" className="imge img-thumbnail border-rounded" alt="Not found Image" />
     </div>
    </div>
    </div>
    </div>
    <div className="sidebar drkgrn ">
      <div className="sidebar-header ">
        <h2 className="brand text-white">
          <span>KuHosteler</span>
        </h2>
        <label htmlFor="sidebar-toggle" className="fa fa-lg fa-bars"></label>
      </div>
 
      <div className=" pt-5 sidebarmenu">
        <ul>
          <li className="side p-3">
            <Link to="/manager/dashboard" className="text-decoration-none">
              <span className="fa fa-lg fa-dashboard"></span>
              <span className="side1">&ensp;Dashboard</span>
            </Link>
          </li>
          <li className="side p-3">
            <Link to="/manager/allstudents" className="text-decoration-none">
              <span className="fa fa-lg fa-graduation-cap"></span>
              <span className="side1">Student </span>
            </Link>
          </li>
          <li className="side p-3">
            <Link to="/manager/allemployee" className="text-decoration-none">
              <span className="fa fa-lg fa-street-view"></span>
              <span className="side1">&ensp;Employee</span>
            </Link>
          </li>

          <li className="side p-3">
            <Link to="/manager/charges" className=" text-decoration-none">
              <span className="fa fa-lg fa-money"></span>
              <span className="side1">&nbsp;Charges</span>
            </Link>
          </li>
          <li className="side p-3">
            <Link
              to="/manager/preparedMealList"
              className="text-decoration-none"
            >
              <span className="fa fa-lg fa-cutlery"></span>
              <span className="side1">&nbsp;Meal List</span>
            </Link>
          </li>
          <li className="side p-3 mt-5">
            <Link
             to="/"
              className="out text-decoration-none"
            >
              <span className="fa fa-lg fa-sign-out"></span>
              {isAuthenticated() && (
              // <div className="col">
              <span
                className=""
                to="/"
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                <button className="btn text-white out ps-0 p-0" type="submit">
                  Sign Out
                </button>
              </span>
            )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar1 ">
      <div className="sidebar-header ">
        <h2 className="brand text-white">
          <span>KuHosteler</span>
        </h2>
   <label htmlFor="sidebar-toggle" className="fa fa-lg fa-bars"></label>
      </div>
      <div className=" pt-5 sidebarmenu">
        <ul>
          <li className="side p-3">
            <Link to="/manager/dashboard" className="text-decoration-none">
              <span className="fa fa-lg fa-dashboard"></span>
              <span className="side1">&ensp;Dashboard</span>
            </Link>
          </li>
          <li className="side p-3">
            <Link to="/manager/allstudents" className="text-decoration-none">
              <span className="fa fa-lg fa-graduation-cap"></span>
              <span className="side1">Student </span>
            </Link>
          </li>
          <li className="side p-3">
            <Link to="/manager/allemployee" className="text-decoration-none">
              <span className="fa fa-lg fa-street-view"></span>
              <span className="side1">&ensp;Employee</span>
            </Link>
          </li>

          <li className="side p-3">
            <Link to="/manager/charges" className=" text-decoration-none">
              <span className="fa fa-lg fa-money"></span>
              <span className="side1">&nbsp;Charges</span>
            </Link>
          </li>
          <li className="side p-3">
            <Link
              to="/manager/preparedMealList"
              className="text-decoration-none"
            >
              <span className="fa fa-lg fa-cutlery"></span>
              <span className="side1">&nbsp;Meal List</span>
            </Link>
          </li>
          <li className="side p-3 mt-5">
            <Link
             to="/"
              className="out text-decoration-none"
            >
              <span className="fa fa-lg fa-sign-out"></span>
              {isAuthenticated() && (
              // <div className="col">
              <span
                className=""
                to="/"
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                <button className="btn text-white out ps-0 p-0" type="submit">
                  Sign Out
                </button>
              </span>
            )}
            </Link>
          </li>

     
        </ul>
      
      </div>
    
    </div>

    <div className="main-content">
      <div className="">
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
