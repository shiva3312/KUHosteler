import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   
        <footer >
        <div  className="footer ">
        <div  className="bg-dark card">
        <div  className="row ">
            <div  className="ku col-md-4 col-sm-4 col-xs-4 ">
                 <div  className="footer-text pull-left">
                    <div  className="">
                        <h2  className="head font-weight-bold mr-2 text-white" >KuHosteler</h2>
                     
                    </div>
                    <p  className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div  className="social mt-2 mb-3 text-white"> <i  className="fa fa-facebook-official fa-lg"></i> <i  className="fa fa-instagram fa-lg"></i> <i  className="fa fa-twitter fa-lg"></i> <i  className="fa fa-linkedin-square fa-lg"></i> <i  className="fa fa-facebook"></i> </div>
                </div> 
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2"></div>
            
            <div  className="col-md-2 col-sm-2 col-xs-2 ">
                <h5  className="heading text-white pt-3 text-decoration-underline">About </h5>
                <ul  className="heading card-text">
                    <li ><Link to="/user/AboutHostel" className="text-white text-decoration-none">About Hostel</Link> </li>
                    <li ><Link to="/user/Developer" className="text-white text-decoration-none">About Developer</Link> </li>
                    <li ><Link to="/user/Ourvision" className="text-white text-decoration-none">Our Vision</Link> </li>      
                </ul>
                   
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2">
                <h5  className="heading text-white pt-3 text-decoration-underline">Report </h5>
                <ul  className="heading card-text">
                    <li ><Link to="/user/SuggestFeature" className="text-white text-decoration-none">Suggest Feature</Link> </li>
                    <li ><Link to="/user/ReportBug" className="text-white text-decoration-none">Report Bug</Link> </li>
               </ul>
                       
                  
               
            </div>
            <div  className="col-md-2 col-sm-2 col-xs-2">
                <h5  className="heading text-white pt-3 text-decoration-underline"> Help Index</h5>
                <ul  className="heading  card-text">
                <li ><Link to="/user/Faq" className="text-white text-decoration-none">FAQ</Link> </li>
                <li ><Link to="/user/MealTable" className="text-white text-decoration-none">MealTable</Link> </li>  
                    <li ><Link to="/user/HelpDesk" className="text-white text-decoration-none">Help Desk</Link> </li>
                </ul>
                       
            </div>
        </div>
        <div  className="divider mb-4"> </div>
        <div  className="row" >
            <div  className="col-md-6 col-sm-6 col-xs-6">
                <div  className="pull-left text-white">
                    <p><i  className="fa fa-copyright text-white"></i> {new Date().getFullYear()} KuHosteler</p>
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
