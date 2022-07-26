// All type  of charge info will be here
// 1. events charge
// 2. guest mor/nig charge
// 3. edit charge update charge ..

import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { read, setCharges, setboundtime, addAuditCharges } from "./ManApi";
import Notification from "../Notification";

const Charges = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [curManager, setmanager] = useState(user);
  const [notify , setNotify]= useState({isOpen:false , message:'', type:''});

  const [amount, setAmount] = useState({
    auditedDate: "",
    gas: 0,
    vegitables: 0,
    groceryEggRice: 0,
    fish: 0,
    meat: 0,
    miscelleanous: 0,
    cable: 0,
    paper: 0,
    manager: 0,
    total: 0,
    lessGuestCollection: 0,
    less: 0,
    TotalMealChargeForTheMonth: 0,
    totalNumberOfBoarders: 0,
    mealChargePerBoarder: 0,
    RoundOffCharge: 0,

  });

  const [auditToggler, setauditToggler] = useState(false);
  const [guestToggler, setguestToggler] = useState(false);
  const [values, setValues] = useState({
    guestMorMealCharge: curManager.guestMorMealCharge,
    guestNigMealCharge: curManager.guestNigMealCharge,
    grandCharge: curManager.grandCharge,
  });

  user.paymentRecord.sort(function (a, b) {
    return new Date(a.auditDate) - new Date(b.auditDate);
  });

  const {
    guestMorMealCharge,
    guestNigMealCharge,
    grandCharge,
  } = values;


  const {
    auditedDate,
    gas,
    vegitables,
    groceryEggRice,
    fish,
    meat,
    miscelleanous,
    cable,
    paper,
    manager,
    total,
    lessGuestCollection,
    less,
    TotalMealChargeForTheMonth,
    totalNumberOfBoarders,
    mealChargePerBoarder,
    RoundOffCharge,
  } = amount;

  const updateTotalCharge = (chargeType) => {
    var totalCharge = parseInt(gas) + parseInt(vegitables) + parseInt(groceryEggRice) + parseInt(fish) + parseInt(meat) + parseInt(miscelleanous) + parseInt(cable) + parseInt(paper);
    var totalChargeAfterRemovingSomeCollecton = totalCharge - parseInt(less) - parseInt(lessGuestCollection);
    var perBoarderCharge = totalNumberOfBoarders === 0 || totalNumberOfBoarders === '' ? totalChargeAfterRemovingSomeCollecton : totalChargeAfterRemovingSomeCollecton / parseInt(totalNumberOfBoarders)

    if (chargeType === 'total') {
      return totalCharge;
    }
    else if (chargeType === 'TotalMealChargeForTheMonth') {
      return totalChargeAfterRemovingSomeCollecton
    }
    else if (chargeType === 'mealChargePerBoarder') {
      return perBoarderCharge
    }
    else if (chargeType === 'RoundOffCharge') {
      return Math.ceil(perBoarderCharge)
    }
  }

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleAuditChange = (name) => (event) => {
    setAmount({ ...amount, [name]: event.target.value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values });

   await setCharges(user._id, token, values).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});        
      } else {
        setNotify({isOpen:true, message:'Charge added successfully' , type:"success"});
        setValues({
          guestMorMealCharge: guestMorMealCharge,
          guestNigMealCharge: guestNigMealCharge,
          grandCharge: grandCharge,
        });

        setguestToggler(!guestToggler);
      }
    });
  };

  const clickSubmitAduditCharge = async (event) => {
    event.preventDefault();
    setAmount({ ...amount });

   await addAuditCharges(user._id, token, amount).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
      } else {
        setNotify({isOpen:true, message:'Audit Charge added successfully' , type:"success"});
        setAmount({
          auditedDate: "",
          gas: 0,
          vegitables: 0,
          groceryEggRice: 0,
          fish: 0,
          meat: 0,
          miscelleanous: 0,
          cable: 0,
          paper: 0,
          manager: 0,
          total: 0,
          lessGuestCollection: 0,
          less: 0,
          TotalMealChargeForTheMonth: 0,
          totalNumberOfBoarders: 0,
          mealChargePerBoarder: 0,
          RoundOffCharge: 0,
        });
        setauditToggler(!auditToggler);
      }
    });
  };

  const auditedChargeMealList = () => {
    return (
      <>
        <div className="p-3">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th className="col-1 ">SL no.</th>
                  <th>Date</th>
                  <th>Audit Amount</th>
                  <th>Boarder Meal</th>
                  <th>Guest Meal</th>
                  <th>Toatal Meal</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {curManager.mealInfoList.map((rec, i) => (
                  <tr
                    style={{ display: rec.perheadCharge ? "" : "none" }}
                    key={i}
                  >
                    <td>{i + 1}</td>
                    <td>{rec.auditedDate.slice(0, 15)}</td>
                    <td>{rec.perheadCharge}</td>
                    <td>
                      {rec.mealCountList.borderMor + rec.mealCountList.borderNig}
                    </td>
                    <td>
                      {rec.mealCountList.guestMor + rec.mealCountList.guestNig}
                    </td>
                    <td>{rec.totalMeal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const auditMealChargeForm = () => (
    <>
      <h1 className=" mt-0 pt-5 border-bottom text-start">
        <i className="fa fa-angle-double-right"></i>
        &nbsp;Audit Meal Charge
      </h1>
      <div>
        <div className="mt-1 me-2 text-end">
          <button
            className="bton  p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add Meal Charges
         </button>
        </div>
      </div>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body">
          <h4 className="text-secondary pt-2 pb-2 ">Add Meal Charge</h4>
          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="auditedDate">
              Month
            </label>
            <input
              type="month"
              className="form-control"
              name="auditedDate"
              required=""
              onChange={handleAuditChange("auditedDate")}
              value={auditedDate}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="gas">
              Gas
            </label>
            <input
              type="Number"
              className="form-control"
              name="gas"
              required=""
              onChange={handleAuditChange("gas")}
              value={gas}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="vegitables">
              Vegitables
            </label>
            <input
              type="Number"
              className="form-control"
              name="vegitables"
              required=""
              onChange={handleAuditChange("vegitables")}
              value={vegitables}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="groceryEggRice">
              Grocery + Egg + Rice
            </label>
            <input
              type="Number"
              className="form-control"
              name="groceryEggRice"
              required=""
              onChange={handleAuditChange("groceryEggRice")}
              value={groceryEggRice}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="fish">
              Fish
            </label>
            <input
              type="Number"
              className="form-control"
              name="fish"
              required=""
              onChange={handleAuditChange("fish")}
              value={fish}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="meat">
              Meat <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="meat"
              required=""
              onChange={handleAuditChange("meat")}
              value={meat}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="miscelleanous">
              Miscelleanous <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="miscelleanous"
              required=""
              onChange={handleAuditChange("miscelleanous")}
              value={miscelleanous}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="cable">
              Cable <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="cable"
              required=""
              onChange={handleAuditChange("cable")}
              value={cable}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="paper">
              Paper <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="paper"
              required=""
              onChange={handleAuditChange("paper")}
              value={paper}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="manager">
              Manager <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="manager"
              required=""
              onChange={handleAuditChange("manager")}
              value={manager}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="lessGuestCollection">
              Less Guest Collection <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="lessGuestCollection"
              required=""
              onChange={handleAuditChange("lessGuestCollection")}
              value={lessGuestCollection}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="less">
              Less  <i>( Cash expenditure )</i>
            </label>
            <input
              type="Number"
              className="form-control"
              name="less"
              required=""
              onChange={handleAuditChange("less")}
              value={less}
            />
          </div>

          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label " htmlFor="totalNumberOfBoarders">
              Total number of Boarders 
            </label>
            <input
              type="Number"
              className="form-control"
              name="totalNumberOfBoarders"
              required=""
              onChange={handleAuditChange("totalNumberOfBoarders")}
              value={totalNumberOfBoarders}
            />
          </div>

          <div className="col mb-4">

            <p>Total : {updateTotalCharge('total')}</p>
            <p>Total Meal charge of the Month: {updateTotalCharge('TotalMealChargeForTheMonth')}</p>
            <p>Total Meal charge of the Month: {updateTotalCharge('mealChargePerBoarder')}</p>
            <p> Final Roundoff Charge :  {updateTotalCharge('RoundOffCharge')}</p>
            <p></p>
          </div>

          <div className="row">
            <div className="col">
              <button
                className="bton pt-2 me-2  px-4"
                type="submit"
                onClick={clickSubmitAduditCharge}
              >
                Add Charge
              </button>
              {/* <button
                className="bton  btn-lg px-4 pt-2 "
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setauditToggler(!auditToggler);
                }}
              >
                Cancle
              </button> */}
              <button
            className="bton  p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
                Cancel           
          </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const showCharges = () => (
    <>
        <div className="p-2">
      <ul className="list-group m-2">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Guest Morning Charge
          <span className="badge  rounded-pill text-secondary">{guestMorMealCharge}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Guest Night Charge
          <span className="badge rounded-pill text-secondary">{guestNigMealCharge}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Guest Grand Charge
          <span className="badge rounded-pill text-secondary">{grandCharge}</span>
        </li>
      </ul>
      </div>
    </>
  );

  const chargeForm = () => (
    <>
      <h1 className=" mt-0 pt-5 border-bottom text-start">
        <i className="fa fa-angle-double-right"></i>
        &nbsp;Guest Meal Charge
      </h1>
      <div>
        <div className="mt-1 me-2 text-end">
          <button
            className="bton p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Update charges
         </button>
        </div>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="col form-outline text-start form-white mb-4">
            <label
              className="form-label text-secondary"
              htmlFor="guestMorMealCharge"
            >
              Guest Morning Charge
            </label>
            <input
              type="Number"
              className="form-control"
              name="guestMorMealCharge"
              required=""
              onChange={handleChange("guestMorMealCharge")}
              value={guestMorMealCharge}
            />
          </div>
          <div className="col form-outline text-start form-white mb-4">
            <label
              className="form-label text-secondary"
              htmlFor="guestNigMealCharge"
            >
              Guest Night Charge
            </label>
            <input
              type="Number"
              className="form-control"
              name="guestNigMealCharge"
              required=""
              onChange={handleChange("guestNigMealCharge")}
              value={guestNigMealCharge}
            />
          </div>
          <div className="col form-outline text-start form-white mb-4">
            <label className="form-label text-white" htmlFor="grandCharge">
              Guest Grand Charge
            </label>
            <input
              type="Number"
              className="form-control"
              name="grandCharge"
              required=""
              onChange={handleChange("grandCharge")}
              value={grandCharge}
            />
          </div>
          <div className="row">
            <div className="col">
              <button
                className="bton shadow-sm pt-2 p-2 me-2 px-4"
                onClick={clickSubmit}
              >
                Update
              </button>
              
           
            
            <button
            className="bton p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Close
         </button>
         </div>
          </div>{" "}
        </div>
      </div>
    </>
  );

  useEffect(() => {
    read(user._id, token).then((data) => {
      setmanager(data);
    });
  }, [values, guestToggler, auditToggler]);

  return (
    <>
      <ManLayout
        title="All Charges"
        description={"Meal and Event charges"}
        className="container-fluid pb-4"
        history={history}
      >
        <div className="row text-box fadeUp animate">
          <Notification notify={notify} setNotify={setNotify} />
          {chargeForm()}
          {showCharges()}
          {auditMealChargeForm()}
          {auditedChargeMealList()}
        </div>
      </ManLayout>
    </>
  );
};

export default Charges;
