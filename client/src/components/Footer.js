import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

export default function Footer() {
  return (
    <footer>
      <div className="footer mb-0">
        <div className="row pt-2 p-2">
        <div className="col-md-1 "></div>
          <div className="col-md-4 ">
            <div className="mt-2  footer-links mb-0 pb-1">
              <h2> KuHosteler</h2>
            </div>
            <p>  KuHosteler is a hostel management and connection building webApp among hostel students. App is focused to make hostel life more interesting and enjoyable </p>
            <strong>Email :</strong> kuhosteler@gmail.com<br />
            <div className="text-start social mt-2 mb-3 text-white">
              <Link  to={{ pathname: "https://www.facebook.com/KuHosteler-101982879197572" }}  target="_blank" className="p-2 ps-0 "  style={{color:'white'}}><i className="fa fa-facebook-official fa-lg"></i></Link>
              <Link  to={{ pathname: "https://www.instagram.com/kuhosteler/" }} target="_blank" className="p-2" style={{color:'white'}}><i className="fa fa-instagram fa-lg"> </i></Link>
              <Link  to={{ pathname: "https://www.youtube.com/channel/UCov8Wnq_dpzpBuH68XX2OAg" }} target="_blank" className="p-2" style={{color:'white'}}><i className="fa fa-youtube fa-lg"> </i></Link>
              <Link  to={{ pathname: "https://twitter.com/HostelerKu" }} target="_blank" className="p-2" style={{color:'white'}}><i className="fa fa-twitter fa-lg"></i></Link>
            </div>
          </div>
          <div className="col-md-1 space1"></div>

          <div className="ft1 col-md-2 col-sm-2 col-xs-2 footer-links">
            <h5 className="pt-3 ps-1">About</h5>
            <ul >
            {isAuthenticated() &&(  
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/AboutHostel" className="text-white text-decoration-none ">About Hostel</Link>
              </li>
            )}
              {/* if user is not isAuthenticated then show static about hostel page */}
            {!isAuthenticated() &&(  
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/staticAbouthoste" className="text-white text-decoration-none ">About Hostel</Link>
              </li>
            )}   
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/Developer" className="text-white text-decoration-none">Developer</Link>
              </li>
             <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/OurVision" className="text-white text-decoration-none">Vision</Link>
              </li>
            </ul>
          </div>

          <div className="ft1 col-md-2 col-sm-2 col-xs-2 footer-links">
            <h5 className="pt-3 ps-1">Support</h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/SuggestFeature" className="text-white text-decoration-none"> Suggest Feature</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/ReportBug" className="text-white text-decoration-none"> Report Bug </Link>
              </li>
               <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/Faq" className="text-white text-decoration-none"> FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="ft1 col-md-2 col-sm-2 col-xs-2 footer-links">
            <h5 className=" pt-3 ps-1">More</h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/blog" className="text-white text-decoration-none">Blog</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/HelpDesk" className="text-white text-decoration-none"> Help Desk</Link>
              </li>
               { isAuthenticated() &&(                
                <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                  <Link to="/user/MealTable" className="text-white text-decoration-none"> Meal List</Link>
                </li>   
              )}
            
            </ul>
          </div>
        </div>

        <div className="ft row p-2 ">
          <div className="col-4 footer-links">
            <h5 className="text-start  pt-3 ps-1">
              About
            </h5>
            <ul >
              {/* if user is isAuthenticated then show corresponding about hostel page  */}
            {isAuthenticated() &&(  
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/AboutHostel" className="text-white text-decoration-none ">About Hostel</Link>
              </li>
            )}
              {/* if user is not isAuthenticated then show static about hostel page */}
            {!isAuthenticated() &&(  
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/staticAbouthoste" className="text-white text-decoration-none ">About Hostel</Link>
              </li>
            )}          
           
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
              <Link to="/user/Developer" className="text-white text-decoration-none">Developer</Link>
              </li>
            <li><i className="fa fa-angle-right fa-lg pe-1"></i>
           <Link to="/user/OurVision" className="text-white text-decoration-none">Vision</Link>
              </li>
            </ul>
          </div>

          <div className="col-4 footer-links">
            <h5 className=" text-start pt-3 ps-1">Support</h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/SuggestFeature" className="text-white text-decoration-none"> Suggest Feature</Link>
              </li>
               <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/ReportBug" className="text-white text-decoration-none"> Report Bug</Link>
              </li>
             <li><i className="fa fa-angle-right fa-lg pe-1"></i>
              <Link to="/user/Faq" className="text-white text-decoration-none">FAQ </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 footer-links">
            <h5 className="text-start pt-3 ps-1">More</h5>
            <ul >
            <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="#" className="text-white text-decoration-none">Blog</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
            <Link to="/user/HelpDesk" className="text-white text-decoration-none"> Help Desk</Link>
              </li>

              {isAuthenticated() &&(                
                <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                  <Link to="/user/MealTable" className="text-white text-decoration-none"> Meal List</Link>
                </li>   
              )}
              
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-bottom pb-2 ">
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()} <strong><span>Kuhosteler</span></strong>
        </div>
      </div>
    </footer>
  );
}