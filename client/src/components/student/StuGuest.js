import React, { useState , useEffect } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
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
    },[values , guest])


    const getAllGuest =() =>{
        
       return (
        
        <div  className="card mb-5 shadow-sm m-3">
              <div id="guestlist" class="container align-middle lower-part mt-5 pt-5 mb-5 pb-5 ">

        <div class="row bg-dark">
            <h3 class="display-6 text-light text-center text-middle p-3 "> Active Guest List</h3>
        </div>

        <div class="row">
        <table class="table table-hover  " id="tableLevel-1">
        <thead>
          <tr class="bg-dark">
            <th class="text-center align-middle text-light h4 p-4">SL</th>
            <th class="text-center align-middle text-light h4">Date</th>
            <th class="text-center align-middle text-light h4">Name </th>
            <th class="text-center align-middle text-light h4">Meal Time </th>
            <th class="text-center align-middle text-light h4" >Meal status</th>
            <th class="text-center align-middle text-light h4" colSpan={2} >Activity</th>
          </tr>
        </thead>

        <tbody>
         {   stuData.active_guest_list.map((guest , i)=>(       
            <tr class="" key={i}>
            <td class="text-center align-middle  ">{i+1}</td>
            <td class="text-center align-middle  ">{(guest.date).slice(0,15)}</td>
            <td class="text-center align-middle  ">{guest.name} </td>
            <td class="text-center align-middle  ">{guest.mealTime}</td>
            {guest.mealStatus == false ?  <td class="text-center align-middle " >Listed</td> :
            <td class="text-center align-middle " >Activated</td>
         }
            <td class="align-center align-middle  " >
                <table  >
                    <tbody>
                        <tr >
                            <th> <button type="submit" className="btn btn-primary " >Edit</button></th>
                            <th> <button type="submit" className="btn btn-danger " onClick={()=>deleteguest(guest._id)}>Delete</button></th>
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
        </div>
        </div>
        
    )
    }

    const addGuestForm = () => {
        return (
           
        <div id="addguest" className=" card mb-5 container bg-light mb-5 pb-5 ">
        <div className="bg-dark ">
            <h3 className="display-6 text-light text-center text-middle ">Add Guest</h3>
        </div>
               
        <form className="row g-3" >
            <div className="col-lg-3 col-sm-12">
                <table className="table table-borderless">
                    <tbody>
                    <tr><td colSpan="" className="lead"> Name </td></tr>
                    <tr><td><input type="Name" className="form-control" id="inputEmail" placeholder=" Enter Guest Name"  required  onChange={handleChange('name')} value={name}></input></td></tr>
                    </tbody>
                </table>
            </div>

            <div className="col-lg-4 col-sm-12">
                <table className="table table-borderless">
                    <tbody>
                    <tr><td colSpan="2" className="lead"> From </td></tr>
                    <tr><td>
                            <select className="form-select"  onChange={handleChange('startoption')} value={startoption}>
                                <option defaultValue="on">On</option>
                                <option value="morning">Only Morning</option>
                                <option value="night">Only Night</option>
                            </select>
                        </td>
                        <td><input type="date" className="form-control"  onChange={handleChange('startDate')} value={startDate} required></input></td>
                     </tr>
                     </tbody>
                </table>
            </div>

            <div className="col-lg-4 col-sm-12">
                <table className="table table-borderless">
                    <tbody>
                    <tr><td colSpan="2" className="lead"> To </td></tr>
                    <tr><td>
                        <select className="form-select"  onChange={handleChange('endoption')} value={endoption}>
                            <option defaultValue="on">On</option>
                            <option value="morning">Only Morning</option>
                            <option value="night">Only Night</option>
                        </select>
                    </td><td><input type="date" className="form-control"  onChange={handleChange('endDate')} value={endDate} required></input></td></tr>
                    </tbody>
                </table>
            </div>

            <div className="col-lg-1 col-sm-12 text-end">
                <table className="table table-borderless">
                    <tbody>
                    <tr><td  className="lead ">. </td></tr>
                    <tr><td width="10%"><button className="btn btn-success" onClick ={clickSubmit}>Add</button></td> </tr>
                    </tbody>
                </table>

            </div>
        </form>
        </div>
    )};

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Guest is Successfully added
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
