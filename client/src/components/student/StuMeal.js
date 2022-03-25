import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"


const AdminDashboard = ({history}) => {  
    
    const {  user } = isAuthenticated();


    const mealActivtiy = () => {
        return (
            <div>

                <td class="text-end text-success" colspan='2'>
                  
                </td>
              
                <td class="text-end text-danger" colspan='2'>
                  
                </td>
                
            </div>
            
        );
    };


    return (
        <>
        <StuLayout history={history} >
            {/* show your content in this div */}
            <div className="row " >                
                <div  className="col mb-0">{mealActivtiy()}</div>
            </div>
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default AdminDashboard;
