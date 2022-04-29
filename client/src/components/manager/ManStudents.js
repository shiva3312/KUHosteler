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
        <>
            <h1 className="m-4">Student Request List</h1>
            <div className="shadow tbl-header">
               <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
                    <thead>
                        <tr >
                            <th >SL</th>
                            <th >Picture</th>
                            <th >Name</th>
                            <th >Room No.</th>
                            <th >Membership</th> 
                            <th >Meal</th>   
                            <th  >Action</th>                            
                        </tr>
                    </thead>
                    </table>
                    </div>
                    <div className="shadow tbl-content">
               <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
                    <tbody>
                   {  students.map((student , i)=>(                      
                        <tr key={i}>                       
                            <td>{i+1}</td>
                            <td> </td>
                            <td >{student.fname} {student.lname}</td>
                            <td >{student.roomNo}</td>
                            
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
                    
                </table>                
            </div>
            </>
        );
    };


 

    return (
        <>
        <ManLayout
            title="Student"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div>                            
              {studentList()} 
            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default StudentListInfo;
