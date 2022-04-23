import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  getAllstudents , updateMembershipStatus ,fchangeMealStatus} from "./ManApi";


const StudentListInfo = () => {
    const {  user,token } = isAuthenticated();
    const [ students , setStudents] = useState([]); 
    
    const [reRender , setReRender] = useState(false);

    const loadUsers=()=>{
        getAllstudents(user._id, token).then((data)=>{ setStudents(data.students);});        
    }

    const toggleMembership = (stuId , status ) =>{
        updateMembershipStatus(user._id, token , {memId: stuId , status:status} ).then((data)=>{
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.info);
            }
        })
        setReRender(!reRender);
    }

    const toggleMeal =(stuId , status)=>{
        fchangeMealStatus(user._id, token, {stuId: stuId, status:status}).then((data)=>{
            if(data.error) 
            console.log(data.error);
            else console.log(data.info);
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

 
    const studentList = () => {     
     
        return (
            <div className="card mb-5">
                <h3 className="card-header text-center">Student Request List</h3>
               
                <table className="table table-hover " id="tableLevel-2">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th className="align-middle text-center text-light h5" >Picture</th>
                            <th className="align-middle text-center text-light h5" >Name</th>
                            <th className="align-middle text-center text-light h5" >Room No.</th>
                            <th className="align-middle text-center text-light h5" >Membership</th> 
                            <th className="align-middle text-center text-light h5" >Meal</th>   
                            <th className="align-middle text-center text-light h5" colSpan={3} >Action</th>                            
                        </tr>
                    </thead>
                    <tbody>
                   {  students.map((student , i)=>(                      
                        <tr className="table-warning" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>
                            <td className="text-center align-middle"> </td>
                            <td className="text-center align-middle">{student.fname} {student.lname}</td>
                            <td className="text-center align-middle">{student.roomNo}</td>
                            
                            {student.membership ===2 ?                                
                            <td className="text-center" > <button type="submit" className="btn btn-success "  onClick={()=>toggleMembership(student._id , 3)}>Border</button></td>:
                            <td className="text-center"> <button type="submit" className="btn btn-danger "  onClick={()=>toggleMembership(student._id , 2)}>Ex Border</button></td>
                            }
                            {student.messStatus > 1 ?
                                <td className="text-center"> <button type="submit" className="btn btn-danger  " onClick={()=>toggleMeal(student._id , 0)}>Turn OFF</button></td>:
                                <td className="text-center"> <button type="submit" className="btn btn-success  " onClick={()=>toggleMeal(student._id ,2 )}>Turn ON</button></td>
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
            title="Dashboard"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div className="row">                            
              {studentList()} 
            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default StudentListInfo;
