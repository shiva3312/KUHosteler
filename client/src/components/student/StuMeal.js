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
        });

  

    const submit = e => {
        e.preventDefault();
        // update with ? you should send category name otherwise what to update?        
        messActivity(user._id, token);
        if(mealStatus == 2 )
            setMealStatus(mealStatus  = 3);    
        else setMealStatus(mealStatus  = 2); 
                
    };

    const mealAcitvity = () => {
     
        return (
            <>
        
             <div  className="card mb-5 shadow-sm m-3">
            <table>
                <tr>
                    <td>
                        <ui>Meal Status</ui>
                    </td>
                    <td>
                        {
                            mealStatus== 0 || mealStatus==1 ? <li text-danger>Disable</li>:
                            mealStatus == 2 ? <button type="submit" className="btn btn-success" onClick={submit}>ON</button> : <button type="submit" className="btn btn-danger" onClick={submit}>OFF</button>
                        }
                    </td>
                </tr>
            </table>
             </div>
            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="card-header gradiant text-light text-center">Meal Activity</h3>
                <table className="table table-hover " id="tableLevel-2">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5">Date</th>
                            <th className="align-middle text-center text-light h5" >Mess status</th>
                            <th className="align-middle text-center text-light h5" >Moring Charge</th>
                            <th className="align-middle text-center text-light h5" >Night Charge</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                   { user.activity.map((rec , i)=>(
                        <tr className="table-warning" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle">{rec.date}</td>
                            <td className="text-center align-middle">{rec.mess_status}</td>
                            <td className="text-center align-middle">{rec.morning_charge}</td>
                            <td className="text-center align-middle">{rec.night_charge}</td>
                           
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>

                </table>
            </div>
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
