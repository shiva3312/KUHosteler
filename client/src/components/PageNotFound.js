import React from "react";
import { Link } from "react-router-dom";
const PageNotFound =() => (
  
<div className="container">
    <div className="row mt-5">
        <div className="col-md-12 mt-5">
            <div className="error-template text-center mt-5">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details text-center">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions text-center">
                    <Link to="/" className=" btn btn-outline-dark btn-sm mt-3">
                        <span className="glyphicon glyphicon-home"></span>
                        Take Me Home 
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

);

export default PageNotFound;
