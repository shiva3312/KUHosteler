// import React from "react";
import React, { useState, useEffect } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated,resetPassword} from "../../auth";
import Footer from "../Footer";
import { read, editStuProfile } from "./stuApi";
import Notification from "../Notification";
import ConfimDialog from "../ConfimDialog";

const StuEdit = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [studData, setStuData] = useState(user);

  useEffect(() => {
    read(user._id, token).then((data) => {
      setStuData(data);
    });
  }, []);


  const currVal = {
    fname: studData.fname,
    lname: studData.lname,
    roomNo: studData.roomNo,
    selfPhNo: studData.selfPhNo,
    address: studData.address,
    hostelId: studData.hostelId,
    dob: studData.dob,
    semester: studData.semester,
    gPhNo: studData.gPhNo,
    bio: studData.bio
  };

  const [values, setValues] = useState(currVal);
  const { fname, lname, roomNo, selfPhNo, address, hostelId, dob, semester, gPhNo, bio } = values;

    const handleChange = (name) => (event) => {
      setValues({ ...values,  [name]: event.target.value });
    };
  const clickSubmit = async (event) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    await editStuProfile(user._id, token, values).then((data) => {
      if (data.error) {
        // show error with msg unable to update 
        setNotify({ isOpen: true, message: 'Unable to update profile please try again..', type: "error" });
      }
      else {
        // show success msg ... profile update successfully
        setValues(values);
        setNotify({ isOpen: true, message: 'Profile upadated successfully', type: "success" });
      }
    })
    setValues({ ...values, });

};
const EditPro = () => {
  return (
    <>
      <h1 className="text-start ms-4 me-4 border-bottom">
        <i className="fa fa-angle-double-right "></i>
        &nbsp;Edit Your Profile
      </h1>
      <div >
       {/* <div className="col-3 p-4 ps-4">
          <i className=" fa fa-lg fa-edit text-secondary"></i>
        </div>  */}
        <div className="col-9 p-3 ps-3  text-end">
          <button
            type="button"
            className=" bton"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={async () => { await setValues(currVal) }}
          >
            <span className="button__icon">
              <i className="fa fa-refresh fa-spin "></i>
            </span>
            <span className="button__text">Refresh</span>
          </button>
        </div>
      </div>
      
      {/* <div
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
                  id="roomNo"
                  placeholder="Enter your Room No"
                  required
                  onChange={handleChange("roomNo")}
                  value={roomNo}
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
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are you sure to update your profile?",
                    subTitle: "Please check entered infomation is correct.",
                    onConfirm: () => { clickSubmit() }
                  })
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div> */}








<form class="was-validated">
<div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label htmlFor="exampleFormControlInput1" className="form-label">
                 First Name
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="fname"
                  placeholder="Enter your Room No"
                  required
                  onChange={handleChange("fname")}
                  value={fname}
                />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="lname"
                  placeholder="Enter your First Name"
                  required
                  onChange={handleChange("lname")}
                  value={lname}
                />
      </div>
    </div>
   
   
    </div>
 

  
  <div class="form-outline mb-4">
     <label htmlFor="exampleFormControlInput1" className="form-label">
                  Room No.
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="roomNo"
                  placeholder="Enter your Last Name"
                  required
                  onChange={handleChange("roomNo")}
                  value={roomNo}
                />
  </div>

  <div class="row mb-4">
    <div class="col">
  <div class="form-outline mb-4">
     <label htmlFor="exampleFormControlInput1" className="form-label">
                  Your Phone No
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="selfPhNo"
                  placeholder="Enter your Room No"
                  required
                  onChange={handleChange("selfPhNo")}
                  value={selfPhNo}
                />
  </div></div>
    <div class="col">
  <div class="form-outline mb-4">
    <label htmlFor="exampleFormControlInput1" className="form-label">
               Guardian Phone Number
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="gphno"
                  placeholder="Enter your Guardian no"
                  required
                  onChange={handleChange("gPhNo")}
                  value={gPhNo}
                />
  </div></div>
</div>
 
  

  <div class="row mb-4">
    <div class="col">
  <div class="form-outline mb-4">
    <label htmlFor="exampleFormControlInput1" className="form-label">
               HostelID
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="hostelId"
                  placeholder="Enter your HostelId"
                  required
                  onChange={handleChange("hostelId")}
                  value={hostelId}
                />
  </div></div>
    <div class="col">
  <div class="form-outline mb-4">
  <label htmlFor="exampleFormControlInput1" className="form-label">
             D.O.B
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                placeholder="Enter your D.O.B"
                required
                onChange={handleChange("dob")}
                value={dob}
              />
</div></div></div>
<div class="form-outline mb-4">
     <label htmlFor="exampleFormControlInput1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your Address"
                  required
                  onChange={handleChange("address")}
                  value={address}
                />
  </div>
{/* <div class="form-outline mb-4">
    <label htmlFor="exampleFormControlInput1" className="form-label">
               Semester
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="semester"
                  placeholder="Enter your semester no"
                  required
                  onChange={handleChange("semester")}
                  value={semester}
                />
  </div> */}
 
 
  <div class="form-outline mb-4">
     <label htmlFor="exampleFormControlInput1" className="form-label">
               BIO
                </label>
    <textarea class="form-control" rows="4"
    type="text"
    className="form-control"
    id="bio"
    placeholder="Enter BIO"
    required
    onChange={handleChange("bio")}
    value={bio}></textarea>
  </div>
  <div className="text-center">
<button
type="button"
className=" btn btn-success btn btn-outline-light btn-lg px-4"
 data-bs-dismiss="modal"
onClick={() => {
  setConfirmDialog({
    isOpen: true,
    title: "Are you sure to update your profile?",
    subTitle: "Please check entered infomation is correct.",
    onConfirm: () => { clickSubmit() }
  })
}}
>
Save
</button></div>
</form>
    </>
  );
};


return (
  <>  
    <StuLayout history={history}>
      {/* {JSON.stringify(values)} */}
      <Notification notify={notify} setNotify={setNotify} />
      <ConfimDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      <div className="">{EditPro()}</div>
    </StuLayout>
    <Footer />
  </>
);
};
export default StuEdit;