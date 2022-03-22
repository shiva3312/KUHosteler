import React from "react";
// import './login.css'
import './About.css'

const About = ()=>{
    return (
      
    //     /* <div className="container emp-profile">

    //         <form method="">
    //             <div className="row">
    //                 <div className="col-md-4">
    //                     <img src="C:\Users\Arpan pal\Pictures\Saved Pictures\IMG_20210421_195039.jpg" alt="arpan" srcset="" />
    //                 </div>
    //                 <div className="col-md-6">
    //                     <div className="profile-head">
    //                         <h5>ARPAN PAL</h5>
    //                         <h6>Web Developer</h6>
    //                         <p className="profile-rating mt-3 mb-5">
    //                             Ranking <span>5/10</span>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </form>
    //     </div> */
    // <div>
    // <form action="" method="">
    //     <h1>LOGIN</h1>
    //     <label >Username</label>
    //     <input type="text" />
    //     <label >Password</label>
    //     <input type="password" />
    //     <button>Login</button>
    //     <a>Forget Password?</a>
    //     <a href="Signup.html"> Need an account?<strong>SIGN UP</strong></a>
    // </form>
    // </div>

    <div class="user-profile">


  
  
  <div id="addguest" class="container bg-light mb-5 pb-5 ">
    <div class="bg-dark ">
        <h3 class="display-6 text-light text-center text-middle p-3 mb-4">Add Guest</h3>
    </div>

    <form class="row g-3" method="post" action="/addguest">

      <div class="col-lg-3 col-sm-12">
        <table class="table table-borderless">
          <tr>
              <td colspan="" class="lead"> Name </td>
          </tr>
          <tr>
            <td><input type="Name" class="form-control" id="inputEmail" placeholder=" Enter Guest Name" name="name" value="" required/></td>
          </tr>
        </table>
      </div>

      <div class="col-lg-4 col-sm-12">
        <table class="table table-borderless">
          <tr>
              <td colspan="2" class="lead"> From </td>
          </tr>
          <tr>
            <td>
              <select class="form-select" name="startoption">
                <option selected>On</option>
                <option value="morning">Only Morning</option>
                <option value="night">Only Night</option>
              </select>
            </td>
            <td><input type="date" class="form-control" name="startDate" required/></td>
          </tr>
        </table>
      </div>

      <div class="col-lg-4 col-sm-12">
        <table class="table table-borderless">
          <tr>
              <td colspan="2" class="lead"> To </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" name="endoption">
                <option selected>On</option>
                <option value="morning">Only Morning</option>
                <option value="night">Only Night</option>
              </select>
            </td>
            <td><input type="date" class="form-control" name="endDate" required/></td>
          </tr>
        </table>
      </div>

      <div class="col-lg-1 col-sm-12 text-end">
        <table class="table table-borderless">
          <tr>
              <td colspan="" class="lead ">. </td>
          </tr>
          <tr>
            <td width="10%"><button type="submit" class="btn btn-success">Add</button></td>
          </tr>
        </table>

      </div>
    </form>
  </div>

</div>
      
    )
}
export default About