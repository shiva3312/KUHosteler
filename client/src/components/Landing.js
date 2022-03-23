import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import {signout , isAuthenticated} from '../auth/index.js'

export default function Landing({history}) {
  return (
    <div>
       <nav className=" navbar navbar-expand-lg p-2 navbar-light bg-white ">
             <div className="container-fluid">
            <h3 className="ps-5 fs-1 text fw-bold">KuHosteler</h3>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
          
             <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">                            
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" href="#">About</Link>
                    </li>
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" href="#">Contact</Link>
                    </li>
                    <li className="nav-item ps-3 px-3">
                        <Link className="nav-link fw-bold" href="#">Support</Link>
                    </li>
                    {isAuthenticated() && (                       
                        <Link className="nav-item ps-3 px-3 pt-1"  onClick={() => signout(() => { history.push("/"); }) } >
                        <button className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6" type="submit">Signout</button>
                        </Link>
                     )}
                     {!isAuthenticated() &&(
                        <li className="nav-item ps-3 px-3 pt-1">
                        <Link to="/auth/signin"><button className="pt-1 pb-1 btn-dark  btn-sm px-2 bg fw-bold text-white fs-6" type="submit">Log In</button></Link>
                        </li>
                    )}
                                        
                 </ul>
            </div>
        </div>
     </nav>
        <center>
            <div className="home-page pt-5 mt-5 pb-5 mb-5 ">
                <div className="home-div col-8 pb-3">
                    <p className="welcome pt-5 fw-bold text-light fs-5 pt-3">Welcome</p>
                    <i className="fa fa-university text-light fs-1"></i>
                    <h1 className="text-light">To the University Hostel Portal</h1>
                    <p className="text-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore nulla amet assumenda consectetur quisquam, distinctio rerum ducimus accusamus sint, nam mollitia deserunt temporibus dignissimos ratione asperiores quod? Consequuntur, libero.</p>
                </div>
            </div>
        </center>
        <Footer />
    </div>
  )
}
