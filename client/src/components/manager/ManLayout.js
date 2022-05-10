// manger Layout ..
// import React from "react";
// import Menu from "./ManLinks";
import "../../styles.css";
import "../../css/manager.css";
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth";
import Footer from "../Footer";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
  history,
}) => (
  <div>
    <input type="checkbox" id="sidebar-toggle" />
    <label htmlFor="sidebar-toggle" className=" p-3 fa fa-lg fa-bars small1"></label>
    <div className="sidebar ">
      
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

          {/* {isAuthenticated() && (
            <div className="col">
            <span className="col" onClick={() =>signout(() => {history.push("/");})}><button className="" type="submit" >SignOut</button></span>
            </div>
      )} */}
        </ul>
      
      </div>
    
    </div>

    <div className="main-content">
   
      {/* <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">            
            <Link to="/manager/dashboard" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Dashboard</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/allstudents" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Students</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/allemployee" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Employee</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/charges" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Charges</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/preparedMealList" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Meal List</button></Link>           
            </li>

        {isAuthenticated() && (
            <div className="col">
            <span className="col" onClick={() =>signout(() => {history.push("/");})}><button className="btn btn-outline-light btn-lg px-4" type="submit" >SignOut</button></span>
            </div>
    )} 


      </ul> */}
      {/* <Menu />         */}
      <div className="pt-3 jumbotron">
        <h1 className="text-center mb-0 pt-5 pb-5">{title}</h1>
      </div>
      <div className="">
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
