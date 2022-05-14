import React, { useState, useEffect } from "react";
import { read } from "./EmpApi";
import EmpLayout from "./EmpLayout";
import { isAuthenticated } from "../../auth";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import Footer from "../Footer";

const EmpDashboard = ({ history }) => {
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

  const userInfo = () => {
    return (
      <div className="pt-5 card pb-5 mt-5 ms-auto th">
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

          {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">
                      {studData.profileType === 1 ? "Admin" : "Registered User"}
                  </li> */}
          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">User Id</div>
            <div className="col-8 ps-0 pe-0">: {studData.email}</div>
          </li>

          <li className="dt ps-2 row text-white p-2 shadow ms-4 me-4 m-3">
            <div className="col-4 ps-0 pe-0">Bio</div>
            <div className="col-8 ps-0 pe-0">
              : r adipisicing elit. Numquam que, non?
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <EmpLayout history={history}>
        <div className=" box"> {userInfo()} </div>
      </EmpLayout>
      <Footer />
    </>
  );
};

export default EmpDashboard;
