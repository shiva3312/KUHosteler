import React from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import "../../css/student.css";
import '../../css/global.css';

const AdminDashboard = ({history}) => {  
    
    const {  user } = isAuthenticated();
    const basicInfo = () => {
        return (
            <div  className="gradiant pt-5 card pb-5  ">
               <h4 className="shadow card-head pt-2 pb-2 th text-light text-center">BASIC INFO</h4>
                    <ul className=" con shadow">
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.email}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.membership===1? "Activated" : "Deactivated"}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.hostelName}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.roomNo}</li>                 
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.hostelId}</li>                         
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.bio}</li>                  
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.dob}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.address}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">
                        {user.profileType === 1 ? "Admin" : "Registered User"}2
                    </li>
                </ul>
            </div>
        );
    };


    const constactInfo = () => {
        return (
            <div className="pt-5 card pb-5 gradiant">
            <h4 className="shadow card-head pt-2 pb-2 th text-light text-center">CONTACT INFO</h4>
           <ul className="con shadow">
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.selfPhNo} </li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.gPhNo}</li> 
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">{user.guardian}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">
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
