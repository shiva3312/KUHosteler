import React, { useEffect, useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import { read } from "./stuApi";



const MealAcitvity = ({history}) => {  
    var totalDue =0;
    const {user, token} = isAuthenticated();
    var [stuData , setStuData] = useState(user)
    
    useEffect(()=>{
        read( user._id, token).then((data)=>{
            setStuData(data )
          })
        },[]);

    stuData.paymentRecord.forEach(rec => {
        totalDue += rec.totalFine + rec.auditAmount - rec.paid;
    });

    user.activity.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });


    const mealAcitvity = () => {     
        return (
            <>
        
            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="card-header gradiant text-dark text-center">Payment Records</h3>
                <table className="table table-hover " id="tableLevel-2">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5">Date</th>
                            <th className="align-middle text-center text-light h5" >Audit Amount</th>
                            <th className="align-middle text-center text-light h5" >Paid</th>
                            <th className="align-middle text-center text-light h5" >Fine</th>
                            <th className="align-middle text-center text-light h5" >Due Amount</th>
                           
                        </tr>
                    </thead>
                    <tbody>
               
                   { stuData.paymentRecord.map((rec , i)=>(
                       
                        <tr className="table-warning" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle">{rec.auditDate.slice(0,15)}</td>
                            <td className="text-center align-middle">{rec.auditAmount}</td>
                            <td className="text-center align-middle">{rec.paid}</td>
                            <td className="text-center align-middle">{rec.totalFine}</td>
                            <td className="text-center align-middle">{rec.totalFine + rec.auditAmount - rec.paid}</td>
                           
                        </tr>
                        
                        ))
                        
                        }
                    </tbody>
                    <tfoot class="table-borderless ">
                        <tr >
                            <th colspan="5" class="table-success text-center text-middle">Total Due Amount</th>
                            <th class="table-success text-center text-middle">{totalDue} Rs.</th>
                        </tr>
                    </tfoot>

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
