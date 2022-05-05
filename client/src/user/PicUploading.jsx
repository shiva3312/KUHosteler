import React, { useState ,useEffect } from "react";
import { Redirect , Link } from "react-router-dom";
import '../css/global.css';
import {  isAuthenticated ,uploadpic} from "../auth";

const UpLoadimage = () => {

    const { user, token } = isAuthenticated();   
    const [values, setValues] = useState({
        
        image: '',
        uploading: false,
        error: '',
        success:'',
        redirectToProfile: false,
        formData:new FormData()
    });
 
   
    const {
        
        uploading,
        error,      
        success,
        redirectToProfile,
        formData 
    } = values;

    // load categories and set form data


    const handleChange = name => event => {
        const value =( name === 'image') ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      
    };

    const clickSubmit = event => {
        console.log(values);
        event.preventDefault();
        setValues({ ...values, error: false, uploading: true });

        uploadpic( user._id, token, formData).then(data => {
            console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    image: '',
                    success:data.info,
                    uploading: false,
                    redirectToProfile : true
                });
            }
        });
    };

    const picUploadForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post image</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('image')} type="file" name="image" accept="image/*" />
                </label>
            </div>

            <button className="btn btn-outline-primary">Upload Profile</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h2>{`${success}`} is created!</h2>
        </div>
    );

    const showUpLoading = () =>
        uploading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );


    const redirectUser = () => {
    if (redirectToProfile) {  
        // if images is not uploded yet then redirect ot PicUpload.jsx page to upload img
        if(!user.image.data===null){  
              //show error and after some second redirect to uploadphot.jsx page again
            return <Redirect to="/user/uploadimage" />;
        }
        else if(user && !(user.profileType==1) && user.membership == 0 || user.membership == 4 ||   user.membership == 5){
            return <Redirect to="/user/info" />;
        }else if (user && user.profileType === 1){
            return <Redirect to="/manager/dashboard" />;
        }else  if(user && user.profileType === 0  ){
            return <Redirect to="/student/home" />;
        }
        else if(user && user.profileType === 2){
            return <Redirect to="/employee/home" />;
        }
        // else{
        //     return <Redirect to="/satff/home" />;
        // }
        }

        else if (!isAuthenticated()){
          
            return <Redirect to="/" />;
        }
    };


    return (
        <div>  
            {showUpLoading()}
            {showError()}
            {picUploadForm()}
            {redirectUser()}
          
        </div>
    );
};

export default UpLoadimage;
