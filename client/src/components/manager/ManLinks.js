// All links related to manager will be handeled here 

import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth";

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">            
            <Link to="/manager/dashboard" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Dashboard</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/allstudents" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Students</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/allemployee" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Employee</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/charges" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Charges</button></Link>           
            </li>

            <li className="nav-item">            
            <Link to="/manager/preparedMealList" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Meal List</button></Link>           
            </li>

            {isAuthenticated() && (
            <div className="col">
            <span className="col" onClick={() =>signout(() => {history.push("/");})}><button className="btn btn-outline-light btn-lg px-4" type="submit" >SignOut</button></span>
            </div>
    )} 
            

        </ul>
    </div>
);

export default withRouter(Menu);
