// List all the student and give require link and control
//  1. force off/on the meal 
//  2. membership activation/deactivation
//  3. setting hostel Id
//  4. view profile of the student / Records
//  5. remove form hostel 
//  6. make passout border
//  7. 

import React, { useState } from "react";
import { getAllstudents  } from "./ManApi";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [student , setstudents] = useState([]);
    const [error, setError] = useState(false);
    const {  user , token } = isAuthenticated();   
    const loadStudents = () => {
        getAllstudents(user._id , token).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                console.log(data);
            }
        });
    };

   
    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{user.fname} {user.lname}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">
                        {user.profileType === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <ManLayout
            title="All Students"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div className="row">                
               {loadStudents()}
            </div>
        </ManLayout>
    );
};

export default AdminDashboard;
