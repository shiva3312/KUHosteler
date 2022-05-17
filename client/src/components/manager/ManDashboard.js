import React, { useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import ShowImage from "../ShowImage";
import "../../css/manager.css";
import { Line } from "react-chartjs-2";
import {
  updateMembershipStatus,
  getAllstudents,
  getAllemployees,
  getAllReqList,
  getAllGuest,
  updateGuestMealStatus,
  removeGuest,
} from "./ManApi";

const AdminDashboard = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [students, setStudents] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [stuReqList, setStuReqList] = useState([]);
  const [empReqList, setEmpReqList] = useState([]);
  const [allListedGuest, setAllListedGuest] = useState([]);
  const [allactivatedGuest, setAllactivatedGuest] = useState([]);
  const [countStuGuest, setcountStuGuest] = useState(0);
  const [rederOnchange, setrenderOnchange] = useState(false);
  const [auditinfo, setAuditInfo] = useState({
    perheadCharge: [],
    totalMeal: [],
    months: [],
    totalFine: [],
    totalBorder: [],
    totalGuest: [],
  });

  const AllReqList = () => {
    getAllReqList(user._id, token).then((data) => {
      setStuReqList(data.students);
      setEmpReqList(data.employees);
    });
  };

  const loadUsers = () => {
    const perheadCharge = [];
    const months = [];
    const totalFine = [];
    const totalMeal = [];
    const totalGuest = [];
    const totalBorder = [];
    user.mealInfoList.sort(function (a, b) {
      return new Date(a.auditedDate) - new Date(b.auditedDate);
    });

    user.mealInfoList.forEach((rec) => {
      perheadCharge.push(rec.perheadCharge);
      months.push(rec.auditedDate.slice(4,7) + " " + rec.auditedDate.slice(-4));
      totalFine.push(rec.totalFine);
      totalMeal.push(rec.totalMeal);
      totalGuest.push(rec.mealCountList.guestMor + rec.mealCountList.guestNig);
      totalBorder.push(
        rec.mealCountList.borderMor + rec.mealCountList.borderNig
      );
    });

    getAllstudents(user._id, token).then((data) => {
      let count = 0;
      data.students.forEach((stu) => {
        count += stu.active_guest_list.length;
      });
      setcountStuGuest(count);
      setStudents(data.students);
    });
    getAllemployees(user._id, token).then((data) => {
      setEmployees(data.users);
    });
    setAuditInfo({
      perheadCharge: [...perheadCharge],
      months: [...months],
      totalFine: [...totalFine],
      totalMeal: [...totalMeal],
      totalGuest: [...totalGuest],
      totalBorder: [...totalBorder],
    });
    getAllGuest(user._id, token).then((data) => {
      setAllListedGuest(data.allListedGuest);
    });
    getAllGuest(user._id, token).then((data) => {
      setAllactivatedGuest(data.allactivatedGuest);
    });
  };

  const clickSubmit = (memeberId, status) => {
    updateMembershipStatus(user._id, token, {
      memId: memeberId,
      status: status,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.info);
      }
    });
    setrenderOnchange(!rederOnchange);
  };

  const changeGeustMealStatus = (guestId, userId, status) => {
    updateGuestMealStatus(user._id, token, { guestId, userId, status }).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.info);
        }
      }
    );
    setrenderOnchange(!rederOnchange);
  };

  const deleteGuest = (guestId, userId) => {
    removeGuest(user._id, token, { guestId, userId }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.info);
      }
    });
    setrenderOnchange(!rederOnchange);
  };

  const basicInfoCards = () => {
    const date=new Date();
    const hour=date.getHours();
    return (
      
      
      <div >
          
   
          {hour>=12?hour>=16?<h2 className="welcome p-1 pt-3">Good Evening, {user.fname} {user.lname}</h2> : <h2 className="welcome p-1 pt-3">Good Afternoon, {user.fname} {user.lname}</h2>:<h2 className="welcome p-1 pt-3">Good Morning, {user.fname} {user.lname}</h2>}
        <h2 className="p-1 text pb-3">Welcome</h2>
         
        <div >
          <div className="row cnt">
            <div className="col-3">
              <div className="card-body dashcount m-2 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{students.length}</h4>
                <p className="card-text  pb-1 fssm">Student</p>
              </div>
            </div>

            <div className="col-3 ">
              <div className="card-body dashcount m-2 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{employees.length}</h4>
                <p className="card-text  pb-1 fssm">Employee</p>
              </div>
            </div>

            <div className="col-3">
              <div className="card-body dashcount m-2 bg-white  shadow">
                <h4 className="card-title mb-4 fw-bold">
                  {user.active_guest_list.length}
                </h4>
                <p className="card-text pb-1 mt-4 fssm">Official Guest</p>
              </div>
            </div>

            <div className="col-3">
              <div className="card-body dashcount m-2 pe-0 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{countStuGuest}</h4>
                <p className="card-text pb-1 mt-4 fssm">Students' Guest</p>
              </div>
            </div>
          </div>
          <div className="row cnt1">
            <div className="col-6">
              <div className="card-body dashcount m-2 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{students.length}</h4>
                <p className="card-text  pb-1 fssm">Student</p>
              </div>
            </div>

            <div className="col-6 ">
              <div className="card-body dashcount m-2 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{employees.length}</h4>
                <p className="card-text  pb-1 fssm">Employee</p>
              </div>
            </div>

            <div className="col-6">
              <div className="card-body dashcount m-2 bg-white  shadow">
                <h4 className="card-title mb-4 fw-bold">
                  {user.active_guest_list.length}
                </h4>
                <p className="card-text pb-1 mt-4 fssm">Official Guest</p>
              </div>
            </div>

            <div className="col-6">
              <div className="card-body dashcount m-2 pe-0 bg-white shadow">
                <h4 className="card-title mb-4 fw-bold">{countStuGuest}</h4>
                <p className="card-text pb-1 mt-4 fssm">Students' Guest</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
  };

  const studentReqList = () => {
    if (stuReqList.length === 0) return <></>;
    return (
      <>
        <h1 className="m-4 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Student Request List
        </h1>
        <div className="p-2">
          <div className="shadow tbl-header ">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr >
                  <th className="col-1 sl">SL</th>
                  <th >Date</th>
                  <th >Photo</th>
                  <th >Name</th>
                  <th className="col-3">Department</th>
                  <th className="hidden">Phone</th>
                  <th  className="col-3" >
                    Action
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table  cellPadding="0" cellSpacing="0" border="0">
              <tbody >
                {stuReqList.map((student, i) => (
                <tr className="hoverTable"key={i}>
                    <td className="col-1 th1 sl" >{i + 1}</td>
                    <td className="th1">{student.createdAt.slice(0, 10)}</td>
                    <td className="th1">
                      {" "}
                      <ShowImage
                        user={student}
                        Width="50px"
                        Height="50px"
                        ClassName=" img1  img-thumbnail"
                      />{" "}
                    </td>
                    <td className="th1">
                      {student.fname} {student.lname}
                    </td>
                    <td className="col-3 th1" >{student.department}</td>
                    <td className="th1 hidden">{student.selfPhNo.slice(3,13)}</td>
                    <td className="col-3">
                      {" "}
                      <span className="sm">
                                <i
                                  className="fa fa-check text-success border fa-lg pe-1 ps-1" data-bs-toggle="tooltip" title="Accept"
                                  onClick={() =>clickSubmit(student._id, 2)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="fa fa-check text-success bg-light fa-lg pe-1 ps-1" data-bs-toggle="tooltip" title="Accept"
                                  onClick={() =>clickSubmit(student._id, 2)}
                                ></i>
                              </span>
                      <span className="sm">
                                <i
                                  className="ms-1 fa fa-user text-primary border fa-lg pe-2 ps-2 " data-bs-toggle="tooltip" title="Accept as Guest"
                                  onClick={() =>clickSubmit(student._id, 1)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-user text-primary bg-light fa-lg pe-1 ps-1 " data-bs-toggle="tooltip" title="Accept as Guest"
                                  onClick={() =>clickSubmit(student._id, 1)}
                                ></i>
                              </span>
                      <span className="sm">
                                <i
                                  className="ms-1 fa fa-trash text-danger border fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() =>clickSubmit(student._id, 4)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-trash text-danger bg-light fa-lg pe-1 ps-1 " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() =>clickSubmit(student._id, 4)}
                                ></i>
                              </span>
                    </td>
                  </tr>               
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </>
    );
  };

  const staffReqList = () => {
    if (empReqList.length === 0) return <></>;
    return (
      <>
   <h1 className="m-4 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Employee Request List
        </h1>
        <div className="p-2">
        <div className="shadow tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
            <thead>
              <tr>
                <th className="col-1">SL</th>
                <th>Date</th>
                <th>Picture</th>
                <th>Name</th>
                <th >Mob No.</th>
                <th className="col-2 ">Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="shadow tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
            <tbody>
              {empReqList.map((emp, i) => (
                <tr key={i}>
                  <td className="col-1 th1">{i + 1}</td>
                  <td className="th1">{emp.createdAt.slice(0, 10)}</td>
                  <td className="th1"> fd</td>
                  <td className="th1">
                    {emp.fname} {emp.lname}
                  </td>
                  <td className="th1">{emp.selfPhNo.slice(3,13)}</td>
                  <td className="col-2 th1">
                    {" "}
                  
                    <span className="sm">
                                <i
                                  className="ms-1 fa fa-check text-success border fa-lg " data-bs-toggle="tooltip" title="Accept"
                                  onClick={() => clickSubmit(emp._id, 2)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-check text-success bg-light fa-lg " data-bs-toggle="tooltip" title="Accept"
                                  onClick={() => clickSubmit(emp._id, 2)}
                                ></i>
                              </span>
                 
                    {" "}
                   
                    <span className="sm">
                                <i
                                  className="ms-1 fa fa-trash text-danger border fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() => clickSubmit(emp._id, 4)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-trash text-danger bg-light fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() => clickSubmit(emp._id, 4)}
                                ></i>
                              </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </>
    );
  };

  const mealChargeLineChart = () => {
    const data = {
      labels: [...auditinfo.months],
      datasets: [
        {
          label: "Meal Charges",
          data: [...auditinfo.perheadCharge],
          fill: true,
          lineTension: 0.35,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
        {
          label: "Total Fine",
          data: [...auditinfo.totalFine],
          fill: false,
          lineTension: 0.35,
          backgroundColor: "#742774",
          borderColor: "#742774",
        },
      ],
    };

    return (
      <>
        <h1 className="m-4 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Meal Charge Report
        </h1>
        <div className="card mb-3 shadow-lg">
          <Line data={data} />
        </div>
      </>
    );
  };

  const countLineChart = () => {
    const data = {
        labels: [...auditinfo.months],
        datasets: [
          {
            label: "Total Border Meal",
            data: [...auditinfo.totalBorder],
            fill: false,
            lineTension: 0.35,
            backgroundColor: "#746574",
            borderColor: "#746574",
          },

          {
            label: "Total Guest Meal",
            data: [...auditinfo.totalGuest],
            fill: false,
            lineTension: 0.35,
            backgroundColor: "#744374",
            borderColor: "#744374",
          },
        ],
      },
      options = {
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      };

    return (
      <>
        <h1 className="m-4 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Meal Count Report
        </h1>
        <div className="card shadow-lg mb-3">
          <Line data={data} />
        </div>
      </>
    );
  };

  const listedGuest = () => {
    allListedGuest.sort(function (a, b) {
      return new Date(a.mealDate) - new Date(b.mealDate);
    });

    if (allListedGuest.length === 0) return <></>;
    return (
      <>
        <h1 className="text-start border-bottom m-4 mt-0 pt-5">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Guest Meal Request List
        </h1>
        <div className="p-2">
          <div className="shadow tbl-header">
            <table  cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr >
                  <th className="col-1  sl">SL</th>
                  <th>Guest Name</th>
                  <th>Guest Type</th>
                  <th>Guest Holder</th>
                  <th>Meal Date</th>
                  <th className="hidden"> Mob No.</th>
                  {/* <th>Room No</th> */}
                  <th className="col-2" colSpan={2} >Action</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table  className="hoverTable"cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {allListedGuest.map((guest, i) => (
                  
                  <tr  key={i}>
                    <td className="th1 sl col-1">{i + 1}</td>
                    <td className="th1">{guest.name}</td>
                    {guest.guestType == 0 ? <td className="th1">Normal</td> : <td className="th1">Official</td>}

                    <td className="th1">{guest.holderName}</td>
                    <td className="th1">{guest.mealDate.slice(4, 15)}</td>
                    <td className="th1 hidden">{guest.holderMobNo.slice(3,13)}</td>
                    {/* <td className="th1">{guest.holderRoomNo}</td> */}
                    <td className="col-2 th1" colSpan={2}>
                      {" "}
                                           
                      <span className="sm">
                                <i
                                  className=" fa fa-check text-success border fa-lg " data-bs-toggle="tooltip" title="Accept"
                                  onClick={() => changeGeustMealStatus(guest._id, guest.holderId, 1)}
                                ></i>
                              </span>
                              <span className="sm1" >
                                <i
                                  className="ms-1 fa fa-check text-success bg-light fa-lg " data-bs-toggle="tooltip" title="Accept"
                                  onClick={() => changeGeustMealStatus(guest._id, guest.holderId, 1)}
                                ></i>
                              </span>
                      {" "}
                     
                      <span className="sm">
                                <i
                                  className="ms-1 fa fa-trash text-danger border fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() => deleteGuest(guest._id, guest.holderId)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-trash text-danger bg-light fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() => deleteGuest(guest._id, guest.holderId)}
                                ></i>
                              </span>
                       
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const activatedGuest = () => {
    allactivatedGuest.sort(function (a, b) {
      return new Date(a.mealDate) - new Date(b.mealDate);
    });
    if (allactivatedGuest.length === 0) return <></>;
    return (
      <>
        <h1 className="text-start border-bottom m-4 mt-0 pt-5">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Activated MEal guest list
        </h1>
        <div className="p-2">
          <div className="shadow tbl-header">
            <table  cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr >  <th className="th1 sl col-1">SL</th>
              <th className="th1">Guest Name</th>
              <th className="th1">Guest Type</th>
              <th className="th1">Guest Holder</th>
              <th className="th1">Meal Date</th>
              <th className="th1">Mob No.</th>
              {/* <th className="th1">Room No</th> */}
              <th className="th1">Action</th>
              </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table  className="hoverTable"cellPadding="0" cellSpacing="0" border="0">
              <tbody>
            {allactivatedGuest.map((guest, i) => (
              <tr className="" key={i}>
                <td className="th1 sl col-1 ">{i + 1}</td>
                <td className="th1">{guest.name}</td>
                {guest.guestType == 0 ? <td className="th1">Normal</td> : <td className="th1">Official</td>}

                <td className="th1">{guest.holderName}</td>
                <td className="th1">{guest.mealDate.slice(3, 15)}</td>
                <td className="th1">{guest.holderMobNo.slice(3,13)}</td>
                {/* <td className="th1">{guest.holderRoomNo}</td> */}
                {/* <td> <button type="submit" className="btn btn-success "  onClick={()=>changeGeustMealStatus(guest._id, guest.holderId ,1)}>Accept</button></td> */}
                <td className="th1">
                  {" "}
                  <span className="sm">
                                <i
                                  className="ms-1 fa fa-trash text-danger border fa-lg " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() => deleteGuest(guest._id, guest.holderId)}
                                ></i>
                              </span>
                              <span className="sm1">
                                <i
                                  className="ms-1 fa fa-trash text-danger bg-light fa-lg pe-1 ps-1 " data-bs-toggle="tooltip" title="Reject"
                                  onClick={() =>deleteGuest(guest._id, guest.holderId)}
                                ></i>
                              </span>
                  {/* <button
                    type="submit"
                    className="btn btn-danger  "
                    onClick={() => deleteGuest(guest._id, guest.holderId)}
                  >
                    Remove
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
     
        </table>
      </div>
      </div>
      </>
    );
  };

  useEffect(() => {
    loadUsers();
    AllReqList();
  }, [rederOnchange]);

  return (
    <>
      <ManLayout
        title="Dashboard"
        description={`${user.fname} ${user.lname}`}
        className="container-fluid pb-5"
        history={history}
      >
        <div>
          {basicInfoCards()}
          {studentReqList()}
          {staffReqList()}
          {activatedGuest()}
          {listedGuest()}

          {mealChargeLineChart()}
          {countLineChart()}
        </div>
      </ManLayout>
    </>
  );
};

export default AdminDashboard;
