import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import '../css/global.css';
import { signout, isAuthenticated } from "../auth";


const Menu = ({ history }) => (
    <div className="row ">  
    {!isAuthenticated() && (
        <Fragment>
            <div className="col text-end">
            <Link to="/auth/signup" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Sign Up</button></Link>
            </div>

            <div className="col text-left">
            <Link to="/auth/signin" ><button className="btn btn-outline-light btn-lg px-4" type="submit" >Sing In</button></Link>
            </div>
        </Fragment>
    )}

    {isAuthenticated() && (
        <div className="col">
        <span className="col" onClick={() =>signout(() => {history.push("/");})}><button className="btn btn-outline-light btn-lg px-4" type="submit" >SignOut</button></span>
        </div>
    )}        
    </div>
);

export default withRouter(Menu);
