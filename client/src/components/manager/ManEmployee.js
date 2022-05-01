import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  getAllemployees , updateMembershipStatus ,fchangeMealStatus} from "./ManApi";


const EmployeeListInfo = () => {
    const {  user,token } = isAuthenticated();
    const [ employees , setEmployees] = useState([]);
    
    const [reRender , setReRender] = useState(false);

    const loadUsers=()=>{
        getAllemployees(user._id, token).then((data)=>{ setEmployees(data.users); });
    }

    const toggleMembership = (empId , status ) =>{
        updateMembershipStatus(user._id, token , {memId: empId , status:status} ).then((data)=>{
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.info);
            }
        })
        setReRender(!reRender);
    }

    const viewDetails = (stuId ) =>{    
       return (
        <>
        </>
        );
    }

    useEffect(()=>{   
        loadUsers();
    },[reRender])

 
    const emploeyeeList = () => {     
     
        return (
            <>
            <h1 className="m-4">Employee Request List</h1>
            <div className="shadow tbl-header">
               <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
                    <thead>
                        <tr >
                            <th >SL</th>
                            <th >Picture</th>
                            <th >Name</th>
                            <th  >Membership</th>   
                            <th >Action</th>                            
                        </tr>
                    </thead>
                    </table>
                    </div>
                    <div className="shadow tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
               
                    <tbody>
                   {  employees.map((employee , i)=>(                      
                        <tr key={i}>                       
                            <td >{i+1}</td>
                            <td> </td>
                            <td >{employee.fname} {employee.lname}</td>
                            
                            {employee.membership ===2 ?                                
                            <td  > <button type="submit" className="btn btn-success "  onClick={()=>toggleMembership(employee._id , 3)}>Present</button></td>:
                            <td > <button type="submit" className="btn btn-danger "  onClick={()=>toggleMembership(employee._id , 2)}>Left</button></td>
                            }
                            
                            <td > <button type="button" className="btn btn-primary" data-toggle="modal"  >View Details</button></td>                       
                            
                        </tr>
                        ))}
                    </tbody>
                  
                </table>                
            </div>
            </>
        );
    };


 

    return (
        <>
        <ManLayout
            title="Employees"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div className="row">                            
              {emploeyeeList()} 
            </div>           
        </ManLayout>
        {/* <Footer /> */}
        </>
    );
};

export default EmployeeListInfo;
