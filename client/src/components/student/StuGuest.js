import React, { useState , useEffect } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import { addGuest ,read , deleteGuest } from "./stuApi";


const AddGuest = ({history}) => {  

    const {user , token} = isAuthenticated();
    const [stuData , setStuDate] = useState(user);
    const [guest, setguest] = useState({  guestId:''  });

    const [values, setValues] = useState({
        name: '',
        startoption:'on',
        endoption:'on',
        startDate:'',
        endDate: '',
        error: '',
        success: false
    });

    const { 
      name,
      startoption,
      endoption,
      startDate,
      endDate,
      error,
      success
      } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        addGuest(user._id, token , values).then(data => {       
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    startoption:'on',
                    endoption:'on',
                    startDate:'',
                    endDate: '',
                    dob:'',
                    error: '',
                    success: true
                });
            }
        });
    };
   
    const deleteguest = (guestId)=>{
       
        deleteGuest(stuData._id , token , {guestId: guestId}).then((data)=>{
            if(error) console.log(data.error);
           else console.log(data.info);
        })

        setguest({
            ...values,
            guestId:guestId
        });
    }

    useEffect(()=>{
        read(user._id, token).then((data) =>{
            setStuDate(data);
        })        
    },[values , guest]);

    stuData.active_guest_list.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });

    const getAllGuest =() =>{
        
       return (
        
        <> <h1>Active guest list</h1>
        <section className="shadow">
        
        
       

        <div className="shadow tbl-header" id="guestlist">
        <table cellpadding="0" cellspacing="0" border="0" id="tableLevel-1">
        <thead>
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Name </th>
            <th >Meal Time </th>
            <th  >Meal status</th>
            <th colSpan={1} >Activity</th>
          </tr>
        </thead>
        </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        {  
        stuData.active_guest_list.map((guest , i)=>(       
        <tr  key={i}>
            <td>{i+1}</td>
            <td >{(guest.date).slice(0,15)}</td>
            <td >{guest.name.charAt(0).toUpperCase() + guest.name.slice(1)} </td>
            {guest.mealTime=== 'on' ?<td >Mor & Nig</td>:
            <td >{guest.mealTime}</td>}
            {guest.mealStatus === false ?  <td className=" fw-bold">Listed</td> :
            <td >Activated</td>
         }
            <td >
                <table  >
                    <tbody>
                        <tr  >
                            {/* <th> <button type="submit" className="btn btn-primary " >Edit</button></th> */}
                            <th> <button type="submit" className="button btn-sm btn-danger  " onClick={()=>deleteguest(guest._id)}>Delete
                        
                                
                            </button> 
                            <span>
                        <i  className="fa fa-trash-o text-danger fa-lg pe-2 ps-2" onClick={()=>deleteguest(guest._id)}></i>
                             
                        </span>
                              </th>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        ))
        }

        </tbody>

        </table>
        </div>
      </section>
      </>
        
    )
    }

    const addGuestForm = () => {
        return (
            <> <h1>Add new guest</h1>
            <section > 
         <form className=" row mt-2 justify-content-center" >
             
         <div id="addguest" className="tbl-header
   col-lg-2">
           <table  cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr><td colSpan="" className="text-start lead"> Name </td></tr>
                    <tr><td><input type="Name" className="form-control" id="inputEmail" placeholder=" Enter Guest Name"  required  onChange={handleChange('name')} value={name}></input></td></tr>
                    </tbody>
                </table>
            </div>

            <div className="tbl-header col-lg-4 col-sm-12">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr><td colSpan="2" className="text-start lead"> From </td></tr>
                    <tr><td>
                            <select className="form-select"  onChange={handleChange('startoption')} value={startoption}>
                                <option defaultValue="on">Morning/Night</option>
                                <option value="morning">Only Morning</option>
                                <option value="night">Only Night</option>
                            </select>
                        </td>
                        <td><input type="date" className="form-control"  onChange={handleChange('startDate')} value={startDate} required></input></td>
                     </tr>
                     </tbody>
                </table>
            </div>

            <div className="tbl-header col-lg-4 col-sm-12">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr><td colSpan="3" className="text-start lead"> To </td></tr>
                    <tr><td>
                        <select className="form-select"  onChange={handleChange('endoption')} value={endoption}>
                            <option defaultValue="on">On</option>
                            <option value="morning">Only Morning</option>
                            <option value="night">Only Night</option>
                        </select>
                    </td><td><input type="date" className="form-control"  onChange={handleChange('endDate')} value={endDate} required></input></td>
                    <td width="10%"><button className="btn btn-success" onClick ={clickSubmit}>Add</button></td> </tr>
                    </tbody>
                </table>
            </div>
{/* 
            <div className="tbl-header col-lg-1 col-sm-12 text-end">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr><td  className="text-start lead "></td></tr>
                    <tr><td width="10%"><button className="btn btn-success" onClick ={clickSubmit}>Add</button></td> </tr>
                    </tbody>
                </table>

            </div> */}
        </form>
        </section>
        </>
    )};

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ display: success ? '' : 'none' }}>
            Guest is Successfully added
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );


    return (
        <>
        <StuLayout history={history} >
            
            <div className="row " >                
                {showSuccess()}
                {showError()}
                <div >{addGuestForm()}</div>       
                <div >{getAllGuest()}</div>            
                
            </div>
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default AddGuest;
