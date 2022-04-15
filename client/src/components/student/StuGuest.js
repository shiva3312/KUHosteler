import React, { useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import { addGuest } from "./stuApi";


const AdminDashboard = ({history}) => {  

    const {user , token} = isAuthenticated();
    const [stuData , setStuDate] = useState(user);
    console.log(stuData); 
    
    const [values, setValues] = useState({
        name: '',
        startoption:'',
        endoption:'',
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
        addGuest(user._id, token).then(data => {       
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    startoption:'',
                    endoption:'',
                    startDate:'',
                    endDate: '',
                    dob:'',
                    error: '',
                    success: true
                });
            }
        });
    };




    const addGuest = () => {
        return (
           
        <div id="addguest" class=" card mb-5 container bg-light mb-5 pb-5 ">
        <div class="bg-dark ">
            <h3 class="display-6 text-light text-center text-middle ">Add Guest</h3>
        </div>
               
        <form class="row g-3" >
            <div class="col-lg-3 col-sm-12">
                <table class="table table-borderless">
                    <tr><td colspan="" class="lead"> Name </td></tr>
                    <tr><td><input type="Name" class="form-control" id="inputEmail" placeholder=" Enter Guest Name"  required  onChange={handleChange('name')} value={name}></input></td></tr>
                </table>
            </div>

            <div class="col-lg-4 col-sm-12">
                <table class="table table-borderless">
                    <tr><td colspan="2" class="lead"> From </td></tr>
                    <tr><td>
                            <select class="form-select"  onChange={handleChange('startoption')} value={startoption}>
                                <option selected>On</option>
                                <option selected="morning">Only Morning</option>
                                <option selected="night">Only Night</option>
                            </select>
                        </td>
                        <td><input type="date" class="form-control"  onChange={handleChange('startDate')} value={startDate} required></input></td>
                     </tr>
                </table>
            </div>

            <div class="col-lg-4 col-sm-12">
                <table class="table table-borderless">
                    <tr><td colspan="2" class="lead"> To </td></tr>
                    <tr><td>
                        <select class="form-select"  onChange={handleChange('endoption')} value={endoption}>
                            <option selected>On</option>
                            <option selected="morning">Only Morning</option>
                            <option selected="night">Only Night</option>
                        </select>
                    </td><td><input type="date" class="form-control"  onChange={handleChange('endDate')} value={endDate} required></input></td></tr>
                </table>
            </div>

            <div class="col-lg-1 col-sm-12 text-end">
                <table class="table table-borderless">
                    <tr><td colspan="" class="lead ">. </td></tr>
                    <tr><td width="10%"><button type="submit" class="btn btn-success">Add</button></td> </tr>
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
            New account is created. Please <Link to="/auth/signin">Signin</Link>
        </div>
    );


    return (
        <>
        <StuLayout history={history} >
            {/* show your content in this div */}
            {JSON.stringify(values)}
            <div className="row " >                
                {showSuccess()}
                {showError()}
                <div  className="col mb-0">{addGuest()}</div>             
                
            </div>
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default AdminDashboard;
