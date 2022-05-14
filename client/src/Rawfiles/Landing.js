import React from "react";

export default function Landing() {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg p-2 navbar-light bg-white ">
        <div className="container-fluid">
          <h3 className="ps-5 fs-1 text fw-bold">KuHosteler</h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ps-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ps-3 px-3">
                <a className="nav-link fw-bold" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ps-3 px-3">
                <a className="nav-link fw-bold" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ps-3 px-3">
                <a className="nav-link fw-bold" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item ps-3 px-3 pt-1">
                <button
                  className="pt-1 pb-1 btn  btn-sm px-2 bg fw-bold text-light fs-6"
                  type="submit"
                >
                  Log In
                </button>
              </li>
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
            <p className="text-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              labore nulla amet assumenda consectetur quisquam, distinctio rerum
              ducimus accusamus sint, nam mollitia deserunt temporibus
              dignissimos ratione asperiores quod? Consequuntur, libero.
            </p>
          </div>
        </div>
      </center>
      <footer className="bg-light text-center text-lg-start">
        {/* <div className="text-center pt-3 pb-1">
  <i className="fa fa-user text fs-2 pe-2"></i>
    <a className="text fw-bold" href="">Our Developers</a>
  </div> */}
      </footer>
    </div>
  );
}
