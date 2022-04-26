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
           
            <div  className=" pt-5 card mt-3 pb-5 th ">
               <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">BASIC DETAILS</h4>
                    <ul className=" con shadow">
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Profile Type &ensp;:&ensp;
                        {user.profileType === 1 ? "Manager" : user.profileType === 0 ? "Student" :"Employee"}
                    </li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Date of Birth &nbsp;:&ensp;{user.dob}</li>                   
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Email Account&nbsp;:&ensp;{user.email}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Membership &ensp;:&ensp;{user.membership===1? "Activated" : "Deactivated"}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Hostel Name &nbsp;:&ensp;{user.hostelName.toUpperCase()}</li>
                    {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Room Number&nbsp;:&ensp;{user.roomNo}</li>                  */}
                     {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Bio &nbsp;:&ensp;{user.bio}</li>                   */}
                   
                </ul>
            </div>
            
        );
    };
    const eduInfo = () => {
        return (
           
            <div  className=" pt-5 mt-3 card pb-5 th ">
               <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">EDUCATIONAL DETAILS</h4>
                    <ul className=" con shadow">
                    
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Course &emsp;:&ensp;{user.course}</li>
                   
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Subjetct &ensp;:&ensp;{user.subject}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Semester&nbsp;:&ensp;{user.semester}</li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Session &emsp; &emsp;:&ensp;{user.session}</li>
                    {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Room Number&nbsp;:&ensp;{user.roomNo}</li>                  */}
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">College &emsp;:&ensp;{user.university}</li>                         
                    {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Bio &nbsp;:&ensp;{user.bio}</li>                   */}
                   
                </ul>
            </div>
          
        );
    };


    const constactInfo = () => {
        return (
            <div className="pt-5 mt-3 card pb-5 th">
            <h4 className="shadow card-head pt-2 pb-2 gradiant text-light text-center">CONTACT DETAILS</h4>
           <ul className="con shadow">
           <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Home Address &emsp;:&ensp;{user.address}</li>
                    
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Phone Number &emsp;:&ensp; {user.selfPhNo} </li>
                    <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Guardian Phone &ensp;:&ensp;{user.gPhNo}</li> 
                   {/* <li className="dt ps-3 list-group text-white p-2 shadow ms-5 me-5 m-3">Profile Type &emsp;&emsp;:&ensp;
                        {user.profileType === 1 ? "Admin" : "Registered User"}2
                    </li> */}
                </ul>
            </div>
        );
    };


    return (
        <>
        <StuLayout history={history} >
            {/* show your content in this div */}
            <div className="row m-3" >                
            {/* <div className="wrapper"> */}
             <div className="col-md-6 "> {basicInfo()}
             {/* <div  className="col mb-0">{userInfo()}</div> */}
             </div>   
             {/* <div class="middle"></div>     */}
             {/* if i remove middle then it looks like parallel */}       
             <div className="col-md-6 "> {eduInfo()}
              {/* <div  className="col mb-0">{showPieChart()}</div> */}
            </div>
            </div>
            <div className="row m-3" >                
               <div  className="col md-6">{constactInfo()}</div>
           </div>
           
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default AdminDashboard;
