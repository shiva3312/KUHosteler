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

          <div className=" d-flex justify-content-end"></div>
          <div
            className=" collapse navbar-collapse ps-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-start ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link text-white " to="/user/aboutApp">
                  About
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link text-white " to="/user/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item  ">
                <Link className="nav-link text-white" to="/user/blog">
                  Blog
                </Link>
              </li>

              <li
                className="nav-item "
                style={{
                  display: isAuthenticated() ? "" : "none",
                }}
              >
                <Link className="nav-link text-white" to="/user/mealList">
                  Meal List
                </Link>
              </li>

              <li
                className="nav-item"
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
                className="nav-item "
                style={{
                  display:
                    isAuthenticated() &&
                    isAuthenticated().user.profileType === 2
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/employee/profile">
                  Profile
                </Link>
              </li>

              <li
                className="nav-item "
                style={{
                  display:
                    isAuthenticated() &&
                    isAuthenticated().user.profileType === 0
                      ? ""
                      : "none",
                }}
              >
                <Link className="nav-link text-white" to="/student/profile">
                  Profile
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

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png"
              height="560"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <div className="content">
                <h2 className="fs-1 text-uppercase ">Welcome!</h2>
                <h2>
                  {" "}
                  <i className="icon1 fa fa-building pt-2  fs-1"></i>
                </h2>
                <p className="pt-2 fw-light ">
                  To The Kalyani University Hostel Portal. <br />
                  <span className="fs-6 dialogue">
                    Kalyani university provid both Boy's & Girl's hostel with
                    good <br></br>infrastructure and eco-friendly environment
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2022/04/18/17/28/artwork-7141146_960_720.png"
              height="560"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <div className="content">
                <h2 className="fs-1 text-uppercase ">Explore</h2>

                <p className="pt-2 fw-light ">
                  <span className="fs-6 dialogue">
                    Join the community of KuHosteler and share you memories and
                    stories with everyone
                  </span>
                </p>
                <p style={{ fontSize: "13px" }}>
                  <div className="text-start social mt-2 mb-3 text-center">
                    <Link
                      to={{
                        pathname:
                          "https://www.facebook.com/KuHosteler-101982879197572",
                      }}
                      target="_blank"
                      className="p-2 ps-0 text-dark"
                    >
                      <i className="fa fa-facebook-official fa-lg h5"></i>
                    </Link>
                    <Link
                      to={{ pathname: "https://www.instagram.com/kuhosteler/" }}
                      target="_blank"
                      className="p-2 text-dark"
                    >
                      <i className="fa fa-instagram fa-lg h5"> </i>
                    </Link>
                    <Link
                      to={{
                        pathname:
                          "https://www.youtube.com/channel/UCov8Wnq_dpzpBuH68XX2OAg",
                      }}
                      target="_blank"
                      className="p-2 text-dark "
                    >
                      <i className="fa fa-youtube fa-lg h5"> </i>
                    </Link>
                    <Link
                      to={{ pathname: "https://twitter.com/HostelerKu" }}
                      target="_blank"
                      className="p-2 text-dark"
                    >
                      <i className="fa fa-twitter fa-lg h5"></i>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className=" display-5">Hostels</h1>

      <div className="host row m-1 hostclr">
        <div className="col-4 ">
          <div className="card-body m-2 shadow-sm">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">PG Hall-1</p>
            <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card-body m-2 shadow-sm ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
              Radhakrishnan Bhawan(BT MENS)
            </p>
            <p style={{ fontSize: "13px" }}>
              B-13, Central Park, Kalyani, 741235{" "}
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
              Jagadish Chandra Bhawan(Banyan Hall)
            </p>
            <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
          </div>
        </div>
      </div>
      <div className="host row m-1 hostclr">
        <div className="col-4 ">
          <div className="card-body m-2 shadow-sm">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">LH-1</p>
            <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
              Meghnad Saha Bhawan(PG Hall-3)
            </p>
            <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body m-2 shadow-sm">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/10/11/05/castle-6001720_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
              Vivekananda Bhawan(PG Hall-2)
            </p>
            <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="host1 hostclr carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow-sm">
                <img
                  src="https://cdn.pixabay.com/photo/2017/09/28/11/10/the-university-2795163_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
                  PG Hall-1
                </p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235 </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
                  Radhakrishnan Bhawan(BT MENS)
                </p>
                <p style={{ fontSize: "13px" }}>
                  B-13, Central Park, Kalyani, 741235
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
                  Jagadish Chandra Bhawan(Banyan Hall)
                </p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">LH-1</p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
                  Meghnad Saha Bhawan(PG Hall-3)
                </p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">
                  Vivekananda Bhawan(PG Hall-2)
                </p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-lg-3 col-md-12 d-block w-100">
              <div className="card-body hostelp shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/10/29/green-979055_960_720.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text  pb-1 fs-6 fw-bold  mt-2 mb-0">LH-2</p>
                <p style={{ fontSize: "13px" }}>Kalyani, Nadia, 741235</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="why-us section-bg">
        <div className="container shadow mt-4">
          <div className="row">
            <div className="col-lg-6 video-box">
              <img src="assets/img/why-us.jpg" className="img-fluid" alt="" />
              <Link
                to="https://youtu.be/3VtmBLFlvGg"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></Link>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-building"></i>
                </div>
                <h4 className="title">
                  <Link to="">59th Hall Day & Reunion</Link>
                </h4>
                <p className="description">
                  Each year a reunion or hall day is celebrated at the hostel.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-gift"></i>
                </div>
                <h4 className="title">
                  <Link to="">Youtube Page</Link>
                </h4>
                <p className="description">
                  Our youtube page has got a virtual campus view for you to
                  experience our hostel virtually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
