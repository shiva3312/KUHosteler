import React from 'react'

export default function RegisterManager() {
  return (
    <> 
    <section className=" gradient">
    <div className="container py-3">
<div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-7">
  <div className="card-body p-5 text-center " >
 <div className="mb-md-5 mt-md-4 pb-2">
<h2 className="fw-bold mb-2 text-uppercase text-white">Register as Manager</h2>
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
       
        <div className="col form-outline text-start form-white mb-4">
          <label  className="form-label text-white" for="mobile_no">Mobile Number</label>
          <input type="text" className="form-control" name="mobile_no" required="" />
       
          
        </div>
        <div classNameName="row">
        <div className="col form-outline text-start form-white mb-4">
            <label className="form-label text-white" for="department">Gender</label>
            <select className="form-select" name="gender">
              <option selected="" >other</option>
              <option value="male" >Male</option>
              <option value="female">Female</option>
            </select>
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
