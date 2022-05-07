// show data chart format
// meal List of current day mor/ nig will be shown
// set meal bound time here ..

import React, { useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { getPreparedMealList } from "./ManApi";

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

  const countMeal = () => {
    const officalGuestCount = 0;
    mealList.guestMealList.forEach((guest) => {
      if (guest.guestType == 1) officalGuestCount++;
    });
    const normalGuestCount = mealList.guestMealList.length - officalGuestCount;

    return (
      <>
        <h1 className="m-3 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Total Meal Count
        </h1>

        <div className=" me-auto mt-3 mb-5">
          <ul className=" list-group shadow">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Border meal
              <span className="badge  rounded-pill">
                {mealList.borderMealList.length}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Guest meal
              <span className="badge  rounded-pill">{normalGuestCount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Official Guest meal
              <span className="badge  rounded-pill">{officalGuestCount}</span>
            </li>
            <li className="total text-secondary fw-bold list-group-item d-flex justify-content-between align-items-center">
              Total
              <span className="badge  rounded-pill">
                {mealList.borderMealList.length +
                  normalGuestCount +
                  officalGuestCount}
              </span>
            </li>
          </ul>

          {/* <table className="table table-hover ">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 ">Border</th>
                            <th className="align-middle text-center text-light h5" >Normal Guest</th>
                            <th className="align-middle text-center text-light h5" >Official</th>                            
                        </tr>
                    </thead>
                    <tbody>
                                      
                        <tr className="" >                       
                            <td className="text-center align-middle">{mealList.borderMealList.length}</td>
                            <td className="text-center align-middle">{normalGuestCount}</td>                                           
                            <td className="text-center align-middle">{officalGuestCount}</td>                                       
                        </tr>
                     
                    </tbody>
                    <tfoot>
                    <tr className="table " >                       
                            <td className="text-center align-middle " colSpan={2}>Total</td>
                            <td className="text-center align-middle">{ mealList.borderMealList.length + normalGuestCount + officalGuestCount }</td>                                                                                  
                        </tr>
                    </tfoot>
                </table>                 */}
        </div>
      </>
    );
  };

  const getBorderMealList = () => {
    return (
      <>
        <h1 className="m-3 mt-0 pt-4 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Border Meal List
        </h1>

        <div className="pb-4 pt-3">
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
                    <td>
                      {" "}
                      <img
                        className="img mb-2 img-thumbnail"
                        src={student.avatar}
                        alt="..."
                        width="75"
                      />
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
        <h1 className="m-3 mt-0 pt-5 border-bottom text-start">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Guest MEal List
        </h1>

        <div className="pb-5 pt-3">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <th>Serial No.</th>
                <th>Name</th>
                <th> Guest Holder</th>
                <th> Guest Type</th>
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
        <div className="row">
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
