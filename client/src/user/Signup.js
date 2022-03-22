import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/global.css';
import { signup } from '../auth';

const Signup = () => {
    const [values, setValues] = useState({
        fname: '',
        lname:'',
        email: '',
        password: '',
        selfPhNo:'',
        profileType:0,
        hostelName:'btmens',
        gender:'male',
        address:'',
        dob:'',
        error: '',
        success: false
    });

    const { 
      fname,
      lname,
      email,
      password,
      selfPhNo,
      profileType,
      hostelName,
      gender,
      address,
      dob,
      error,
      success
      } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
 signup({ fname,lname, email,gender, password,address,selfPhNo,profileType,hostelName,dob}).then(data => {       
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    fname: '',
                    lname:'',
                    email: '',
                    password: '',
                    selfPhNo:'',
                    profileType:0,
                    hostelName:'btmens',
                    gender:'male',
                    address:'',
                    dob:'',
                    error: '',
                    success: true
                });
            }
        });
    };

  
    const signUpForm = () => (
      <form> 
      <section className=" gradient">
      <div className="container py-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-7">
      <div className="card-body p-5 text-center " >
      <div className="mb-md-5 mt-md-4 pb-2">
      <h2 className="fw-bold mb-2 text-uppercase text-white">Register as {profileType == 0 ? "Student": ( profileType == 1 ? "Manager" :"Employee" ) }  </h2>
      <p className="text-white-50 mb-5">Please fill up the following details</p>

      <div className="col form-outline text-start form-white mb-4">
              <label className="form-label text-white" htmlFor="profileType">Profile Type</label>
              <select className="form-select" name="profileType" onChange={handleChange('profileType')} value={profileType}>
                <option value="0" >Student</option>
                <option value="2" >Employee</option>
                <option value="1">Manager</option>
              </select>
            </div> 

        <div className="form-outline text-start form-white mb-4" >
            <label  className="form-label text-white" htmlFor="email" >Email</label>
            <input required="" type="email" className="form-control" name="username" onChange={handleChange('email')} value={email} />
          </div>
          <div className="form-outline text-start form-white mb-4" >
            <label  className="form-label text-white" htmlFor="password" >Password</label>
            <input type="password" className="form-control" name="password" required="" onChange={handleChange('password')} value={password}/>
          </div>  
  
          <div className="row">
            <div className="col  form-outline text-start form-white mb-4" >
              <label  className="form-label text-white" htmlFor="fname" >First Name</label>
              <input type="text" className="form-control" name="fname" required="" onChange={handleChange('fname')} value={fname}/>
            </div>
            <div className=" col  form-outline text-start form-white mb-4">
              <label  className="form-label text-white" htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" name="lname" required="" onChange={handleChange('lname')} value={lname}/>
            </div>
          </div>  

          <div className="row">         
            <div className="col form-outline text-start form-white mb-4">
              <label className="form-label text-white" htmlFor="dob">Date Of Beath</label>
              <input type="date" className="form-control" name="dob" required="" onChange={handleChange('dob')} value={dob} />        
            </div>

            <div className="col form-outline text-start form-white mb-4">
            <label className="form-label text-white" htmlFor="gender">Gender</label>
              <select className="form-select" name="profileType" onChange={handleChange('gender')} value={gender}>
                <option defaultValue="male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Other">Other</option>
              </select>
            </div>           

          </div>

          <div className="col form-outline text-start form-white mb-4" >  
            <label className="form-label text-white" htmlFor="hostelName" >Hostel Name</label>
              <select id="hostelName" className="form-control" name="hostelName" required="" onChange={handleChange('hostelName')} value={hostelName}>
              
                <option defaultValue="btmens" >BT MEN'S</option>
                <option value="banyan">BANYAN</option>
                <option value="pg1" >PG 1</option>
                <option value="pg2" >PG 2</option>
                <option value="pg3" >PG 3</option>
                <option value="lh1" >LH 1</option>
                <option value="lh2">LH 2</option>
              </select>
            </div>
          
          <div className="col form-outline text-start form-white mb-4">
            <label  className="form-label text-white" htmlFor="selfPhNo">Mobile Number</label>
            <input type="text" className="form-control" name="selfPhNo" required="" onChange={handleChange('selfPhNo')} value={selfPhNo} />        
          </div>
        
          <div className="col form-outline text-start form-white mb-4">
            <label  className="form-label text-white" htmlFor="address">Address</label>
            <input type="text" className="form-control" name="address" required="" onChange={handleChange('address')} value={address} />        
          </div>        
           
          <div className="row">           
              <div className="col ">
                  <Link to="/" ><button className="btn btn-outline-light btn-lg px-4 " type="submit" >Back to Home</button></Link>
              </div>
              <div className="col">
                  <button col className="btn btn-outline-light btn-lg px-4" type="submit" onClick={clickSubmit} >Register</button>
              </div>
          </div>
  </div>
   </div>
    </div>
    </div>
      </div>          
   </section>
  </form>
    )

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
        <div >
            {showSuccess()}
            {showError()}
            {signUpForm()}
            {JSON.stringify(values)}
           
           
        </div>
    );
};

export default Signup;
