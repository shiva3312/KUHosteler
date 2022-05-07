// manger Layout ..
import React from "react";
import { Link } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth/index.js";
import ShowImage from "../ShowImage.js";
import "../../css/global.css";

import "../../css/student.css";

const StuLayout = ({ className, children, history }) => {
  const { user } = isAuthenticated();

  return (
    <>
      <div className="gradiant">
        <nav className="navbar navbar-light ">
          <div className="container-fluid ">
            <h3 className="ps-5  text-white">KuHosteler</h3>
            <div className="d-flex justify-content-end"></div>
            {isAuthenticated() && (
              <Link
                className="nav-item ps-3 px-3 pt-1"
                to={"/"}
                onClick={() =>
                  signout(() => {
                    history.push("/auth/signin");
                  })
                }
              >
                <button
                  className="pt-1 pb-1 btn btn-outline-light fw-bold"
                  type="submit"
                >
                  Signout
                </button>
              </Link>
            )}
          </div>
        </nav>
        <div className="bg-white shadow-sm  overflow-hidden">
          <div className="ps-4 pt-4 pb-0 pe-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profile ps-3 mr-5 mt-5">
                <ShowImage
                  user={user}
                  Width="13%"
                  ClassName="img mb-2 img-thumbnail"
                />
              </div>
            </div>
          </div>
          <div className=" bg-white pt-1 ">
            <div className="media-body mb-1 text-dark">
              <h4 className="media mt-0 mb-0">
                {user.fname} {user.lname}
              </h4>
              <p className="small mb-4">{user.department}</p>
            </div>
          </div>
          <nav className="nav-link justify-content-center p-2 mt-5 navbar  fs-6">
            <Link className=" navbar-brand fs-6 pe-2 ps-2" to="/student/home">
              <span className="text1">HOME</span>
              <span className="icon">
                <i className=" fa fa-home fa-md pe-2 ps-2"></i>
              </span>
            </Link>

            <Link
              className="navbar-brand fs-6 pe-2 ps-2"
              to="/student/basicInfo"
            >
              <span className="text1">MY PROFILE</span>
              <span className="icon ">
                <i className=" fa fa-user-circle fa-md pe-2 ps-2"></i>
              </span>
            </Link>

            <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/meal">
              <span className="text1">MEAL</span>
              <span className="icon">
                <i className=" fa fa-glass fa-md pe-2 ps-2"></i>
              </span>
            </Link>

            <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/guest/">
              <span className="text1">ADD GUEST</span>
              <span className="icon">
                <i className=" fa fa-user-plus fa-md pe-2 ps-2"></i>
              </span>
            </Link>

            <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/records">
              <span className="text1">PAYMENT</span>
              <span className="icon">
                <i className=" fa fa-money fa-md pe-2 ps-2"></i>
              </span>
            </Link>
            {/* <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Settings</Link>
                            </li>
                            <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Blog</Link>
                            </li> */}
          </nav>
        </div>
      </div>

      <div>
        <div className={className}>{children}</div>
      </div>
    </>
  );
};

export default StuLayout;
