// show data chart format 
// meal List of current day mor/ nig will be shown
// set meal bound time here ..

import React, {  useEffect, useState } from "react";
import EmpLayout from "./EmpLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import { getPreparedMealList } from "../employee/EmpApi"; 
var d = new Date();
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
// current_date is of 24h system .....
var current_date = new Date(utc + (3600000*+5.5));
// current_date12 is 12h system
var current_date12 =  current_date.toLocaleString();
const isMorning = current_date.getHours() >=6 && current_date.getHours()<17;



const EmpTodayMealList = () => {
    const {  user,token } = isAuthenticated();
    const [mealList , setMealList]  = useState({
        borderMealList:[],
        guestMealList :[]
    })

    useEffect(()=>{
        getPreparedMealList(user._id , token).then((data)=>{
            if(data.error){
                console.log(data.error);
            }
            else {
                setMealList({
                    borderMealList:data.borderMealList,
                    guestMealList:data.guestMealList
                });
            }
        });
    },[]);

    const countMeal=()=>{
        const officalGuestCount = 0;
        mealList.guestMealList.forEach((guest)=>{
            if(guest.guestType == 1) 
            officalGuestCount++;
        })
        const normalGuestCount = mealList.guestMealList.length - officalGuestCount;
        
        return (
            <>
             <div className="mt-5 mb-5">
                        
                <table className="table table-hover ">
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
                </table>                
            </div>            
            </>
        )
        
    }

    const getBorderMealList =()=>{ 
        
        return (
            <>
             <div className="mt-5 mb-5">
                <h3 className="card-header text-center">Border Meal List</h3>               
                <table className="table table-hover ">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5" >Picture</th>
                            <th className="align-middle text-center text-light h5" >Name</th>
                            <th className="align-middle text-center text-light h5" >Department</th>    
                            <th className="align-middle text-center text-light h5" >Room No.</th>                             
                        </tr>
                    </thead>
                    <tbody>
                   {  mealList.borderMealList.map((student , i)=>(                      
                        <tr className="" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle"> <img className="img mb-2 img-thumbnail" src={student.avatar} alt="..." width="75" /></td>
                            <td className="text-center align-middle">{student.fname} {student.lname}</td>
                            <td className="text-center align-middle">{student.department}</td>   
                            <td className="text-center align-middle">{student.roomNo}</td>                               
                           
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>                
            </div>            
            </>
        )
    }

    const getGuestMealList =()=>{ 
    // if( mealList.guestMealList.length===0) return <></>
        return (
            
            <>
             <div className=" mb-5" >
                <h3 className="card-header text-center">Guest Meal List</h3>               
                <table className="table table-hover ">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5" >Name</th>   
                            <th className="align-middle text-center text-light h5" > Guest Holder</th> 
                            <th className="align-middle text-center text-light h5" > Guest Type</th>                            
                        </tr>
                    </thead>
                    <tbody>
                   {  mealList.guestMealList.map((guest , i)=>(                      
                        <tr className="" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle">{guest.name} </td>
                            <td className="text-center align-middle">{guest.guestHolder}</td>
                            {
                                guest.guestType==0 ? <td className="text-center align-middle">Normal</td> :
                                <td className="text-center align-middle">Offical</td>
                            }                                                  
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>                
            </div>            
            </>
        )
    }

   
    return (
        <>
        <EmpLayout >
         
                {countMeal()}                      
                {getBorderMealList()}
                {getGuestMealList()}
                
        </EmpLayout>
        {/* <Footer /> */}
        </>
    );
};

export default EmpTodayMealList;
