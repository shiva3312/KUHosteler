import React, { useState } from "react";
import { Redirect , Link } from "react-router-dom";
import '../css/global.css';
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
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
      
    <form> 
    <section className=" gradient">
    <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-12 col-lg-6">
    <div className="card-body p-5 text-center bg-dark" >
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
      
    <p className="small mb-4 pb-lg-2"><Link className="text-white-50" to="#!">Forgot password?</Link></p>
      
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
     </section>
      
    </form>
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
            if(user && user.membership == 0 || user.membership == 4 ||   user.membership == 5){
                return <Redirect to="/user/info" />;
            }else if (user && user.profileType === 1){
                return <Redirect to="/manager/dashboard" />;
            }else  if(user && user.profileType === 0  ){
                return <Redirect to="/student/home" />;
            }
            // else if(user && user.profileType === 2){
            //     return <Redirect to="/admin/dashboard" />;
            // }else{
            //     return <Redirect to="/satff/home" />;
            // }
        }
        if (isAuthenticated()){
            console.log(isAuthenticated());
            return <Redirect to="/" />;
        }
    };

    return (
        <div>
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </div>
    );
};

export default Signin;
