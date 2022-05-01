// All type  of charge info will be here 
// 1. events charge 
// 2. guest mor/nig charge 
// 3. edit charge update charge ..

import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  read , setCharges ,setboundtime ,addAuditCharges} from "./ManApi";


const Charges = () => {
    const {  user,token } = isAuthenticated();
    const [manager , setmanager] = useState(user);
    const [amount , setAmount]= useState({
        auditAmount:0,
        auditedDate:'',
        error:'',
        success:''
    });
    const [auditToggler , setauditToggler] = useState(false);
    const [guestToggler , setguestToggler] = useState(false);
    const [values , setValues ] = useState({
        guestMorMealCharge : manager.guestMorMealCharge,
        guestNigMealCharge : manager.guestNigMealCharge,
        grandCharge : manager.grandCharge,
        error: '',
        success: false,
    });

    user.paymentRecord.sort(function(a,b){
        return new Date(a.auditDate) - new Date(b.auditDate);
      });

  
    const {
        guestMorMealCharge ,
        guestNigMealCharge ,
        grandCharge ,
        error,
        success,
    } = values;

    const {
        auditAmount,
        auditedDate,
    }= amount;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const handleAuditChange = name => event => {
        setAmount({ ...amount, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {        
        event.preventDefault();
        setValues({ ...values, error: false });
        
        setCharges(user._id , token ,values).then((data) => {       
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
               setValues({
                    guestMorMealCharge : guestMorMealCharge,
                    guestNigMealCharge : guestNigMealCharge,
                    grandCharge : grandCharge,
                    error: '',
                    success: true,
                 });

                setguestToggler(!guestToggler);
            }
        });
    };
 
    const clickSubmitAduditCharge = event => {        
        event.preventDefault();
        setAmount({ ...amount, error: false });
        
        addAuditCharges(user._id , token , amount).then((data) => {       
            if (data.error) {
                setAmount({ ...amount, error: data.error, success: false });
            } else {
                setAmount({
                    amount:0,
                    error: '',
                    success: true,
                 });
                setauditToggler(!auditToggler);
            }
        });
    };
   
    const auditedChargeMealList = () => {
      
       
        return (
            <>

                <h1>Audited Meal Charge </h1>
                <div className="text-end" style={{ display: !auditToggler ? '' : 'none' }}> 
                    
                    <button className="btn btn-primary" onClick={()=>setauditToggler(!auditToggler)}>Add Meal Charge</button>
                </div>
                <div className="shadow">

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
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>

                                {manager.mealInfoList.map((rec, i) => (

                                    <tr style={{display: rec.auditAmount? '' : 'none'}} key={i}>
                                        <td >{i + 1}</td>
                                        <td>{rec.auditedDate.slice(0, 15)}</td>
                                        <td >{rec.perheadCharge}</td>
                                        <td >{rec.mealCountList.borderMor + rec.mealCountList.borderNig}</td>
                                        <td >{rec.mealCountList.guestMor + rec.mealCountList.guestNig}</td>
                                        <td >{rec.totalMeal}</td>
                                      
                                    </tr>

                                ))

                                }
                            </tbody>
                        </table>
                    </div>
                    <table>
                    <tfoot className="table border ">

                    </tfoot>
                    </table>
                </div>
               

            </>
        );
    };

    const auditMealChargeForm =()=>(
        
        <form style={{ display: auditToggler ? '' : 'none' }}> 
        <section className=" gradient">       
        <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">Add Meal Charge</h4>
            <div className="col form-outline text-start form-white mb-4">
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
            </div>      
        </section>
        </form>
        
    );

    const showCharges =()=>(
        <>
        <h1 className="m-4">Guest Meal Charges</h1>

        <div style={{ display: !guestToggler ? '' : 'none' }}>
        
        
        <div className="text-end"> 
            <button className="btn btn-primary" onClick={()=>setguestToggler(!guestToggler)}>Update</button>
        </div>
        <div className="shadow">
            <div className="shadow tbl-header">
            <table table cellPadding="0" cellSpacing="0" border="0" >
                <thead>
                <tr >
                    <th >Guest Morning Charge</th>
                    <th >Gues Night Charge</th>
                    <th >Gues Grand Charge</th>
                </tr>
                </thead>
                </table>
                </div>
                <div className="table tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                <tr >
                    <td >{guestMorMealCharge}</td>
                    <td >{guestNigMealCharge}</td>
                    <td >{grandCharge}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
      
        </>
    );

    const chargeForm = () => (
        
        <form style={{ display: guestToggler ? '' : 'none' }}> 
        <section className=" gradient">  
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
        </section>
        </form>
    ); 

    const showError = () => (
        <>
        <div className="alert alert-danger" style={{ display: error || amount.error ? '' : 'none' }}>
            {error}
        </div>
       
        </>
    );

    const showSuccess = () => (
        <>
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Charge updated Successfully
        </div>
         <div className="alert alert-info" style={{ display: amount.success ? '' : 'none' }}>
         Charge added Successfully
        </div>
        </>
    );

    useEffect(()=>{
        read(user._id, token).then((data) =>{
            setmanager(data)
        });
        
    },[values,guestToggler,auditToggler]);

    
    return (
        <>
        <ManLayout
            title="All Charges"
            description={"Meal and Event charges"}
            className="container-fluid pb-4"
        >
            <div className="row">  
               {JSON.stringify(amount)}
                {showSuccess()}
                {showError()}    
                {showCharges()}                     
                {chargeForm()}
                {auditMealChargeForm()}
                {auditedChargeMealList()}
                
               
            </div>           
        </ManLayout>
        {/* <Footer /> */}
        </>
    );
};

export default Charges;
