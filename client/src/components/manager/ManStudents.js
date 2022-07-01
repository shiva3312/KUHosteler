import React, { useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import ShowImage from "../ShowImage";
import Notification from "../Notification";
import ConfimDialog from "../ConfimDialog";
import {
  getStudentprofile,
  getAllstudents,
  updateMembershipStatus,
  fchangeMealStatus,
  addFineOrDepositMoney,
  setstudetnHostelId,
} from "./ManApi";

const StudentListInfo = ({ history }) => {
  const [confirmDialog , setConfirmDialog]= useState({isOpen:false , title:'', subTitle:''});
  const { user, token } = isAuthenticated();
  const [students, setStudents] = useState([]);
  const [notify , setNotify]= useState({isOpen:false , message:'', type:''});
  const [values, setValues] = useState({
    fine: 0,
    deposit: 0,
    reason: "",
    error: false,
    success: false,
  });
  //  when the button is triggered for {getStudentData} first {selectUser } will hold {id}
  //  then {getStudentData} will be called up and this function will set the selected student record
  const [selectedUser, setselectedUser] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [reRender, setReRender] = useState(false);

  const { fine, deposit, reason, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // call setHostelId function to set hostelId to any user
  const setHostelId = async (stuId, hostelId) => {
    await setstudetnHostelId(user._id, stuId, hostelId, token).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
      } else {
        console.log(data.info);
        setNotify({isOpen:true, message:'Hostel Id updated' , type:"success"});

      }
    });
  };

  // ftech data of givent stuId and set the records into selectedUser
  const viewDetails = async (stuId) => {
    await getStudentprofile(stuId, user._id, token).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
      } else {
        setselectedUser(data);
      }
    });
  };

  const clickSubmit =  (e) => {
    const stuId = selectedUser._id;
    
    e.preventDefault();
    setValues({ ...values, error: false });
    addFineOrDepositMoney(user._id, token, {
      fine,
      reason,
      deposit,
      stuId,
    }).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
        setValues({
          fine: 0,
          deposit: 0,
          reason: "",
          success: false,
          error: false,
        });
      } else {
        setNotify({isOpen:true, message:'successfully updated' , type:"success"});
        setValues({
          fine: 0,
          deposit: 0,
          reason: "",
          error: "",
          success: false,
        });
      }
    });
    setToggler(!toggler);
  };


  const loadUsers = () => {
    getAllstudents(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStudents(data.students);
      }
    });
  };

  const toggleMembership = async (stuId, status) => {
    setConfirmDialog({...confirmDialog , isOpen:false});
    await updateMembershipStatus(user._id, token, {
      memId: stuId,
      status: status,
    }).then((data) => {
      
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
        console.log(data.error);
      } else {
        setNotify({isOpen:true, message:'Membership updated successfully' , type:"success"});
        console.log(data.info);
      }
    });
    setReRender(!reRender);
  };

  const toggleMeal = async (stuId, status) => {
    setConfirmDialog({...confirmDialog , isOpen:false});
    var notifyMsg = '';
    if(status<= 3) notifyMsg = "Meal status disabled successfully"
    else notifyMsg = "Meal status enabled successfully"
    await fchangeMealStatus(user._id, token, {
      stuId: stuId,
      status: status,
    }).then((data) => {
      setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
      if (data.error) console.log(data.error);
      else{
        setNotify({isOpen:true, message:notifyMsg , type:"success"});
        console.log(data.info);}
    });
    setReRender(!reRender);
  };

  useEffect(() => {
    loadUsers();
  }, [reRender, toggler]);

  const showError = () => (
    <>
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        Not saved {error}
      </div>
    </>
  );

  const showSuccess = () => (
    <>
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        {success}
      </div>
    </>
  );

  const studentList = () => {
    return (
      <>
        <h1 className="m-4 text-box animate fadeUp ">All Student List</h1>
        <div className="p-2">
          <div className="shadow tbl-header ">
            <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
              <thead>
                <tr>
                  <th className="th1 col-1 sl">SL</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Membership</th>
                  <th>Meal</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content text-box">
            <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
              {students.map((student, i) => (
                <>
                  <thead key={i}>
                    <tr>
                    <td className="col-1 th1 sl">{i + 1}</td>
                    <td>
                      <ShowImage user={student} ClassName="img2 " />
                    </td>
                    <td>
                      {student.fname} {student.lname}
                    </td>
                    {student.membership === 2 ? (
                      <td className="text-center   align-middle">
                        <div>
                          <span
                            type="submit"
                            className="badge rounded-pill bg-info "
                            onClick={() => {                            
                              setConfirmDialog({
                                isOpen: true,
                                title : "Are you sure you , want make student Ex-Border ?",
                                subTitle: "Remember! After this action student's membership will be deactivated ,student will be excluded from daily Meal-List and can't add any guest",
                                onConfirm:() =>{ toggleMembership(student._id, 3)}
                              })
                             }}
                           
                            >
                            {" "}
                            Border
                          </span>
                        </div>
                      </td>
                    ) : (
                      <td className="text-center  align-middle">
                        <div>
                          <span
                            type="submit"
                            className="badge rounded-pill bg-danger "
                            onClick={() => {                            
                              setConfirmDialog({
                                isOpen: true,
                                title : "Are you sure you , want make student Border ?",
                                subTitle: "Remember! After this action student's membership will be Activated ,student will be included in daily Meal-List and able to add any guest",
                                onConfirm:() => toggleMembership(student._id, 2)})
                              }}                          
                            >
                            {" "}
                            Ex-Border
                          </span>
                        </div>
                      </td>
                    )}

                    {student.messStatus > 1 ? (
                      <td className="text-center   align-middle">
                        <div>
                          <span
                            type="submit"
                            className="badge rounded-pill bg-danger "
                            onClick={() => {                            
                              setConfirmDialog({
                                isOpen: true,
                                title : "Are you sure you want to Turn off meal?",
                                subTitle:"Remember! This will disable the Meal of student and sutdent will be excluded from daily Meal-List",
                              onConfirm: ()=>{ toggleMeal(student._id, 0)}
                              })
                             }}
                           // onClick={() => toggleMeal(student._id, 0)}
                          >
                            Turn off
                          </span>
                        </div>
                      </td>
                    ) : (
                      <td className="text-center   align-middle">
                        <span
                            type="submit"
                            className="badge rounded-pill bg-success "
                            onClick={() => {                            
                              setConfirmDialog({
                                isOpen: true,
                                title : "Are you sure you want to Turn on meal?",
                                subTitle:"Remember! This will Enable the Meal of student and sutdent will be included in daily Meal-List",

                              onConfirm: ()=>{ toggleMeal(student._id, 3)}
                              })
                             }}
                          >
                            Turn on
                          </span>
                      </td>
                    )}

                    <td className="text-center">
                      <span>
                        {" "}
                        <i
                          className="ms-1 fa fa-eye text-primary border fa-lg "
                          data-bs-toggle="modal"
                          title="view profile"
                          data-bs-target="#staticBackdrop"
                          onClick={() => {
                            setselectedUser(student._id);
                            viewDetails(student._id);
                          }}
                        ></i>
                      </span>

                      {/* -----------------------View Student profile modal start here--------------------------------  */}

                      {selectedUser === null ? (
                        <></>
                      ) : (
                        <>
                          {
                            <div
                              className="modal fade"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabIndex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog  modal-fullscreen-xxl-down">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5>Student Detail</h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body student">
                                    <div className="container">
                                      <div className="main-body">
                                        <div className="row gutters-sm">
                                          <div className="col-md-4 mb-3">
                                            <div className="card ">
                                              <div className="card-body">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                  <div>
                                                   
                                                    <ShowImage
                                                      user={selectedUser}
                                                      ClassName=" img mb-2 img-thumbnail"
                                                    />
                                                  </div>
                                                  <div className="mt-3">
                                                    <h4>
                                                      {selectedUser.fname}{" "}
                                                      {selectedUser.lname}
                                                    </h4>
                                                    <p className="text-secondary mb-1">
                                                      {selectedUser.department}
                                                    </p>
                                                    <p className="text-muted font-size-sm">
                                                      {selectedUser.session}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="card mt-3">
                                              <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                  <h6 className="mb-0">
                                                    Hostel Name
                                                  </h6>
                                                  <span className="text-secondary">
                                                    {selectedUser.hostelName}
                                                  </span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                  <h6 className="mb-0">
                                                    Hostel Id
                                                  </h6>
                                                  <span className="text-secondary">
                                                    {selectedUser.hostelId}
                                                  </span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                  <h6 className="mb-0">
                                                    Room No
                                                  </h6>
                                                  <span className="text-secondary">
                                                    {selectedUser.roomNo}
                                                  </span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                  <h6 className="mb-0">
                                                    Membership{" "}
                                                  </h6>
                                                  {selectedUser.membership ===
                                                  2 ? (
                                                    <div>
                                                      <span className="badge rounded-pill bg-info ">
                                                        Border{" "}
                                                      </span>
                                                    </div>
                                                  ) : (
                                                    <div>
                                                      <span className="badge rounded-pill bg-danger ">
                                                        {" "}
                                                        Ex-Border{" "}
                                                      </span>
                                                    </div>
                                                  )}
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                  <h6 className="mb-0">
                                                    Meal status
                                                  </h6>
                                                  {selectedUser.messStatus <=
                                                  1 ? (
                                                    <div>
                                                      <span
                                                        type="submit"
                                                        className="badge rounded-pill bg-danger ">
                                                        Deactivated
                                                      </span>
                                                    </div>
                                                  ) : (
                                                    <div>
                                                      <span
                                                        type="submit"
                                                        className="badge rounded-pill bg-info " >
                                                        Activated
                                                      </span>
                                                    </div>

                                                  )}
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-md-8">
                                            <div className="card mb-3">
                                              <div className="card-body text-dark">
                                                <div className="row ">
                                                  <div className="col-sm-3">
                                                    <h6 className="mb-0 ">
                                                      Full Name
                                                    </h6>
                                                  </div>
                                                  <div className="col-sm-9 text-secondary">
                                                    {selectedUser.fname}{" "}
                                                    {selectedUser.lname}
                                                  </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                  <div className="col-sm-3">
                                                    <h6 className="mb-0">
                                                      Email
                                                    </h6>
                                                  </div>
                                                  <div className="col-sm-9 text-secondary">
                                                    {selectedUser.email}
                                                  </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                  <div className="col-sm-3">
                                                    <h6 className="mb-0">
                                                      Phone
                                                    </h6>
                                                  </div>
                                                  <div className="col-sm-9 text-secondary">
                                                    {selectedUser.selfPhNo}
                                                  </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                  <div className="col-sm-3">
                                                    <h6 className="mb-0">
                                                      Gender
                                                    </h6>
                                                  </div>
                                                  <div className="col-sm-9 text-secondary">
                                                    {selectedUser.gender}
                                                  </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                  <div className="col-sm-3">
                                                    <h6 className="mb-0">
                                                      Address
                                                    </h6>
                                                  </div>
                                                  <div className="col-sm-9 text-secondary">
                                                    {selectedUser.address}
                                                  </div>
                                                </div>
                                                <hr />
                                              </div>
                                            </div>
                                            <div className="row gutters-sm">
                                              <div className="col-sm-12 mb-3">
                                                <div className="card h-100">
                                                  <div className="card-body">
                                                    <h6 className="d-flex align-items-center mb-3">
                                                      <i className="material-icons text-info mr-2">
                                                        Payment &nbsp;
                                                      </i>
                                                      Record
                                                    </h6>
                                                    <button
                                                      className="d-flex btn text-light btn-info1 mb-2 "
                                                      type="button"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#collapseExample1"
                                                      aria-expanded="false"
                                                      aria-controls="collapseExample"
                                                    >
                                                      Add Payment
                                                    </button>
                                                    <div
                                                      className="collapse"
                                                      id="collapseExample1"
                                                    >
                                                      <div className="card card-body">
                                                        <div className="row">
                                                          <div className="col-6 form-outline text-start form-white mb-2">
                                                            <label
                                                              className="form-label "
                                                              htmlFor="deposit"
                                                            >
                                                              Deposit
                                                            </label>
                                                            <input
                                                              type="Number"
                                                              className="form-control"
                                                              name="deposit"
                                                              required=""
                                                              onChange={handleChange(
                                                                "deposit"
                                                              )}
                                                              value={deposit}
                                                            />
                                                          </div>
                                                          <div className="col-6 form-outline text-start form-white mb-2">
                                                            <label
                                                              className="form-label"
                                                              htmlFor="fine"
                                                            >
                                                              Fine
                                                            </label>
                                                            <input
                                                              type="Number"
                                                              className="form-control"
                                                              name="fine"
                                                              required=""
                                                              onChange={handleChange(
                                                                "fine"
                                                              )}
                                                              value={fine}
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="col form-outline text-start form-white mb-4">
                                                          <label
                                                            className="form-label "
                                                            htmlFor="reason"
                                                          >
                                                            Reason
                                                          </label>
                                                          <input
                                                            type="text"
                                                            className="form-control"
                                                            name="reason"
                                                            required=""
                                                            onChange={handleChange(
                                                              "reason"
                                                            )}
                                                            value={reason}
                                                          />
                                                        </div>
                                                        <div className="col-12 text-end">
                                                          <button
                                                            className="btn-sm btn-outline-info fw-bold btn px-4 me-1"
                                                            type="submit"
                                                            onClick={
                                                              clickSubmit
                                                            }
                                                          >
                                                            Update
                                                          </button>
                                                          <button
                                                            className="btn-sm btn-outline-info fw-bold btn px-4"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseExample1"
                                                            aria-expanded="false"
                                                            aria-controls="collapseExample"
                                                          >
                                                            Close
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* all action on student will be taken here  */}
                                    {/* <div className="row m-3 basic1 text-start">
                                                  <div className="col-1"></div>
                                                  <div className="col-4">Membership Status</div>
                                                  <div className="col-6">
                                                    <div key={i}>
                                                      {student.membership === 2 ? (
                                                        <div>
                                                          {" "}
                                                          <button
                                                            type="submit"
                                                            className="btn-sm btn-success "
                                                            onClick={() =>
                                                              toggleMembership(student._id, 3)
                                                            }
                                                          >
                                                            Border
                                                          </button>
                                                        </div>
                                                      ) : (
                                                        <div>
                                                          {" "}
                                                          <button
                                                            type="submit"
                                                            className="btn-sm btn-danger "
                                                            onClick={() =>
                                                              toggleMembership(student._id, 2)
                                                            }
                                                          >
                                                            Ex Border
                                                          </button>
                                                        </div>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="row m-3 basic1 text-start">
                                                  <div className="col-1"></div>
                                                  <div className="col-4">Meal Status</div>
                                                  <div className="col-6 ">
                                                    {" "}
                                                    {student.messStatus > 1 ? (
                                                      <div>
                                                        {" "}
                                                        <button
                                                          type="submit"
                                                          className="btn-sm btn-danger  "
                                                          onClick={() =>
                                                            toggleMeal(student._id, 0)
                                                          }
                                                        >
                                                          OFF
                                                        </button>
                                                      </div>
                                                    ) : (
                                                      <div>
                                                        {" "}
                                                        <button
                                                          type="submit"
                                                          className="btn-sm btn-success  "
                                                          onClick={() =>
                                                            toggleMeal(student._id, 2)
                                                          }
                                                        >
                                                          ON
                                                        </button>
                                                      </div>
                                                    )}
                                                  </div>
                                                </div> */}

                                    {/* action part ends here  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </>
                      )}
                      {/* -----------------------View Student profile modal ends here--------------------------------  */}
                    </td>
                    </tr>
                  </thead>
                </>
              ))}
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ManLayout
        title="Student"
        description={`${user.fname} ${user.lname}`}
        className="container-fluid pb-5"
        history={history}
      >
        <div>
            <ConfimDialog confirmDialog = {confirmDialog} setConfirmDialog = {setConfirmDialog} />
        <Notification notify={notify} setNotify={setNotify} />
       
          {showError()}
          {studentList()}
        </div>
      </ManLayout>
      {/* <Footer /> */}
    </>
  );
};

export default StudentListInfo;
