import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"


const StuProfile = ({history}) => {  
    
    const {  user } = isAuthenticated();


    const managerInfo = () => {
        return (
            <div  className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{user.fname} {user.lname}</li>
                    <li className="list-group-item">{user.email}</li>
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
                <div  className="col mb-0">{managerInfo()}</div>
            </div>
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default StuProfile;
