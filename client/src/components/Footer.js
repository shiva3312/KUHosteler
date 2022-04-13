import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   
        <footer >
        <div  className="containr-fluid ">
        <div  className="card bg-dark mt-2 ">
        <div  className="row ">
            <div  className="ku col-md-4 col-sm-4 col-xs-4 ">
                 <div  className="footer-text pull-left">
                    <div  className="">
                        <h1  className="head font-weight-bold mr-2  text-white" >KuHosteler</h1>
                     
                    </div>
                    <p  className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div  className="social mt-2 mb-3 text-white"> <i  className="fa fa-facebook-official fa-lg"></i> <i  className="fa fa-instagram fa-lg"></i> <i  className="fa fa-twitter fa-lg"></i> <i  className="fa fa-linkedin-square fa-lg"></i> <i  className="fa fa-facebook"></i> </div>
                </div> 
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2"></div>
            
            <div  className="col-md-2 col-sm-2 col-xs-2 ">
                <h5  className="heading text-white pt-3 text-decoration-underline">About </h5>
                <ul  className="heading card-text">
                    <li ><Link to="" className="text-white text-decoration-none">About Us</Link> </li>
                    <li ><Link to="" className="text-white text-decoration-none">Contact Us</Link> </li>
                    <li ><Link to="" className="text-white text-decoration-none">Support Us</Link> </li>        
                </ul>
                   
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2">
                <h5  className="heading text-white pt-3">Report </h5>
                <ul  className="heading card-text">
                    <li ><Link to="" className="text-white text-decoration-none">Suggest Feature</Link> </li>
                    <li ><Link to="" className="text-white text-decoration-none">Report Bug</Link> </li>
                    <li ><Link to="" className="text-white text-decoration-none">FAQ</Link> </li>
               </ul>
                       
                  
               
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2">
                <h5  className="heading text-white pt-3"> App</h5>
                <ul  className="heading  card-text">
                    <li ><Link to="" className="text-white text-decoration-none">About App</Link> </li>
                    <li ><Link to="" className="text-white text-decoration-none">Help Desk</Link> </li>
                </ul>
                       
            </div>
        </div>
        <div  className="divider mb-4"> </div>
        <div  className="row" >
            <div  className="col-md-6 col-sm-6 col-xs-6">
                <div  className="pull-left text-white">
                    <p><i  className="fa fa-copyright text-white"></i> 2022 KuHosteler</p>
                </div>
            </div>
            <div  className="col-md-6 col-sm-6 col-xs-6">
                <div  className="text-white pull-right mr-4 d-flex policy">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
</div>
</footer>

  )
}
