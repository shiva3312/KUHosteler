import React from "react";
import { isAuthenticated } from "../auth";
import { useState, useEffect } from "react";
import { read, resendreq } from "../components/student/stuApi";
import { Link } from "react-router-dom";

const InfoPage = () => {
  const { user, token } = isAuthenticated();

  const [stud, setStu] = useState(user);
  const [membership, setmembership] = useState(user.membebership);

  const reSendReq = (e) => {
    e.preventDefault();
    resendreq(stud._id, token).then((data) => {
      if (data.error) console.log(data.error);
      else {
        console.log(data.info);
        setmembership(5);
      }
    });
  };

  useEffect(() => {
    read(user._id, token).then((data) => {
      setStu(data);
    });
  }, [membership]);

  const Info = () => {
    return (
      <>
        {stud.membership == 0 ? (
          <div className="container py-5">
            <div className="row">
          <div className="card sf shadow-sm p-4 mt-5 mb-5">
            <h3 className=" hostclr fw-bold text-center">
              Your request has been sent, please wait{" "}
            </h3>
            <p className=" text-dark text-center">
              within 24 hour your account will be activated
            </p>
            <div className="text-center">
            <img src="https://cdn.pixabay.com/photo/2021/08/28/00/48/sleep-6579769_1280.png" height="100px" width="100px" alt=".."/>
            </div>
            <div className="text-center pb-3">
              
            <Link to="/">
              {" "}
              <button className=" btn btn-dark ">Back to Home</button>
            </Link>
            </div>
            </div>
          </div>
          </div>
        ) : stud.membership == 4 ? (
          <div className="container py-5">
            <div className="row">
          <div className="card sf shadow-sm p-4 mt-5 mb-5">
            <h3 className=" hostclr fw-bold text-center">
             Your Request is Rejected by "{stud.hostelName.toUpperCase()}"
              hostel
            </h3>
            <p className="text-dark text-center"> Inform to you Manager </p>
            <div className="text-center">
            <img src="https://cdn.pixabay.com/photo/2021/08/28/00/48/sleep-6579769_1280.png" height="100px" width="100px" alt=".."/>
            </div>
            <div className="text-center pb-3">
            <button
              className="btn btn-outline-dark btn-lg px-4 "
              type="submit"
              onClick={reSendReq}
            >
              Request Again
            </button>
          </div>
          </div>
          </div>
          </div>
        ) : stud.membership == 5 ? (
          <div className="container py-5">
            <div className="row">
          <div className="card sf shadow-sm p-4 mt-5 mb-5">
            <h3 className=" hostclr fw-bold text-center">
             Your Request has been send again to "
              {stud.hostelName.toUpperCase()}" hostel
            </h3>
            <p className="text-dark text-center"> Wait for Response </p>
            <div className="text-center">
            <img src="https://cdn.pixabay.com/photo/2021/08/28/00/48/sleep-6579769_1280.png" height="100px" width="100px" alt=".."/>
            </div>
            <div className="text-center pb-3">
           
            <Link to="/">
              <button
                className="btn btn-outline-dark btn-lg px-4  "
                type="submit"
              >
                Back to Home
              </button>
            </Link>
          </div>
          </div>
          </div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  };

  return <>{Info()}</>;
};

export default InfoPage;
