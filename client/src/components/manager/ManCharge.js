// All type  of charge info will be here
// 1. events charge
// 2. guest mor/nig charge
// 3. edit charge update charge ..

import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { read, setCharges, setboundtime, addAuditCharges } from "./ManApi";

const Charges = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [manager, setmanager] = useState(user);
  const [amount, setAmount] = useState({
    auditAmount: 0,
    auditedDate: "",
    error: "",
    success: "",
  });
  const [auditToggler, setauditToggler] = useState(false);
  const [guestToggler, setguestToggler] = useState(false);
  const [values, setValues] = useState({
    guestMorMealCharge: manager.guestMorMealCharge,
    guestNigMealCharge: manager.guestNigMealCharge,
    grandCharge: manager.grandCharge,
    error: "",
    success: false,
  });

  user.paymentRecord.sort(function (a, b) {
    return new Date(a.auditDate) - new Date(b.auditDate);
  });

  const {
    guestMorMealCharge,
    guestNigMealCharge,
    grandCharge,
    error,
    success,
  } = values;

  const { auditAmount, auditedDate } = amount;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const handleAuditChange = (name) => (event) => {
    setAmount({ ...amount, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    setCharges(user._id, token, values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          guestMorMealCharge: guestMorMealCharge,
          guestNigMealCharge: guestNigMealCharge,
          grandCharge: grandCharge,
          error: "",
          success: true,
        });

        setguestToggler(!guestToggler);
      }
    });
  };

  const clickSubmitAduditCharge = (event) => {
    event.preventDefault();
    setAmount({ ...amount, error: false });

    addAuditCharges(user._id, token, amount).then((data) => {
      if (data.error) {
        setAmount({ ...amount, error: data.error, success: false });
      } else {
        setAmount({
          amount: 0,
          error: "",
          success: true,
        });
        setauditToggler(!auditToggler);
      }
    });
  };

  const auditedChargeMealList = () => {
    return (
      <>
        {/* <div className="text-end" style={{ display: !auditToggler ? '' : 'none' }}> 
                    
                    <button className="btn btn-primary" onClick={()=>setauditToggler(!auditToggler)}>Add Meal Charge</button>
                </div> */}
        <div className="pb-4 pt-3">
          <div className="shadow tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>SL no.</th>
                  <th>Date</th>
                  <th>Audit Amount</th>
                  <th>Border Meal</th>
                  <th>Guest Meal</th>
                  <th>Toatal Meal</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="shadow tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {manager.mealInfoList.map((rec, i) => (
                  <tr
                    style={{ display: rec.auditAmount ? "" : "none" }}
                    key={i}
                  >
                    <td>{i + 1}</td>
                    <td>{rec.auditedDate.slice(0, 15)}</td>
                    <td>{rec.perheadCharge}</td>
                    <td>
                      {rec.mealCountList.borderMor +
                        rec.mealCountList.borderNig}
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
      <p>
        <div className="mt-1 text-end">
          <button
            class="bton  p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add Meal Charges
            <i class="fa fa-caret-down p-1" aria-hidden="true"></i>
          </button>
        </div>
      </p>
      <div class="collapse" id="collapseExample2">
        <div class="card card-body">
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
            <label className="form-label " htmlFor="auditAmount">
              Meal Charge
            </label>
            <input
              type="Number"
              className="form-control"
              name="auditAmount"
              required=""
              onChange={handleAuditChange("auditAmount")}
              value={auditAmount}
            />
          </div>
          <div className="row">
            <div className="col">
              <button
                className="bton pt-2 me-2 btn-lg  px-4"
                type="submit"
                onClick={clickSubmitAduditCharge}
              >
                Add Charge
              </button>
              <button
                className="bton  btn-lg px-4 pt-2 "
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setauditToggler(!auditToggler);
                }}
              >
                Cancle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <form style={{ display: auditToggler ? '' : 'none' }}>  */}

      {/* <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">Add Meal Charge</h4> */}
      {/* <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="auditedDate">Month</label>
              <input type="month" className="form-control" name="auditedDate" required="" onChange={handleAuditChange('auditedDate')} value={auditedDate} />        
            </div> 
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="auditAmount">Meal Charge</label>
              <input type="Number" className="form-control" name="auditAmount" required="" onChange={handleAuditChange('auditAmount')} value={auditAmount} />        
            </div>      
            <div className="row">           
                <div className="col">
                  <button className="btn btn-outline-light btn-lg btn-success px-4" type="submit" onClick={clickSubmitAduditCharge} >Add Charge</button>
                <button className="btn btn-outline-light btn-lg btn-danger ml-2 px-4" type="submit" onClick={(e)=>{e.preventDefault(); setauditToggler(!auditToggler)}} >Cancle</button>
            </div>
            </div>       */}

      {/* </form> */}
    </>
  );

  const showCharges = () => (
    <>
      {/* <div style={{ display: !guestToggler ? '' : 'none' }}> */}

      {/* <div className="text-end"> 
            <button className="btn btn-primary" onClick={()=>setguestToggler(!guestToggler)}>Update</button>
        </div> */}
      <ul class="list-group m-2">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Guest Morning Charge
          <span class="badge  rounded-pill">{guestMorMealCharge}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Guest Night Charge
          <span class="badge rounded-pill">{guestNigMealCharge}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Guest Grand Charge
          <span class="badge rounded-pill">{grandCharge}</span>
        </li>
      </ul>

      {/* </div> */}
    </>
  );

  const chargeForm = () => (
    <>
      <h1 className=" mt-0 pt-5 border-bottom text-start">
        <i className="fa fa-angle-double-right"></i>
        &nbsp;Guest Meal Charge
      </h1>
      <p>
        <div className="mt-1 text-end">
          <button
            class="bton p-2 pt-2 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Update charges
            <i class="fa fa-caret-down p-1" aria-hidden="true"></i>
          </button>
        </div>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
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
                className="bton shadow pt-1 p-2 btn-lg "
                type="submit"
                onClick={clickSubmit}
              >
                Update
              </button>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* <form style={{ display: guestToggler ? '' : 'none' }}> 
        
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="guestMorMealCharge">Guest Morning Charge</label>
              <input type="Number" className="form-control" name="guestMorMealCharge" required="" onChange={handleChange('guestMorMealCharge')} value={guestMorMealCharge} />        
            </div>
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="guestNigMealCharge">Guest Night Charge</label>
              <input type="Number" className="form-control" name="guestNigMealCharge" required="" onChange={handleChange('guestNigMealCharge')} value={guestNigMealCharge} />        
            </div>
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="grandCharge">Guest Grand Charge</label>
              <input type="Number" className="form-control" name="grandCharge" required="" onChange={handleChange('grandCharge')} value={grandCharge} />        
            </div>      
           <div className="row">           
                <div className="col">
                  <button className="btn btn-outline-light btn-lg px-4" type="submit" onClick={clickSubmit} >Update</button>
                </div>
            </div>      
      
        </form> */}
    </>
  );

  const showError = () => (
    <>
      <div
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
        style={{ display: error || amount.error ? "" : "none" }}
      >
        {error}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      {/* <div className="alert alert-danger" style={{ display: error || amount.error ? '' : 'none' }}>
            {error}
        </div> */}
    </>
  );

  const showSuccess = () => (
    <>
      <div
        class="alert alert-info alert-dismissible fade show"
        role="alert"
        style={{ display: success ? "" : "none" }}
      >
        Charge updated Successfully
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
     
      <div
        class="alert alert-info alert-dismissible fade show"
        role="alert"
        style={{ display: amount.success ? "" : "none" }}
      >
        Charge added Successfully
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      {/* <div className="alert alert-info" style={{ display: amount.success ? '' : 'none' }}>
         Charge added Successfully
        </div> */}
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
        <div className="row">
          {JSON.stringify(amount)}
          {showSuccess()}
          {showError()}
          {chargeForm()}
          {showCharges()}

          {auditMealChargeForm()}
          {auditedChargeMealList()}
        </div>
      </ManLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Charges;
