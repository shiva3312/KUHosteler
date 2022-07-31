// show data chart format
// meal List of current day mor/ nig will be shown
// set meal bound time here ..

import React, { useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { getPreparedMealList } from "./ManApi";
import ShowImage from "../ShowImage";

var d = new Date();
var utc = d.getTime() + d.getTimezoneOffset() * 60000;
// current_date is of 24h system .....
var current_date = new Date(utc + 3600000 * +5.5);
// current_date12 is 12h system
var current_date12 = current_date.toLocaleString();
const isMorning = current_date.getHours() >= 6 && current_date.getHours() < 17;

const TodayMealList = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [mealList, setMealList] = useState({
    borderMealList: [],
    guestMealList: [],
  });

  useEffect(() => {
    getPreparedMealList(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMealList({
          borderMealList: data.borderMealList,
          guestMealList: data.guestMealList,
        });
      }
    });
  }, []);

  const countMeal =  () => {
    const officalGuestCount = 0;
    mealList.guestMealList.forEach((guest) => {
      if (guest.guestType == 1) officalGuestCount++;
    });
    const normalGuestCount = mealList.guestMealList.length - officalGuestCount;

    return (
      <>
        <h1 className=" mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Total Meal Count
        </h1>

        <div className=" me-auto mt-3 mb-5">
          <ul className=" list-group shadow">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Border meal
              <span className="badge  rounded-pill  text-dark">
                {mealList.borderMealList.length}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Guest meal
              <span className="badge  rounded-pill  text-dark">{normalGuestCount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Official Guest meal
              <span className="badge  rounded-pill  text-dark">{officalGuestCount}</span>
            </li>
            <li className="total text-secondary fw-bold list-group-item d-flex justify-content-between align-items-center">
              Total
              <span className="badge  rounded-pill text-dark">
                {mealList.borderMealList.length +
                  normalGuestCount +
                  officalGuestCount}
              </span>
            </li>
          </ul>

       
        </div>
      </>
    );
  };

  const getBorderMealList = () => {
    return (
      <>
        <h1 className=" mt-0 pt-4 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Border Meal List
        </h1>

        <div className="p-3">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Room No.</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {mealList.borderMealList.map((student, i) => (
                  <tr className="" key={i}>
                    <td>{i + 1}</td>
                    <td className="th1">
                      {" "}
                      <ShowImage user={student} ClassName="img2 " />
                      {" "}
                    </td>
                    <td>
                      {student.fname} {student.lname}
                    </td>
                    <td>{student.department}</td>
                    <td>{student.roomNo}</td>
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

  const getGuestMealList = () => {
    // if( mealList.guestMealList.length===0) return <></>
    return (
      <>
        <h1 className=" mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Guest MEal List
        </h1>

        <div className="p-3 pb-5">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th> Guest Holder</th>
                <th> Guest Type</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {mealList.guestMealList.map((guest, i) => (
                  <tr className="" key={i}>
                    <td>{i + 1}</td>
                    <td>{guest.name} </td>
                    <td>{guest.guestHolder}</td>
                    {guest.guestType == 0 ? (
                      <td className="text-center align-middle">Normal</td>
                    ) : (
                      <td className="text-center align-middle">Offical</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ManLayout
        title={
          isMorning
            ? " Morning Prepared Meal List "
            : " Night Prepared Meal List "
        }
        description={`${user.fname} ${user.lname}`}
        className="container-fluid"
        history={history}
      >
        <div className="row text-box fadeUp animate">
          {countMeal()}
          {getBorderMealList()}
          {getGuestMealList()}
        </div>
      </ManLayout>
      {/* <Footer /> */}
    </>
  );
};

export default TodayMealList;
