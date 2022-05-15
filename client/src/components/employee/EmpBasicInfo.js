import React from "react";
import EmpLayout from "./EmpLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "../../css/student.css";
import "../../css/global.css";

const EmpBasicInfo = ({ history }) => {
  const { user } = isAuthenticated();
  const basicInfo = () => {
    return (
      <div className=" pt-5 card mt-3 pb-5 th ">
        <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">
          BASIC DETAILS
        </h4>
        <ul className=" con shadow">
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0">Profile Type</div>
            <div className="col-7">
              :{" "}
              {user.profileType === 1
                ? "Manager"
                : user.profileType === 0
                ? "Student"
                : "Employee"}
            </div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Date of birth</div>
            <div className="col-7">: {user.dob}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Email Account</div>
            <div className="col-7">: {user.email}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Membership</div>
            <div className="col-7">
              :{" "}
              {user.membership === 2 ? (
                <span className="text-success fw-bold "> Activated</span>
              ) : (
                <span className="text-danger fw-bold"> Deactivated</span>
              )}
            </div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Hostel Name</div>
            <div className="col-7">: {user.hostelName.toUpperCase()}</div>
          </li>
          {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Room Number&nbsp;:&ensp;{user.roomNo}</li>                  */}
          {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Bio &nbsp;:&ensp;{user.bio}</li>                   */}
        </ul>
      </div>
    );
  };

  const constactInfo = () => {
    return (
      <div className="pt-5 mt-3 card pb-5 th">
        <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">
          CONTACT DETAILS
        </h4>
        <ul className="con shadow">
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Home Address</div>
            <div className="col-7">: {user.address}</div>
          </li>

          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Phone No</div>
            <div className="col-7 pe-0">: {user.selfPhNo}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 pe-0 ps-0">Alternate Mob No.</div>
            <div className="col-7 pe-0">: {user.gPhNo}</div>
          </li>
          {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Profile Type &emsp;&emsp;:&ensp;
                        {user.profileType === 1 ? "Admin" : "Registered User"}2
                    </li> */}
        </ul>
      </div>
    );
  };

  return (
    <>
      <EmpLayout history={history}>
        <div className="row m-3">
          <div className="col-md-6 "> {basicInfo()}</div>
          <div className="col md-6">{constactInfo()}</div>
        </div>
      </EmpLayout>
      <Footer />
    </>
  );
};

export default EmpBasicInfo;
