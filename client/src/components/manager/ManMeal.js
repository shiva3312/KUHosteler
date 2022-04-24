// show data chart format 
// meal List of current day mor/ nig will be shown
// set meal bound time here ..

import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  getAllemployees , updateMembershipStatus ,fchangeMealStatus} from "./ManApi";


const TodayMealList = () => {
    const {  user,token } = isAuthenticated();
   
    return (
        <>
        <ManLayout
            title="Today Meal List"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div className="row">                            
           
            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default TodayMealList;
