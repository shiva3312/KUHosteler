import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"


const AdminDashboard = () => {
   
    return (
        <>
        <StuLayout >
            {/* show your content in this div */}
            <div className="row">                
                <div className="col-9">{}</div>
            </div>

           
        </StuLayout>
        <Footer />
        </>
       
    );
};

export default AdminDashboard;
