import React from 'react'
import './Register.css'
export default function Login() {
  return (
    <>
    <section className=" gradient">
        <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-6">
      <div className="card-body p-5 text-center bg-dark" >
     <div className="mb-md-5 mt-md-4 pb-2">
    <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
    <p className="text-white-50 mb-5">Please enter your login and password!</p>
    <div className="form-outline text-start form-white mb-4">
    <label className="form-label text-white " for="typeEmail">Email</label>
                    
    <input type="email" id="typeEmail" className="form-control form-control-lg" />
      </div>
    <div className="form-outline text-start form-white mb-4">
   <label className="form-label text-white" for="typePassword">Password</label>
                    
  <input type="password" id="typePassword" className="form-control form-control-lg" />
    </div>
      
   <p className="small mb-4 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
      
  <button className="btn btn-outline-light btn-lg px-4" type="submit">Login</button>
      
      <div className="d-flex justify-content-center text-center mt-4 pt-1">
     <a href="#!" className="text-white"><i className="fa fa-facebook-official fa-lg"></i></a>
   <a href="#!" className="text-white"><i className="fa fa-twitter-square fa-lg mx-4 px-2"></i></a>
   <a href="#!" className="text-white"><i className="fa fa-google-plus-square fa-lg"></i></a>
    </div>
    </div>
      <div>
      <p className="mb-0 text-white">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
      </div>
     </div>
      </div>
      </div>
        </div>          
     </section>
      
  </>
  )
}
