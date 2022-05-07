import React, { useState } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import "../css/global.css";
import { authenticate, isAuthenticated, updatePassword } from "../auth";

const UpdatePassword = () => {
  const { user, toke } = isAuthenticated();

  const { userId, token } = useParams();
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    error: "",
    success: "",
    redirectToReferrer: false,
  });

  const { password, confirmPassword, error, success, redirectToReferrer } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    // if password didn't match ..
    if (password !== confirmPassword)
      setValues({ ...values, error: "Password did not match" });

    updatePassword({ userId, password, token }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: "Link has been expired" });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            success: "data.info",
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signUpForm = () => (
    <form>
      <section className=" gradient">
        <div className="container py-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-6">
              <div className="card-body p-5 text-center bg-dark">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">
                    New Password
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please enter your new password!
                  </p>

                  <div className="form-outline text-start form-white mb-4">
                    <label className="form-label text-white" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required=""
                      onChange={handleChange("password")}
                      value={password}
                    />
                  </div>

                  <div className="form-outline text-start form-white mb-4">
                    <label
                      className="form-label text-white"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      required=""
                      onChange={handleChange("confirmPassword")}
                      value={confirmPassword}
                    />
                  </div>

                  <div>
                    <button
                      className="btn btn-outline-light btn-lg px-4"
                      type="submit"
                      onClick={clickSubmit}
                    >
                      Update New Password
                    </button>
                  </div>
                </div>
                <div>
                  <p className="mb-0 text-white">
                    Remember the password?{" "}
                    <Link to="/auth/signin" className="text-white-50 fw-bold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
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
      {success}
    </div>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      // if images is not uploded yet then redirect ot PicUpload.jsx page to upload img
      if (user && user.profileType === 1) {
        return <Redirect to="/manager/dashboard" />;
      } else if (user && user.profileType === 0) {
        return <Redirect to="/student/home" />;
      } else if (user && user.profileType === 2) {
        return <Redirect to="/employee/home" />;
      }
    }
  };

  return (
    <div>
      {showSuccess}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </div>
  );
};

export default UpdatePassword;
