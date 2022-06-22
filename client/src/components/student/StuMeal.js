import React, { useEffect, useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { messActivity, read } from "./stuApi";
import Notification from "../Notification";

const MealAcitvity = ({ history }) => {
  const { user, token } = isAuthenticated();
  var [mealStatus, setMealStatus] = useState(user.messStatus);
  const [notify , setNotify]= useState({isOpen:false , message:'', type:''});

  useEffect(async () => {
    await read(user._id, token).then((data) => {    
      setMealStatus(data.messStatus);
    });
  }, [mealStatus]);

  const submit = async (e) => {
    e.preventDefault();
    // update with ? you should send category name otherwise what to update?
   await messActivity(user._id, token);
    if (mealStatus == 2) {
      setMealStatus((mealStatus = 3));
      setNotify({isOpen:true, message:'Meal Turned-On successfully' , type:"success"});
    }
    else {
      setMealStatus((mealStatus = 2));
      setNotify({isOpen:true, message:'Meal Turned-Off  successfully ' , type:"warning"});
    }
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
            {mealStatus <= 1 ? (
              <span className="pt-3 fw-bold  text-secondary">DISABLE</span>
            ) : mealStatus == 2 ? (
              <span className="pt-3 de">DEACTIVATED</span>
              
            ) : (
              <span className="pt-3 fw-bold text-success">ACTIVATED</span>
            )}
          </div>

          <div className="col-3  text-end ">
            {mealStatus <= 1 ? (
              <button
                type="submit"
                className="bg-white check text-secondary p-2 pt-3 fa fa-lg fa-toggle-off "
              ></button>
            ) : mealStatus == 2 ? (
              <button
                type="submit"
                className="bg-white check p-2 pt-3 fw-bold fa fa-lg fa-toggle-off  "
                onClick={submit}
              ></button>
            ) : (

              <button
                type="submit"
                className="bg-white check p-2 pt-3 fw-bold fa fa-lg fa-toggle-on "
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

        <section className="p-1">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
              <thead>
                <tr>
                  <th className="col-1">SL</th>
                  <th>Date</th>
                  <th>Mess status</th>
                  {/* <th>Moring Charge</th>
                  <th>Night Charge</th> */}
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {user.activity.map((rec, i) => (
                  <tr key={i}>
                    <td className="col-1">{i + 1}</td>
                    <td>{rec.date.slice(0, 15)}</td>
                    <td>{rec.mess_status}</td>
                    {/* <td>{rec.morning_charge}</td>
                    <td>{rec.night_charge}</td> */}
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
        <Notification notify={notify} setNotify={setNotify} />
        <div className="col mb-0 text-box fadeUp animate">{mealAcitvity()}</div>
      </StuLayout>
      <Footer />
    </>
  );
};

export default MealAcitvity;
