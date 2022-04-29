import React, { useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import { Line  } from "react-chartjs-2";
import { updateMembershipStatus,
         getAllstudents,
         getAllemployees,
         getAllReqList ,
         getAllGuest,
         updateGuestMealStatus,
        removeGuest
        } from "./ManApi";


const AdminDashboard = () => {
    const {  user,token } = isAuthenticated();
    const [ students , setStudents] = useState([]);
    const [ employees , setEmployees] = useState([]);
    const [stuReqList , setStuReqList] = useState([]);
    const [empReqList , setEmpReqList] = useState([]);
    const [allListedGuest , setAllListedGuest] = useState([]);
    const [allactivatedGuest , setAllactivatedGuest] =useState([]);
    const [countStuGuest , setcountStuGuest] = useState(0);
    const [rederOnchange , setrenderOnchange] = useState(false);
    const [auditinfo , setAuditInfo] = useState({
        charges:[],
        months:[],
        totalFine:[]
    });

    const AllReqList=()=>{
        getAllReqList(user._id, token).then((data)=>{
            setStuReqList(data.students);
            setEmpReqList(data.employees)
        })
    }

    const loadUsers=()=>{

        const charges = [];
        const months =[];
        const totalFine =[];
        user.paymentRecord.sort(function(a,b){
            return new Date(a.auditDate) - new Date(b.auditDate);
          });
        
        
      
        user.paymentRecord.forEach((rec)=>{
            charges.push(rec.auditAmount);
            months.push(rec.auditDate.slice(0,15));
            totalFine.push(rec.totalFine);
        })

        
        getAllstudents(user._id, token).then((data)=>{             
            let count = 0;
            data.students.forEach(stu => { count+= stu.active_guest_list.length; }); 
            setcountStuGuest(count);
            setStudents(data.students);             
        });        
        getAllemployees(user._id, token).then((data)=>{ setEmployees(data.users); });
        setAuditInfo({ charges:[...charges],  months:[...months], totalFine:[...totalFine]  });
        getAllGuest(user._id , token).then((data)=>{ setAllListedGuest(data.allListedGuest)  });
        getAllGuest(user._id , token).then((data)=>{ setAllactivatedGuest(data.allactivatedGuest) });
        
       
   
    }
    
    const clickSubmit = (memeberId , status ) =>{
         updateMembershipStatus(user._id, token , {memId: memeberId , status:status} ).then((data)=>{
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.info);
            }
        })
        setrenderOnchange(!rederOnchange);
    }

    const changeGeustMealStatus =(guestId , userId ,status)=>{
        updateGuestMealStatus(user._id, token , {guestId , userId , status} ).then((data)=>{
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.info);
            }
        })
        setrenderOnchange(!rederOnchange); 
    }

    const deleteGuest = (guestId , userId)=>{
        removeGuest(user._id, token , {guestId , userId} ).then((data)=>{
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.info);
            }
        })
        setrenderOnchange(!rederOnchange); 
    }

    const basicInfoCards =()=>{
        return (
            <div className="card mb-5">
                <div className=" text-white  mb-3" >    
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="card-body m-2 ">
                                <h5 className="card-title">Student</h5>
                                <p className="card-text ">{students.length}</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-12">
                            <div className="card-body m-2 ">
                                <h5 className="card-title">Employee</h5>
                                <p className="card-text ">{employees.length}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <div className="card-body m-2 ">
                                <h5 className="card-title">Official Guest</h5>
                                <p className="card-text ">{user.active_guest_list.length}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <div className="card-body m-2 ">
                                <h5 className="card-title">Student's Guest</h5>
                                <p className="card-text ">{countStuGuest}</p>
                            </div>
                        </div>
                       
                    </div>              
                        

                       


                </div>
                
            </div>
        )
    }

    const studentReqList = () => {     
        if(stuReqList.length===0) return <></>
        return (
            <>
            <h1 className="m-4">Student Request List</h1>
            <div className="shadow">

 <div className="shadow tbl-header ">
 
                <table cellPadding="0" cellSpacing="0" border="0" >
                    <thead>
                        <tr >
                            <th>SL</th>
                            <th >Requested Date</th>
                            <th  >Picture</th>
                            <th>Name</th>
                            <th  >Department</th>    
                            <th >Mob No.</th> 
                            <th colSpan={2} >Action</th>                            
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
 {  stuReqList.map((student , i)=>(                      
                        <tr  key={i}>                       
                            <td >{i+1}</td>
                            <td >{student.createdAt.slice(0,10)}</td>
                            <td > <img className="img mb-2 img-thumbnail" src={student.avatar} alt="..." width="75" /></td>
                            <td >{student.fname} {student.lname}</td>
                            <td >{student.department}</td>   
                            <td >{student.selfPhNo}</td>                               
                            <td> <button type="submit" className="btn btn-success "  onClick={()=>clickSubmit(student._id , 2)}>Accept</button></td>
                            <td> <button type="submit" className="btn btn-primary  " onClick={()=>clickSubmit(student._id , 1)}>Guest</button></td>
                            {/* <td> <button type="submit" className="btn btn-danger  " onClick={()=>clickSubmit(student._id , 4)}>Reject</button></td>                        */}
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>                
            </div>
            </div>
            </>
        );
    };

    const staffReqList = () => {
      
        if(empReqList.length===0) return <></>
        return (
            <>
            <h1>Employee Request List</h1>
            <div className="shadow tbl-header"> 
                 <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
                    <thead>
                        <tr >
                            <th >SL</th>
                            <th >Requested Date</th>
                            <th  >Picture</th>
                            <th>Name</th>
                            <th >Mob No.</th> 
                            <th colSpan={2} >Action</th>                            
                        </tr>
                    </thead>
                    </table>
                    </div>
                    <div>
                    <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
                    
                      
                    <tbody>
                   {  empReqList.map((emp , i)=>(                      
                        <tr  key={i}>                       
                            <td>{i+1}</td>
                            <td >{emp.createdAt.slice(0,10)}</td>
                            <td> </td>
                            <td >{emp.fname} {emp.lname}</td>  
                            <td>{emp.selfPhNo}</td>                               
                            <td> <button type="submit" className="btn btn-success  " onClick={()=>clickSubmit(emp._id , 2)} >Accept</button></td>
                            <td> <button type="submit" className="btn btn-danger  " onClick={()=>clickSubmit(emp._id , 4)}>Reject</button></td>                       
                        </tr>
                        ))}
                    </tbody>
                   
                </table>                
            </div>
            </>
        );
    };

    const showPieChart =()=>{

        const data = {
            labels: [...auditinfo.months],
                datasets: [{
                    label: "Meal Charges",
                    data: [...auditinfo.charges],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                },
                
                    {
                        label: "Total Fine",
                        data: [...auditinfo.totalFine],
                        fill: false,
                        backgroundColor:"#742774",
                        borderColor: "#742774"
                      }
                
                
            ],
            options: {
                scales: {
                    y: {
                        stacked: false
                    }
                }
            }
        };

        return <>
          <div className="card mb-5">
          <Line data={data} />
          </div>
        </>     
       
      }

    const listedGuest=()=>{
        
        allListedGuest.sort(function(a,b){
            return new Date(a.mealDate) - new Date(b.mealDate);
          });
       
        if(allListedGuest.length===0) return <></>
        return (
            <>
            <h1 className="m-4">Guest Meal Request List</h1>
            <div className="shadow">
            <div className="shadow tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                 <tr>
                            <th >SL</th>
                            <th  >Guest Name</th>
                            <th  >Guest Type</th>
                            <th  >Guest Holder</th>
                            <th  >Meal Date</th>    
                            <th  >Mob No.</th>
                            <th  >Room No</th> 
                            <th  colSpan={2} >Action</th>                            
                        </tr>
                    </thead>
                    </table>
                    </div>
                    <div className="shadow tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                         <tbody>
                         { allListedGuest.map((guest , i)=>(                      
                        <tr  key={i}>                       
                            <td >{i+1}</td>                           
                            <td >{guest.name}</td>
                            {
                                guest.guestType ==0 ? <td >Normal</td> :
                                <td >Official</td>
                            }
                            
                            <td >{guest.holderName}</td>
                            <td >{guest.mealDate.slice(0,15)}</td>   
                            <td >{guest.holderMobNo}</td> 
                            <td >{guest.holderRoomNo}</td>                              
                            <td> <button type="submit" className="btn btn-success "  onClick={()=>changeGeustMealStatus(guest._id, guest.holderId ,1)}>Accept</button></td>
                            <td> <button type="submit" className="btn btn-danger  " onClick={()=>deleteGuest(guest._id,guest.holderId )}>Remove</button></td>                       
                        </tr>
                        ))}
                    </tbody>
                    
                </table>                
            </div>
            </div>
            </>
        );
    }


    const activatedGuest=()=>{
       
        allactivatedGuest.sort(function(a,b){
            return new Date(a.mealDate) - new Date(b.mealDate);
          });
        if(allactivatedGuest.length===0) return <></>
        return (
            <div className=" mb-5">
                <h3 className="card-header text-center">Activated Meal Guest List</h3>
               
                <table className="table table-hover ">
                    <thead>
                        <tr className="bg-dark">
                            <th className="align-middle text-center text-light h5 p-3">SL</th>
                            <th  >Guest Name</th>
                            <th  >Guest Type</th>
                            <th  >Guest Holder</th>
                            <th  >Department</th>    
                            <th  >Mob No.</th>
                            <th  >Room No</th> 
                            <th   >Action</th>                            
                        </tr>
                    </thead>
                    <tbody>
                   { allactivatedGuest.map((guest , i)=>(                      
                        <tr className="" key={i}>                       
                            <td className="text-center align-middle ">{i+1}</td>                           
                            <td >{guest.name}</td>
                            {
                                guest.guestType ==0 ? <td >Normal</td> :
                                <td >Official</td>
                            }
                            
                            <td >{guest.holderName}</td>
                            <td >{guest.mealDate.slice(0,15)}</td>   
                            <td >{guest.holderMobNo}</td> 
                            <td >{guest.holderRoomNo}</td>                              
                            {/* <td> <button type="submit" className="btn btn-success "  onClick={()=>changeGeustMealStatus(guest._id, guest.holderId ,1)}>Accept</button></td> */}
                            <td> <button type="submit" className="btn btn-danger  " onClick={()=>deleteGuest(guest._id,guest.holderId )}>Remove</button></td>                       
                        </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>                
            </div>
        );
    }

    
    useEffect(()=>{   
        loadUsers();
        AllReqList();
    },[rederOnchange])  

    return (
        <>
        <ManLayout
            title="Dashboard"
            description={`${user.fname} ${user.lname}`}
            className="container-fluid"
        >
            <div >
            {studentReqList()}
            {staffReqList()}  
            {activatedGuest()}
            {listedGuest()}           
            {basicInfoCards()}
            {showPieChart()}
              
            </div>           
        </ManLayout>
        <Footer />
        </>
    );
};

export default AdminDashboard;
