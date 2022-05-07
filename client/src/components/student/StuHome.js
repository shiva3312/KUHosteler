import React, { useState, useEffect } from "react";
import { read } from "./stuApi";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import Footer from "../Footer";

const UserDashboard = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [studData, setStuData] = useState(user);

  useEffect(() => {
    read(user._id, token).then((data) => {
      setStuData(data);
    });
  }, []);

  const mealCount = {
    on: 0,
    off: 0,
    mor: 0,
    nig: 0,
  };

  const calculateMealCount = () => {
    studData.activity.forEach((record) => {
      if (record.mess_status.toLowerCase() === "on") mealCount.on++;
      else if (record.mess_status.toLowerCase() === "morning") mealCount.mor++;
      else if (record.mess_status.toLowerCase() === "night") mealCount.nig++;
      else if (record.mess_status.toLowerCase() === "off") mealCount.off++;
    });
  };

  const showPieChart = () => {
    calculateMealCount();
    return (
      <>
        <div className="pt-2 pb-3  pb-2 mt-3 mb-4 th">
          <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">
            PIE CHART
          </h4>
          <Pie
            data={{
              labels: ["OFF", "M/N", "M", "N"],

              datasets: [
                {
                  label: "# of votes",
                  data: [
                    mealCount.off,
                    mealCount.on,
                    mealCount.mor,
                    mealCount.mor,
                  ],
                  backgroundColor: ["#efb8ef", "#781a78", "#e27ce2", "#491049"],

                  borderColor: ["white", "white", "white", "white"],
                  borderWidth: 3,
                },
              ],
            }}
            height={750}
            width={750}
            // options={{
            //   maintainAspectRatio: false,
            //   scales: {
            //     yAxes: [
            //       {
            //         ticks: {
            //           beginAtZero: true,
            //         },
            //       },
            //     ],
            //   },
            //   legend: {
            //     labels: {
            //       fontSize: 25,
            //     },
            //   },
            // }}
          />
        </div>
      </>
    );
  };

  const userInfo = () => {
    return (
      <div className="pt-2  pb-5 mt-3 ms-auto th">
        <h4 className="shadow card-head pt-2 pb-2 mb-3 gradiant text-light text-center">
          USER INFORMATION
        </h4>
        <ul className="con shadow p-2 ">
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">Name</div>
            <div className="col-8 ps-0 pe-0">
              : {studData.fname} {user.lname}
            </div>
          </li>
          {studData.messStatus == 0 || studData.messStatus == 1 ? (
            <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3 ">
              <div className="col-4 ps-0 pe-0">Meal Status</div>
              <div className="col-8 ps-0 pe-0">
                {" "}
                :<span className="fw-bold text-secondary"> DISABLE</span>
              </div>
            </li>
          ) : studData.messStatus == 2 ? (
            <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3 ">
              <div className="col-4 ps-0 pe-0">Meal Status</div>
              <div className="col-8 ps-0 pe-0">
                : <span className="fw-bold text-success"> ON</span>
              </div>
            </li>
          ) : (
            <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3 ">
              <div className="col-4 ps-0 pe-0">Meal Status</div>
              <div className="col-8 ps-0 pe-0">
                : <span className="fw-bold text-danger"> OFF</span>
              </div>
            </li>
          )}
          {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">
                      {studData.profileType === 1 ? "Admin" : "Registered User"}
                  </li> */}
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">User Id</div>
            <div className="col-8 ps-0 pe-0">: {studData.email}</div>
          </li>
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">Room No</div>
            <div className="col-8 ps-0 pe-0">: {user.roomNo}</div>
          </li>
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">Hostel Id</div>
            <div className="col-8 ps-0 pe-0">: {user.hostelId}</div>
          </li>
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">Bio</div>
            <div className="col-8 ps-0 pe-0">
              : r adipisicing elit. Numquam que, non?
            </div>
          </li>
        </ul>
      </div>

      //         <table >
      //   <tr>
      //     <th>Name:</th>
      //     <td>{studData.fname} {user.lname}</td>
      //   </tr>
      //   <tr>
      //     <th>Meal Status:</th>
      //     {
      //                      studData.messStatus == 0 || studData.messStatus==1 ? <td text-danger>Disable</td>:
      //                        studData.messStatus == 2 ?  <td className="list-group-item text-success">ON</td> : <td className="list-group-item text-danager">OFF</td>
      //              }
      //   </tr>
      //   <tr>
      //   <th>Email:</th>
      //   <td>{studData.email}</td>
      //   </tr>
      //   <tr>
      //   <th>ProfileType:</th>
      //   <td>{studData.profileType === 1 ? "Admin" : "Registered User"} </td>
      //   </tr>
      // </table>
    );
  };

  return (
    <>
      <StuLayout history={history}>
        {/* show your content in this div */}

        <div className="row m-3">
          {/* <div className="wrapper"> */}
          <div className="col-md-7 box">
            {" "}
            {userInfo()}
            {/* <div  className="col mb-0">{userInfo()}</div> */}
          </div>
          {/* <div class="middle"></div>     */}
          {/* if i remove middle then it looks like parallel */}
          <div className="col-md-5 box ">
            {" "}
            {showPieChart()}
            {/* <div  className="col mb-0">{showPieChart()}</div> */}
          </div>
        </div>
        {/* </div> */}
      </StuLayout>
      <Footer />
    </>
  );
};

export default UserDashboard;
