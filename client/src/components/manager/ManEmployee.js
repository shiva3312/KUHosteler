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
            <div className="card mb-5">
                <h3 className="card-header text-center">Student Request List</h3>
               
                <table className="table table-hover " id="tableLevel-2">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5" >Picture</th>
                            <th className="align-middle text-center text-light h5" >Name</th>
                            <th className="align-middle text-center text-light h5" >Membership</th>   
                            <th className="align-middle text-center text-light h5" >Action</th>                            
                        </tr>
                    </thead>
                    <tbody>
                   {  employees.map((employee , i)=>(                      
                        <tr className="table-warning" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle"> </td>
                            <td className="text-center align-middle">{employee.fname} {employee.lname}</td>
                            
                            {employee.membership ===2 ?                                
                            <td className="text-center" > <button type="submit" className="btn btn-success "  onClick={()=>toggleMembership(employee._id , 3)}>Present</button></td>:
                            <td className="text-center"> <button type="submit" className="btn btn-danger "  onClick={()=>toggleMembership(employee._id , 2)}>Left</button></td>
                            }
                            
                            <td className="text-center"> <button type="button" className="btn btn-primary" data-toggle="modal"  >View Details</button></td>                       
                            
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>                
            </div>
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
        <Footer />
        </>
    );
};

export default EmployeeListInfo;
