import React, { useEffect, useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { messActivity, read } from "./stuApi";

const MealAcitvity = ({ history }) => {
  const { user, token } = isAuthenticated();
  var [mealStatus, setMealStatus] = useState(0);

  useEffect(() => {
    read(user._id, token).then((data) => {
      setMealStatus(data.messStatus);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // update with ? you should send category name otherwise what to update?
    messActivity(user._id, token);
    if (mealStatus == 2) setMealStatus((mealStatus = 3));
    else setMealStatus((mealStatus = 2));
  };
  user.activity.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  const mealAcitvity = () => {
    return (
      <>
        {/* <div className="container"> */}
        <h1 className="text-start ms-4 me-4 border-bottom">
          <i className="fa fa-angle-double-right "></i>
          &nbsp;Check your meal status
        </h1>

        <div className="row status bg-white shadow-sm">
          
          <div className="  col-9 p-3 ps-3 pe-0 text-start  ">
            MEAL STATUS &emsp;:&emsp;
            {mealStatus == 0 || mealStatus == 1 ? (
              <span className="pt-3 fw-bold  text-secondary">DISABLE</span>
            ) : mealStatus == 2 ? (
              <span className="pt-3 fw-bold  text-success">ACTIVATED</span>
            ) : (
              <span className="pt-3  fw-bold de">DEACTIVATED</span>
            )}
          </div>

          <div className="col-3  text-end ">
            {mealStatus == 0 || mealStatus == 1 ? (
              <button
                type="submit"
                className="bg-white check text-secondary p-2 pt-3 fa fa-lg fa-toggle-off "
              ></button>
            ) : mealStatus == 2 ? (
              <button
                type="submit"
                className="bg-white check p-2 pt-3 fw-bold fa fa-lg fa-toggle-on "
                onClick={submit}
              ></button>
            ) : (
              <button
                type="submit"
                className="bg-white check p-2 pt-3 fw-bold fa fa-lg fa-toggle-off  "
                onClick={submit}
              ></button>
            )}
          </div>

          {/* <div className="col-3 th">
                <th>
                    <h6 >  
                    {
                        mealStatus== 0 || mealStatus==1 ? <li text-danger>Disable</li>:
                        mealStatus == 2 ? <button type="submit" className="btn" onClick={submit}>ACTIVATED<i className="fa fa-lg fa-toggle-on text-success"></i></button> : <button type="submit" className="btn" onClick={submit}><i className="fa fa-toggle-off text-secondary"></i></button>
                    }
                    </h6>
                </th>
            </div> */}
          {/* </div> */}
        </div>
        <h1 className="text-start ms-4 me-4 mb-4 border-bottom">
          <i className="fa fa-angle-double-right "></i>
          &nbsp; your meal activity
        </h1>
        <h3 className="mt-4">Meal activity</h3>

        <section className="shadow">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Date</th>
                  <th>Mess status</th>
                  <th>Moring Charge</th>
                  <th>Night Charge</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {user.activity.map((rec, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{rec.date.slice(0, 15)}</td>
                    <td>{rec.mess_status}</td>
                    <td>{rec.morning_charge}</td>
                    <td>{rec.night_charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <StuLayout history={history}>
        {/* show your content in this div */}

        <div className="col mb-0">{mealAcitvity()}</div>
      </StuLayout>
      <Footer />
    </>
  );
};

export default MealAcitvity;
