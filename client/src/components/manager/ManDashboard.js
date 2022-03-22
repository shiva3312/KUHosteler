import React from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"


const AdminDashboard = () => {
    const {  user } = isAuthenticated();


    const managerInfo = () => {
        return (
            <div className="card mb-5">
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
        <ManLayout
            title="Dashboard"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div className="row">                
                <div className="col-9">{managerInfo()}</div>
            </div>

            <Footer />
        </ManLayout>

       
    );
};

export default AdminDashboard;
