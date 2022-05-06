import React, { useState,useEffect} from "react";
import { Redirect , Link } from "react-router-dom";
import '../css/global.css';
import { signin, authenticate, isAuthenticated,resetPassword } from "../auth";

const Signin = () => {
    const [showForget,setShowForget] = useState(false);
    const [emailid,setEmail] = useState("");
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });
    useEffect(() => {},[emailid]);
    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

   

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const resetSubmit = e =>{
        e.preventDefault();
        resetPassword({emailid});
        setShowForget(false);
    }

    const clickSubmit = event => {
        console.log("cliked button ");
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };


    const signUpForm = () => (
        <>
        <div className="gradiant">
    <form> 
      
   
    <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-12 col-lg-6">
    <div className="card-body p-5 text-center th shadow-lg" >
    <div className="mb-md-5 mt-md-4 pb-2">
    <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
    <p className="text-white-50 mb-5">Please enter your login and password!</p>


    <div className="form-outline text-start form-white mb-4" >
    <label  className="form-label text-white" htmlFor="email" >Email</label>
    <input required="" type="email" className="form-control" name="username" onChange={handleChange('email')} value={email} />
    </div>
    <div className="form-outline text-start form-white mb-4" >
    <label  className="form-label text-white" htmlFor="password" >Password</label>
    <input type="password" className="form-control" name="password" required="" onChange={handleChange('password')} value={password}/>
    </div>
      
    <p className="small mb-4 pb-lg-2" ><button onClick={(e) =>
    {e.preventDefault()
    setShowForget(true)}} className="text-white-50 btn" >Forgot password?</button></p>
      
    <div >
    <button className="btn btn-outline-light btn-lg px-4" type="submit" onClick={clickSubmit} >Sign In</button>
    </div>
      
    <div className="d-flex justify-content-center text-center mt-4 pt-1">
    <Link to="#!" className="text-white"><i className="fa fa-facebook-official fa-lg"></i></Link>
    <Link to="#!" className="text-white"><i className="fa fa-twitter-square fa-lg mx-4 px-2"></i></Link>
    <Link to="#!" className="text-white"><i className="fa fa-google-plus-square fa-lg"></i></Link>
    </div>
    </div>
    <div>
    <p className="mb-0 text-white">Don't have an account? <Link to="/auth/signup" className="text-white-50 fw-bold">Sign Up</Link></p>
    </div>
    </div>
    </div>
    </div>
    </div>          

      
    </form>
    </div>
    </>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
     
        if (redirectToReferrer) {            
            // if images is not uploded yet then redirect ot PicUpload.jsx page to upload img
            if(! user.image.data ){
               
                return <Redirect to="/user/uploadphoto" />;
            }
            else if(user && (user.profileType!==1) && user.membership == 0 || user.membership == 4 ||   user.membership == 5){
                return <Redirect to="/user/info" />;
            }else if (user && user.profileType === 1){
                return <Redirect to="/manager/dashboard" />;
            }else  if(user && user.profileType === 0  ){
                return <Redirect to="/student/home" />;
            }
            else if(user && user.profileType === 2){
                return <Redirect to="/employee/home" />;
            }
          
        }
       else if (isAuthenticated()){
        console.log("it is ruuning in authentication");
            return <Redirect to="/" />;
        }
    };
    const showForgetPassword = () => (
        <div className='modalBackground'>
           
          <div className='modalContainer'>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
               setShowForget(false);
              }}
            >
              X
            </button>
          </div>
          <form onSubmit={resetSubmit}>
       
       <div className="loginform"> <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        </div>
       
        <input onChange={(e) => setEmail(e.target.value)} value={emailid} type="email" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Email" required/>
      </div> <button type="submit"  className="btn otp" >GET RESET LINK</button>
      </div>
       </form>
         
          </div>
        </div>
      );

    return (
        <div>
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
            {showForget && showForgetPassword()}
        </div>
    );
};

export default Signin;
