import React, { useState, useEffect } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer";
import { addGuest, read, deleteGuest } from "./stuApi";

const AddGuest = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [stuData, setStuDate] = useState(user);
  const [guest, setguest] = useState({ guestId: "" });

  const [values, setValues] = useState({
    name: "",
    startoption: "on",
    endoption: "on",
    startDate: "",
    endDate: "",
    error: "",
    success: false,
  });

  const { name, startoption, endoption, startDate, endDate, error, success } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    addGuest(user._id, token, values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          startoption: "on",
          endoption: "on",
          startDate: "",
          endDate: "",
          dob: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const deleteguest = (guestId) => {
    deleteGuest(stuData._id, token, { guestId: guestId }).then((data) => {
      if (error) console.log(data.error);
      else console.log(data.info);
    });

    setguest({
      ...values,
      guestId: guestId,
    });
  };

  useEffect(() => {
    read(user._id, token).then((data) => {
      setStuDate(data);
    });
  }, [values, guest]);

  stuData.active_guest_list.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  const getAllGuest = () => {
    return (
      <>
        <h1 className="text-start ms-4 me-4 mb-4 border-bottom">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Active Guests
        </h1>
        <h3 className="">Details of active guests</h3>
        <section className="shadow-lg">
          <div className="shadow tbl-header" id="guestlist">
            <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-1">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Date</th>
                  <th>Name </th>
                  <th>Meal Time </th>
                  <th>Meal status</th>
                  <th colSpan={1}>Activity</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {stuData.active_guest_list.map((guest, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{guest.date.slice(3, 15)}</td>
                    <td>
                      {guest.name.charAt(0).toUpperCase() + guest.name.slice(1)}{" "}
                    </td>
                    {guest.mealTime === "on" ? (
                      <td>Mor & Nig</td>
                    ) : (
                      <td>{guest.mealTime}</td>
                    )}
                    {guest.mealStatus === false ? (
                      <td className=" fw-bold">Listed</td>
                    ) : (
                      <td>Activated</td>
                    )}
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            {/* <th> <button type="submit" className="btn btn-primary " >Edit</button></th> */}
                            <th>
                              {" "}
                              <button
                                type="submit"
                                className="button btn-sm btn-danger  "
                                onClick={() => deleteguest(guest._id)}
                              >
                                Delete
                              </button>
                              <span>
                                <i
                                  className="fa fa-trash-o text-danger border fa-lg pe-2 ps-2"
                                  onClick={() => deleteguest(guest._id)}
                                ></i>
                              </span>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  };

  const addGuestForm = () => {
    return (
      <>
        <h1 className="text-start ms-4 me-4 border-bottom">
          <i className="fa fa-angle-double-right "></i>
          &nbsp;Add new guest
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
                <i className="fa fa-plus"></i>
              </span>
              <span className="button__text">Add New Guest</span>
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-white">
                <h5 className="modal-title " id="exampleModalLabel">
                  Fill the following details
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-secondary">
                <div className="mb-3" id="addguest">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="Name"
                    className="form-control"
                    id="inputEmail"
                    placeholder=" Enter Guest Name"
                    required
                    onChange={handleChange("name")}
                    value={name}
                  />
                </div>
                <div className="row">
                  <label for="exampleFormControlInput1" class="form-label">
                    From
                  </label>
                  <div className="col-6 mb-3">
                    <select
                      className="form-select"
                      onChange={handleChange("startoption")}
                      value={startoption}
                    >
                      <option defaultValue="on">Morning & Night</option>
                      <option value="morning">Only Morning</option>
                      <option value="night">Only Night</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="date"
                      className="col-3 form-control"
                      onChange={handleChange("startDate")}
                      value={startDate}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <label for="exampleFormControlInput1" class="form-label">
                    To
                  </label>
                  <div className="col-6 mb-3">
                    <select
                      className="form-select"
                      onChange={handleChange("endoption")}
                      value={endoption}
                    >
                      <option defaultValue="on">Morning & Night</option>
                      <option value="morning">Only Morning</option>
                      <option value="night">Only Night</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleChange("endDate")}
                      value={endDate}
                      required
                    ></input>
                  </div>
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
                  className="btn btn-success"
                  onClick={clickSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

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
      className="alert alert-success alert-dismissible fade show"
      role="alert"
      style={{ display: success ? "" : "none" }}
    >
      Guest is Successfully added
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );

  return (
    <>
      <StuLayout history={history}>
        {showSuccess()}
        {showError()}
        <div>{addGuestForm()}</div>
        <div>{getAllGuest()}</div>
      </StuLayout>
      <Footer />
    </>
  );
};

export default AddGuest;
