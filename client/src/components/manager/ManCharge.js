// All type  of charge info will be here 
// 1. events charge 
// 2. guest mor/nig charge 
// 3. edit charge update charge ..

import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  read , setCharges ,setboundtime} from "./ManApi";


const Charges = () => {
    const {  user,token } = isAuthenticated();
    const [manager , setmanager] = useState(user);
    const [toggler , setToggler] = useState(false)
    const [values , setValues] = useState({
        guestMorMealCharge : manager.guestMorMealCharge,
        guestNigMealCharge : manager.guestNigMealCharge,
        grandCharge : manager.grandCharge,
        error: '',
        success: false,
     });

     const {
        guestMorMealCharge ,
        guestNigMealCharge ,
        grandCharge ,
        error,
        success,
     } = values;

     const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
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

                setToggler(!toggler);
            }
        });
    };

    const showCharges =()=>(
        <>
        <div style={{ display: !toggler ? '' : 'none' }}>
       
        <div className="mt-4">
            <table className="table table-hover " >
                <thead>
                <tr >
                    <th className="align-middle text-center text-light">Guest Morning Charge</th>
                    <th className="align-middle text-center text-light">Gues Night Charge</th>
                    <th className="align-middle text-center text-light" >Gues Grand Charge</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td className="align-middle text-center text-light">{guestMorMealCharge}</td>
                    <td className="align-middle text-center text-light">{guestNigMealCharge}</td>
                    <td className="align-middle text-center text-light">{grandCharge}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="text-end"> 
            <button className="btn btn-primary" onClick={()=>setToggler(!toggler)}>Update</button>
        </div>
        </div>
        </>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Charge updated Successfully
        </div>
    );



    const chargeForm = () => (
        
        <form style={{ display: toggler ? '' : 'none' }}> 
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


    useEffect(()=>{
        read(user._id, token).then((data) =>{
            setmanager(data)
        })
    },[values,toggler]);

    
    return (
        <>
        <ManLayout
            title="All Charges"
            description={"Meal and Event charges"}
            className="container-fluid"
        >
            <div className="row">   
                {showSuccess()}
                {showError()}    
                {showCharges()}                     
                {chargeForm()}
               
            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default Charges;
