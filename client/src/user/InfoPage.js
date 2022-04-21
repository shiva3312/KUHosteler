import React from "react";
import { isAuthenticated } from "../auth";
import { useState, useEffect } from "react";
import { read , resendreq } from "../components/student/stuApi";
import { Link } from "react-router-dom";


const InfoPage = () => {  
    
    const {  user , token } = isAuthenticated();

    const [stud, setStu ] = useState(user);
    const [membership , setmembership] = useState(user.membebership);

    const reSendReq = (e)=>{
        e.preventDefault();
        resendreq(stud._id , token).then((data)=>{
            if(data.error) console.log(data.error);
            else {
                console.log(data.info);
                setmembership(5);
            }
        });
       
    }

    useEffect(()=>{
        read(user._id , token).then((data)=>{
            setStu(data);
        })
    },[membership])
    
    const Info = () => {
     
        return (
        <>        
            { stud.membership ==0  ? 
            <div  className="card mb-5 shadow-sm m-3">
                <h3 className=" gradiant text-dark text-center">Your request has been sent now please wait </h3>     
                <p  className=" text-dark text-center" >within 24 hour your account will be activated</p>          
            </div> : 
            
            stud.membership == 4 ?  

            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="gradiant text-dark text-center">Your Request is Rejected by "{stud.hostelName.toUpperCase()}" hostel</h3>     
                <p  className="text-dark text-center" > Infom to you Manager </p>          
                <button className="btn btn-outline-dark btn-lg px-4 " type="submit" onClick={reSendReq} >Request Again</button>
            </div> : 

            stud.membership == 5 ?  

            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="gradiant text-dark text-center">Your Request has been send again to  "{stud.hostelName.toUpperCase()}" hostel</h3>     
                <p  className="text-dark text-center" > Wait for Response </p>   
                <Link to="/" ><button className="btn btn-outline-dark btn-lg px-4  " type="submit" >Back to Home</button></Link>       
                
            </div> : <div></div>
            } 
        </>        
        );
    };

    return (
        <>
            {Info()}
        </>       
    );
};

export default InfoPage;
