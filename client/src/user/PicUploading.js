import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import "../css/global.css";
import { isAuthenticated, uploadpic } from "../auth";

const UpLoadimage = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    image: "",
    uploading: false,
    error: "",
    success: "",
    redirectToProfile: false,
    formData: new FormData(),
  });

  const { uploading, error, success, redirectToProfile, formData } = values;

  // load categories and set form data

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    setValues({ ...values, error: false, uploading: true });

    uploadpic(user._id, token, formData).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          image: "",
          success: data.info,
          uploading: false,
          redirectToProfile: true,
        });
      }
    });
  };

  const picUploadForm = () => (
    <>
    <div className="gradiant uploadscreen">
    <form  className="p-0 m-0" onSubmit={clickSubmit}>
      <div className="row m-1 d-flex justify-content-center align-items-center h-100">
          <div className=" col-lg-6">
            <div className="card-body p-4 text-center upload1 shadow-lg text-box animate fadeUp">
              <div className="upload ">
              <h2 className="fw-bold  mb-2 text-uppercase">
                 <i className=" fa fa-cloud-upload fw-bold upld"></i>
                </h2>
               <h2 className="fw-bold mb-2 text-uppercase upld text">
                  Upload Image
                </h2>
                <p className="text mb-5">
                Please select an image
                </p>
                <div className="disp1 row">
                <div className="col-9 form-group">
        <label className="btn btn-upload ">
          <input
            onChange={handleChange("image")}
            type="file"
            name="image"
            accept="image/*"
          />
        </label>
      </div>
      <div className="col-3 ">
      <button className="bton text-light">
       <span className="button__text">Upload</span>
           </button>
      </div>
      </div>
       <div className="disp2  p-0">
        <label className="btn btn-upload ">
          <input
            onChange={handleChange("image")}
            type="file"
            name="image"
            accept="image/*" className="fs-small"
          />
        </label>
      </div>
      <div className="disp3 card p-0">
        <label className="btn btn-upload ">
          <input
            onChange={handleChange("image")}
            type="file"
            name="image"
            accept="image/*" className="fs-small"
          />
        </label>
      </div>
      <div className="disp p-1">
      <button className="bton text-light">
       <span className="button__text">Upload</span>
           </button>
      
      </div>
      
              </div>
             
            </div>
          </div>
        </div>
    
    </form>
  </div>
</>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      <h2>{`${success}`} is created!</h2>
    </div>
  );

  const showUpLoading = () =>
    uploading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToProfile) {
      console.log("redirect is running");
      // if images is not uploded yet then redirect ot PicUpload.jsx page to upload img
      if (
        (user && !(user.profileType == 1) && user.membership == 0) ||
        user.membership == 4 ||
        user.membership == 5
      ) {
        return <Redirect to="/user/info" />;
      } else if (user && user.profileType === 1) {
        return <Redirect to="/manager/dashboard" />;
      } else if (user && user.profileType === 0) {
        return <Redirect to="/student/profile" />;
      } else if (user && user.profileType === 2) {
        return <Redirect to="/employee/profile" />;
      }
    } else if (!isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      {showUpLoading()}
      {showError()}
      {picUploadForm()}
      {redirectUser()}
    </div>
  );
};

export default UpLoadimage;
