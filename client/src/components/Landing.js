import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth/index.js";

export default function Landing({ history }) {
  return (

    <div className="text-box fadeUp animate">
      <nav className=" navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <h2 className="ps-1 fs-1 text fw-bold">KuHosteler</h2>

          <button
            className=" navbar-toggler drkgrn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon drkgrn"></span>
          </button>

          <div
            className=" collapse navbar-collapse ps-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-start ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link text-white " to="#">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-white" to="#">
                  Support
                </Link>
              </li>
              <li
                className="nav-item ps-3 px-3"
                style={{
                  display:
                    isAuthenticated() &&
                      isAuthenticated().user.profileType === 1
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/manager/dashboard">
                  Dashboard
                </Link>
              </li>
              <li
                className="nav-item ps-3 px-3"
                style={{
                  display:
                    isAuthenticated() &&
                      isAuthenticated().user.profileType === 0
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/student/home">
                  Home
                </Link>
              </li>
              {isAuthenticated() && (
                <Link
                  className="nav-item  pt-1"
                  to=""
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <button
                    className=" btn btn-outline-light btn-sm mt-1"
                    type="submit"
                  >
                    Signout
                  </button>
                </Link>
              )}
              {!isAuthenticated() && (
                <li className="nav-item   pt-1">
                  <Link to="/auth/signin">
                    <button
                      className="btn btn-outline-light btn-sm mt-1"
                      type="submit"
                    >
                      Log In
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">


        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" height="560" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <div className="content">
                <h2 className="fs-1 text-uppercase " >Welcome!</h2>
                <h2> <i className="icon1 fa fa-university pt-2  fs-1"></i></h2>
                <p className="pt-2 fw-light ">To The Kalyani University Hostel Portal. <br/> <span className="fs-6 dialogue">To The Kalyani University Hostel Portal</span>
                </p>

              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" height="560" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <div className="content">
                <h2 className=" text-uppercase ">Welcome!</h2>
                <h2> <i className="icon1 fa fa-building pt-2  fs-1"></i></h2>
                <p className="pt-2 fw-light ">To The Kalyani University Hostel Portal<br /><span className="dialogue fs-6">We are here to provide you the best infrastructure and good comfort for living</span>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png" height="560" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <div className="content">
                <h2 className="fs-1 text-uppercase ">Welcome!</h2>
                <h2> <i className="icon1 fa fa-leaf pt-2  fs-1"></i></h2>
                <p className="pt-2 fw-light ">To The Kalyani University Hostel Portal<br />
                  <span className="fs-6 dialogue">To The Kalyani University Hostel Portal</span></p>
                <p className=""></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <h1 className="fw-bold hostclr">Our Hostels</h1>


      <div className="host row m-1 hostclr">
        <div className="col-4 ">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text fw-bold fs-5 pb-1 ">PG Hall-1</p>
            <p>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text  pb-1 fs-5 fw-bold">Radhakrishnan Bhawan(BT MENS)</p>
            <p>B-13, Central Park, Kalyani, 741235 </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text  pb-1 fs-5 fw-bold ">Jagadish Chandra Bhawan(Banyan Hall)</p>
            <p>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

      </div>
      <div className="host row m-1 hostclr">
        <div className="col-4 ">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text fw-bold fs-5 pb-1 ">LH-1</p>
            <p>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text  pb-1 fs-5 fw-bold">Meghnad Saha Bhawan(PG Hall-3)</p>
            <p>Kalyani, Nadia, 741235 </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg" className="card-img-top" alt="..." />
            <p className="card-text  pb-1 fs-5 fw-bold ">Vivekananda Bhawan(PG Hall-2)</p>
            <p>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

      </div>
      <div id="carouselExampleControls" className="host1 hostclr carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow-sm">
                <img src="https://cdn.pixabay.com/photo/2017/09/28/11/10/the-university-2795163_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-5 fw-bold">PG Hall-1</p>
                <p>Kalyani, Nadia, 741235 </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">Radhakrishnan Bhawan(BT MENS)</p>
                <p>B-13, Central Park, Kalyani, 741235</p>
              </div>
            </div>
            
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">Jagadish Chandra Bhawan(Banyan Hall)</p>
                <p>Kalyani, Nadia, 741235</p>
              </div>
            </div>
            
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">LH-1</p>
                <p>Kalyani, Nadia, 741235</p>
              </div>
            </div>
            
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">Meghnad Saha Bhawan(PG Hall-3)</p>
                <p>Kalyani, Nadia, 741235</p>
              </div>
            </div>
            
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">Vivekananda Bhawan(PG Hall-2)</p>
                <p>Kalyani, Nadia, 741235</p>
              </div>
            </div>
            
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg" className="card-img-top" alt="..." />
                <p className="card-text  pb-1 fs-4 fw-bold">LH-2</p>
                <p>Kalyani, Nadia, 741235</p>
              </div>
            </div>
            
          </div>




        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section class="why-us section-bg" >
   
      <div class="container shadow mt-4">

<div class="row">
  <div class="col-lg-6 video-box">
    <img src="assets/img/why-us.jpg" class="img-fluid" alt=""/>
    <Link to="https://youtu.be/3VtmBLFlvGg" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>
  </div>

  <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

    <div class="icon-box">
      <div class="icon"><i class="fa fa-building"></i></div>
      <h4 class="title"><Link to="">59th Hall Day & Reunion</Link></h4>
      <p class="description">Each year a reunion or hall day is celebrated at the hostel.</p>
    </div>

    <div class="icon-box">
      <div class="icon"><i class="fa fa-gift"></i></div>
      <h4 class="title"><Link to="">Youtube Page</Link></h4>
      <p class="description">Our youtube page has got a virtual campus view for you to experience our hostel virtually.</p>
    </div>

  </div>
  
</div>


</div>
</section>
      <Footer />
    </div>
  );
}
