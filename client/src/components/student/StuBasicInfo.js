import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "../../css/student.css";
import "../../css/global.css";

const BasicInfo = ({ history }) => {
  const { user } = isAuthenticated();
  const basicInfo = () => {
    return (
      <div className=" pt-3 mt-3 pb-4 th ">
        <h4 className="shadow card-head pt-2 pb-2 bg text-light text-center">
          BASIC DETAILS
        </h4>
        <ul className="con shadow p-2">
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
  const eduInfo = () => {
    return (
      <div className=" pt-3 mt-3 pb-4 th ">
        <h4 className="shadow card-head pt-2 pb-2 bg text-light text-center">
          EDUCATIONAL DETAILS
        </h4>
        <ul className="con shadow p-2">
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-3 ps-0 pe-0">Course</div>
            <div className="col-9">: {user.course}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-3 ps-0 pe-0">Subject</div>
            <div className="col-9">: {user.subject}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-3 ps-0 pe-0">Semester </div>
            <div className="col-9 ">: {user.semester}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-3 ps-0 pe-0">Session</div>
            <div className="col-9">: {user.session}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-3 ps-0 pe-0">College</div>
            <div className="col-9">: {user.university}</div>
          </li>
        </ul>
      </div>
    );
  };

  const constactInfo = () => {
    return (
      <div className="pt-3  pb-4 th">
        <h4 className="shadow card-head pt-2 pb-2 bg text-light text-center">
          CONTACT DETAILS
        </h4>
        <ul className="con shadow p-2">
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Home Address</div>
            <div className="col-7">: {user.address}</div>
          </li>

          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 ps-0 pe-0">Phone No</div>
            <div className="col-7 pe-0">: {user.selfPhNo}</div>
          </li>
          <li className="dt ps-3 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-5 pe-0 ps-0">Guardian Phone</div>
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
      <StuLayout history={history}>
        {/* show your content in this div */}
        <div className="row rowstu">
          {/* <div className="wrapper"> */}
          <div className="col-md-6 ">
            {" "}
            {basicInfo()}
            {/* <div  className="col mb-0">{userInfo()}</div> */}
          </div>
          {/* <div class="middle"></div>     */}
          {/* if i remove middle then it looks like parallel */}
          <div className="col-md-6 ">
            {" "}
            {eduInfo()}
            {/* <div  className="col mb-0">{showPieChart()}</div> */}
          </div>
        </div>
        <div className="row rowstu">
          <div className="col md-6">{constactInfo()}</div>
        </div>
      </StuLayout>
      <Footer />
    </>
  );
};

export default BasicInfo;
