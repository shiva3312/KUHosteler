import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"


const AdminDashboard = ({history}) => {  
    
    const {  user } = isAuthenticated();
    const basicInfo = () => {
        return (
            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="card-header gradiant text-dark text-center">Basic Info</h3>
                <ul className="list-group">
                
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.membership===1? "Activated" : "Deactivated"}</li>
                    <li className="list-group-item">{user.hostelName}</li>
                    <li className="list-group-item">{user.roomNo}</li>                 
                    <li className="list-group-item">{user.hostelId}</li>                         
                    <li className="list-group-item">{user.bio}</li>                  
                    <li className="list-group-item">{user.dob}</li>
                    <li className="list-group-item">{user.address}</li>
                    <li className="list-group-item">
                        {user.profileType === 1 ? "Admin" : "Registered User"}2
                    </li>
                </ul>
            </div>
        );
    };


    const constactInfo = () => {
        return (
            <div  className="card mb-5 shadow-sm m-3">
                <h3 className="card-header gradiant text-dark text-center">Contact Info</h3>
                <ul className="list-group">
                    <li className="list-group-item">{user.selfPhNo} </li>
                    <li className="list-group-item">{user.gPhNo}</li> 
                    <li className="list-group-item">{user.guardian}</li>
                    <li className="list-group-item">
                        {user.profileType === 1 ? "Admin" : "Registered User"}2
                    </li>
                </ul>
            </div>
        );
    };


    return (
        <>
        <StuLayout history={history} >
            {/* show your content in this div */}
            <div className="row " >           
                <div  className="col mb-0">{basicInfo()}</div>
            </div>
            <div className="row " >                
               <div  className="col mb-0">{constactInfo()}</div>
           </div>
           
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default AdminDashboard;
