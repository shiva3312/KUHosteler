// import React from "react";
import React, { useState, useEffect } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated,resetPassword} from "../../auth";
import Footer from "../Footer";
import { read } from "./stuApi";

const StuEdit = ({ history }) => {
  const { user,token } = isAuthenticated();
  const [values, setValues] = useState({
    fname:"",
    lname:"",
    roomno:"",
    selfPhNo:"",
    address:"",
  });
  const { fname,lname, roomno,selfPhNo,address} = values;

    useEffect(() => {
      read(user._id, token).then((data) => {
        setValues(data);
      });
    }, [values]);
    const handleChange = (name) => (event) => {
      setValues({ ...values,  [name]: event.target.value });
    };
    const clickSubmit = async (event) => {
      event.preventDefault();
      setValues({ ...values,});
      console.log("Fname:" +fname,"\n LastName:"+lname,"\nRoomNo:"+roomno,"\nselfno:"+selfPhNo,"\nAddress:"+address);
      console.log(values);

};
const EditPro = () => {
  return (
    <>
      <h1 className="text-start ms-4 me-4 border-bottom">
        <i className="fa fa-angle-double-right "></i>
        &nbsp;Edit Your Profile
      </h1>
      <div className="status bg-white row th shadow-sm">
        <div className="col-3 p-4 ps-4">
          <i className=" fa fa-lg fa-user-plus text-secondary"></i>
        </div>
        <div className="col-9 p-3 ps-3  text-end">
          <button
            type="button"
            className=" bton"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className="button__icon">
              <i className="fa fa-edit"></i>
            </span>
            <span className="button__text">EDIT</span>
          </button>
        </div>
      </div>
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-white">
              <h5 className="modal-title " id="exampleModalLabel">
                Your Infromation Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary">
              <div className="row" id="addguest">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="Fname"
                  placeholder=" Enter Your First Name"
                  required
                  onChange={handleChange("fname")}
                  value={fname}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="Lname"
                  placeholder="Enter your Last Name"
                  required
                  onChange={handleChange("lname")}
                  value={lname}
                />
              </div>
              <div className="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                  Room No.
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="roomno"
                  placeholder="Enter your Room No"
                  required
                  onChange={handleChange("roomno")}
                  value={roomno}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone No
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="phoneno"
                  placeholder="Enter Your Phone No"
                  required
                  onChange={handleChange("selfPhNo")}
                  value={selfPhNo}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter Your Address"
                  required
                  onChange={handleChange("address")}
                  value={address}
                />
              </div>
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success" data-bs-dismiss="modal"
                onClick={clickSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


return (
  <>
  
    <StuLayout history={history}>
      <div className="">{EditPro()}</div>
    </StuLayout>
    <Footer />
  </>
);
};
export default StuEdit;
