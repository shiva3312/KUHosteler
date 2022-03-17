import React from 'react'
import './Register.css'
export default function RegisterStudent() {
  return (
    <>
     <section className=" gradient">
        <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-7">
      <div className="card-body p-5 text-center" >
     <div className="mb-md-5 mt-md-4 pb-2">
    <h2 className="fw-bold mb-2 text-uppercase text-white">Register as Student</h2>
    <p className="text-white-50 mb-5">Please fill up the following details</p>
    <div className="form-outline text-start form-white mb-4" >
              <label  className="form-label text-white" for="email" >Email</label>
              <input required="" type="email" className="form-control" name="username"/>
            </div>
            <div className="form-outline text-start form-white mb-4" >
              <label  className="form-label text-white" for="password" >Password</label>
              <input type="password" className="form-control" name="password" required=""/>
            </div>
    
   
   
            <div className="col  form-outline text-start form-white mb-4" >
              <label className="form-label text-white" for="university">University Name</label>
              <input required="" type="text" className="form-control " name="university" />
            </div>
            <div className="col  form-outline text-start form-white mb-4" >
              <label  className="form-label text-white" for="department" >Department Name</label>
              <input type="text" className="form-control" name="department" required="" />
            </div>
         

            <div className="row">
              <div className="col  form-outline text-start form-white mb-4" >
                <label  className="form-label text-white" for="first_name" >First Name</label>
                <input type="text" className="form-control" name="first_name" required="" />
              </div>
              <div className=" col  form-outline text-start form-white mb-4">
                <label  className="form-label text-white" for="last_name">Last Name</label>
                <input type="text" className="form-control" name="last_name" required=""/>
              </div>
            </div>  
            <div className="row">
              <div className="col form-outline text-start form-white mb-4">
                <label className="form-label text-white" for="dob" >Date of Birth</label>
                <input type="Date" className="form-control " name="dob" required="" />
              </div>
              <div className="col form-outline text-start form-white mb-4">
                <label className="form-label text-white" for="department">Gender</label>
                <select className="form-select" name="gender">
                  <option selected="" >other</option>
                  <option value="male" >Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>


            <div className="col form-outline text-start form-white mb-4" >
              <label className="form-label text-white" for="home_address" >Home address</label>
              <input type="text" className="form-control" name="home_address" required="" />
            </div>
            <div classNameName="row">
             <div className="col form-outline text-start form-white mb-4">
              <label  className="form-label text-white" for="mobile_no">Mobile Number</label>
              <input type="text" className="form-control" name="mobile_no" required="" />
            </div>
            

            <div className="col form-outline text-start form-white mb-4" >

                <label className="form-label text-white" for="hostel" >Hostel Name</label>
                <select id="hostel" className="form-control" name="hostelName" required="">
                    <option value="pg1" >PG 1</option>
                    <option value="pg2" >PG 2</option>
                    <option value="pg3" >PG 3</option>
                    <option value="banyan">BANYAN</option>
                    <option value="btmens" >BT MEN'S</option>
                    <option value="lh1" >LH 1</option>
                    <option value="lh2">LH 2</option>
                  </select>
            </div>
            </div>
            <div className="row">
            <div className="col form-outline text-start form-white mb-4" >
                <label className="form-label text-white" for="hostel">Meal Preference</label>
                <select id="hostel" className="form-control" name="choice" required="" >
                    <option value="Pure Veg" >Pure Veg</option>
                    <option value="Veg + Egg" >Veg + Egg</option>
                    <option value="NonVeg(chicken)" >NonVeg(chicken)</option>
                    <option value="NonVeg(Fish)" >NonVeg(Fish)</option>
                    <option value="All" >All</option>
                  </select>
            </div>

            <div className="col form-outline text-start form-white mb-4">
              <label className="form-label text-white" for="room_number" >Room Number</label>
              <input type="text" className="form-control" name="room_number" required=""/>
            </div>
            </div>

            <div className="row" >
              <div className="col form-outline text-start form-white mb-4">
                <label className="form-label text-white" for="joinig_year" >Joining Date</label>
                <input type="Date" className="form-control " name="joinig_year" required="" />
              </div>
              <div className="col form-outline text-start form-white mb-4" >
                <label className="form-label text-white" for="leaving_year" >Leaving Date</label>
                <input type="Date" className="form-control " name="leaving_year" required=""/>
              </div>
            </div>

            <div className="col form-outline text-start form-white mb-4" >
              <label className="form-label text-white" for="">Profile picture</label>
                <input type="file" className="form-control text-secondary" id="inputGroupFile04" name="userdp" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
              </div> 
             
     
  <button className="btn btn-outline-light btn-lg px-4" type="submit">Register</button>
      
  
    </div>
     
     </div>
      </div>
      </div>
        </div>          
     </section>
   
   
                </>
            )
        }
    