import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import {  getAllstudents , updateMembershipStatus ,fchangeMealStatus ,addFineOrDepositMoney} from "./ManApi";


const StudentListInfo = () => {
    const {  user,token } = isAuthenticated();
    const [ students , setStudents] = useState([]); 
    const [ values , setValues ] = useState({
        fine:0,
        deposit:0,
        reason:'',
        error:false,
        success: false
    });
    const [userId , setUserId]  = useState('')
    const [toggler , setToggler] = useState(false);
    const [action , setAction] = useState(false)    
    const [reRender , setReRender] = useState(false);

    const {
        fine,
        deposit,
        reason,
        error,
        success,
    }= values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = (e) => {
        e.preventDefault(); 
        setValues({ ...values, error: false });        
        addFineOrDepositMoney(user._id , token ,{fine , reason, deposit , userId}).then((data) => {       
            if (data.error) {
                setValues({ ...values, error: data.error, success: false , error:true });
            } else {
               setValues({
                    fine:0,
                    deposit:0,
                    reason:'',
                    error: '',
                    success: true,
                 });
               
            }
        });

        setToggler(!toggler);
    };
    
    const chargeForm = () => (
        
        <form > 
        <section className=" gradient">  
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="deposit">deposit</label>
              <input type="Number" className="form-control" name="deposit" required="" onChange={handleChange('deposit')} value={deposit} />        
            </div>
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="fine">fine</label>
              <input type="Number" className="form-control" name="fine" required="" onChange={handleChange('fine')} value={fine} />        
            </div>
            <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="reason">reason</label>
              <input type="text" className="form-control" name="reason" required="" onChange={handleChange('reason')} value={reason} />        
            </div>      
           <div className="row">           
                <div className="col">
                  <button className="btn btn-outline-light btn-lg px-4" type="submit" onClick={clickSubmit} >Update</button>
                </div>
            </div>      
        </section>
        </form>
    ); 

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
    },[reRender,action , toggler])

    const showError = () => (
        <>
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            Not saved  {error}
        </div>
       
        </>
    );

    const showSuccess = () => (
        <>
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Charge updated Successfully
        </div>
        </>
    );
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
                            <td className="text-center  text-dark align-middle" >Border</td>:
                            <td className="text-center  text-dark align-middle">Ex Border</td>
                            }
                            {student.messStatus > 1 ?
                                <td className="text-center  text-dark align-middle">ON</td>:
                                <td className="text-center  text-dark align-middle">OFF</td>
                            }
                            
                            <td  className="text-center"> <button type="button" className="btn btn-success" data-toggle="primary"  onClick={(e)=>{e.preventDefault(); setAction(!action);}} >Take Action (drop down)</button></td>
                   
                       
                            {/* All action will be shown here  */}                            
                        </tr>
                        <tr >                     
                            <tr className="bg-dark">
                                <th className="align-middle text-center text-light h5 p-3">Membership</th>
                                <th className="align-middle text-center text-light h5" >Fine</th>
                                <th className="align-middle text-center text-light h5" >Meal</th>
                                <th className="align-middle text-center text-light h5" >Payment</th>
                                <th className="align-middle text-center text-light h5" >View profile</th>                            
                            </tr>
                        
                            <tr className="table-warning" key={i}>                       
                            {
                                student.membership ===2 ?                                
                                <td className="text-center" > <button type="submit" className="btn btn-success "  onClick={()=>toggleMembership(student._id , 3)}>Border</button></td>:
                                <td className="text-center"> <button type="submit" className="btn btn-danger "  onClick={()=>toggleMembership(student._id , 2)}>Ex Border</button></td>
                            }                                        
                                <td className="text-center text-dark align-middle"><button type="submit" className="btn btn-success  " 
                                onClick={()=>{setUserId(student._id)}}>Add Fine</button></td>

                            {
                                student.messStatus > 1 ?
                                <td className="text-center"> <button type="submit" className="btn btn-danger  " 
                                onClick={()=>toggleMeal(student._id , 0)}>Turn OFF</button></td>:
                                <td className="text-center"> <button type="submit" className="btn btn-success  " 
                                onClick={()=>toggleMeal(student._id ,2 )}>Turn ON</button></td>
                            }                                        
                                <td className="text-center text-dark align-middle"><button type="submit" className="btn btn-success  " 
                                onClick={()=>{setUserId(student._id)}} >Pay</button></td>
                                <td className="text-center text-dark align-middle"> <button type="submit" className="btn btn-success  " 
                                onClick={()=>toggleMeal(student._id )}>View ( drop Down )</button></td>
                            </tr>
                        </tr>
                        </>  
                        
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

            <div > 
            {showError()}
            {showSuccess()}  
            {chargeForm()}
            {studentList()} 

            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default StudentListInfo;
