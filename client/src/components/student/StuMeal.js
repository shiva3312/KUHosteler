import React, { useEffect, useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import { messActivity,read } from "./stuApi";



const MealAcitvity = ({history}) => {  
    
    const {user, token} = isAuthenticated();
    var [mealStatus , setMealStatus] = useState(0)

    useEffect(()=>{
        read( user._id, token).then((data)=>{
            setMealStatus(data.messStatus )
          })
        },[]);

  

    const submit = e => {
        e.preventDefault();
        // update with ? you should send category name otherwise what to update?        
        messActivity(user._id, token);
        if(mealStatus == 2 )
            setMealStatus(mealStatus  = 3);    
        else setMealStatus(mealStatus  = 2); 
                
    };
    user.activity.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
    const mealAcitvity = () => {
     
        return (
            <>
            <div className="container">
          <div  className="mt-5 row justify-content-center">
             <div class="col-3 th">
      <th>
    <h6>Meal Status</h6>
    </th>
    </div><div class="col-3 th">
    <th>
                      <h6 >  {
                            mealStatus== 0 || mealStatus==1 ? <li text-danger>Disable</li>:
                            mealStatus == 2 ? <button type="submit" className="btn-sm btn-danger" onClick={submit}>OFF</button> : <button type="submit" className="btn-sm p-2 btn-success" onClick={submit}>ON</button>
                        }</h6>
                    </th>
    </div>
    </div>
    
             </div>
             <h1>Meal Activity</h1>
             <section className="shadow">
            <div  className="shadow tbl-header">
                <table cellpadding="0" cellspacing="0" border="0" id="tableLevel-2">
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
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
           { user.activity.map((rec , i)=>(
                        <tr key={i}>                       
                            <td >{i+1}</td>
                            <td >{rec.date.slice(0,15)}</td>
                            <td >{rec.mess_status}</td>
                            <td >{rec.morning_charge}</td>
                            <td >{rec.night_charge}</td>
                           
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
        <StuLayout history={history} >
            {/* show your content in this div */}
            <div className="row " >           
                <div  className="col mb-0">{mealAcitvity()}</div>
            </div>             
        </StuLayout>
        <Footer />
        </>       
    );
};

export default MealAcitvity;
