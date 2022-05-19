import React from "react";
import { Link } from "react-router-dom";

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
            <p> ducimus consectetur hic quae ea pariatur illo. Kalyani University's hostel management website </p>
            <strong>Phone:</strong> +91 589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
            <div className="text-start social mt-2 mb-3 text-white">
              <i className="fa fa-facebook-official fa-lg border1"></i>
              <i className="fa fa-instagram fa-lg border1"></i>
              <i className="fa fa-youtube fa-lg border1"></i>
            </div>
          </div>
          <div className="col-md-1 space1"></div>
          <div className="ft1 col-md-2 col-sm-2 col-xs-2 footer-links">
            <h5 className="pt-3 ps-1">About</h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/AboutHostel" className=" text-white text-decoration-none">About Hostel</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/Developer" className="text-white text-decoration-none">Our Developer</Link>
              </li>
             <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/OurVision" className="text-white text-decoration-none">OurVision</Link>
              </li>
            </ul>
          </div>
          <div className="ft1 col-md-2 col-sm-2 col-xs-2 footer-links">
            <h5 className="pt-3 ps-1"> Report</h5>
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
            <h5 className=" pt-3 ps-1">
              App
            </h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/HelpDesk" className="text-white text-decoration-none"> Help Desk</Link>
              </li>
               <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="/user/MealTable" className="text-white text-decoration-none">Meal Table</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft row p-2 ">
          <div className="col-4 footer-links">
            <h5 className="text-start  pt-3 ps-1">
              About
            </h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
                <Link to="" className="text-white text-decoration-none ">About Hostel</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
              <Link to="/user/Developer" className="text-white text-decoration-none"> Our Developer</Link>
              </li>
            <li><i className="fa fa-angle-right fa-lg pe-1"></i>
           <Link to="/user/OurVision" className="text-white text-decoration-none"> Our Vision</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 footer-links">
            <h5 className=" text-start pt-3 ps-1">
              Report
            </h5>
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
            <h5 className="text-start pt-3 ps-1"> App
            </h5>
            <ul >
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
            <Link to="/user/HelpDesk" className="text-white text-decoration-none"> Help Desk</Link>
              </li>
              <li><i className="fa fa-angle-right fa-lg pe-1"></i>
               <Link to="/user/MealTable" className="text-white text-decoration-none"> Meal Table</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-bottom pb-2 ">
        <div class="copyright">
          &copy; Copyright <strong><span>Kuhosteler</span></strong>. All Rights Reserved
        </div>
        <div class="credits pb-1">
          Designed by Anonymous
        </div>
      </div>
    </footer>
  );
}