// manger Layout ..
import React from "react";
import {Link} from "react-router-dom"
import { signout, isAuthenticated } from "../../auth/index.js";
import '../../css/global.css'

import "../../css/student.css";

const StuLayout = ({
    className,
    children,
   history
}) => {

 const {user} = isAuthenticated();


return(

    <>   

    <div className="gradient">
    <nav className="navbar navbar-light ">
        <div className="container-fluid ">
            <h3 className="ps-5  text-white">KuHosteler</h3>
            <div className="d-flex justify-content-end"></div>
            {isAuthenticated() && (
                <Link className="nav-item ps-3 px-3 pt-1"  onClick={() => signout(() => { history.push("/auth/signin"); }) } >
                <button className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6" type="submit">Signout</button>
                 </Link>
             )}          
        </div>
    </nav>
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-5 pt-4 pb-0 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile ps-3 mr-5 mt-5">
                        <img className="img mb-2 img-thumbnail" src={user.avatar} alt="..." width="190" /></div>
                </div>
            </div>
            <div className=" bg-white pt-1 d-flex ">
                <div className="media-body mb-1 text-dark">
                    <h4 className="media mt-0 mb-0">{user.fname}  {user.lname}</h4>
                    <p className="small mb-4">{user.department}</p>
                </div>
            </div>
            <nav className="nav justify-content-center p-2 navbar-light  fs-6">
               
                  
                                <Link className="navbar-brand fs-6 pe-1 ps-1 text-secondary" to="/student/home"><span className="text1">Home</span>
                                 <span className="icon">
                                <i  className=" fa fa-home fa-md pe-1 ps-1  text-secondary"></i>
                                  </span></Link>
                        
                               <Link className="navbar-brand fs-6 pe-1 ps-1 text-secondary" to="/student/basicInfo">  
                               <span className="text1 ">My Profile</span>
                              <span className="icon ">
                                <i  className=" fa fa-user-circle fa-md pe-1 ps-1  text-secondary"></i>
                            </span></Link>
                         
                                <Link className="navbar-brand fs-6 pe-1 ps-1 text-secondary" to="/student/meal">
                                    <span className="text1">Meal</span>
                                    <span className="icon">
                                 <i  className=" fa fa-glass fa-md pe-1 ps-1  text-secondary"></i>
                             </span></Link>
                         
                               <Link className="navbar-brand fs-6 pe-1 ps-1 text-secondary" to="/student/guest/"><span className="text1">Add Guest</span>
                                <span className="icon">
                                 <i  className=" fa fa-user-plus fa-md pe-1 ps-1  text-secondary"></i>
                                </span></Link>
                           
                              <Link className="navbar-brand fs-6 pe-1 ps-1 text-secondary" to="/student/records"><span className="text1">Payment</span>
                              <span className="icon">
                                <i  className=" fa fa-money fa-md pe-1 ps-1  text-secondary"></i>
                            </span></Link>
                           {/* <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Settings</Link>
                            </li>
                            <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Blog</Link>
                            </li> */}
                      
                                     
                
            </nav>
        </div>
    </div>
</div>


    <div>       
        <div className={className}>{children}</div>
    </div>
    

    </>
)};

export default StuLayout;
