
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Faq from './components/Faq';
import HelpDesk from './components/HelpDesk';
import ReportBug from './components/ReportBug';
import Developer from './components/Developer';
import UpdatePassword from './user/ForgotPassword';
import InfoPage from './user/InfoPage';
import UpLoadPhoto from './user/PicUploading';
import Landing from './components/Landing';
import ManagerRoute from './auth/ManagerRoute';
import PrivateRoute from './auth/PrivateRoute'

// manager route

import ManDashboard from './components/manager/ManDashboard';
import ManCharge from './components/manager/ManCharge';
import ManEmployee from './components/manager/ManEmployee';
import ManMeal from './components/manager/ManMeal';
import ManNotice from './components/manager/ManNotice';
import ManStuProfile from './components/manager/ManStuProfile';
import ManStudents from './components/manager/ManStudents';
import AboutHostel from './components/AboutHostel';
//student route
import StuHome from './components/student/StuHome';
import StuMyprofile from './components/student/StuMyprofile';
import StuBasicInfo from './components/student/StuBasicInfo';
import StuGuest from './components/student/StuGuest';
import StuMeal from './components/student/StuMeal';
import StuRecords from './components/student/StuRecords';

//employee route
import EmpTodayMealList from './components/employee/EmpMealList';
import EmpBasicInfo from './components/employee/EmpBasicInfo';
import EmpDashboard from './components/employee/EmpHome';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/auth/signin" exact component={Signin} />
                <Route path="/auth/signup" exact component={Signup} />
                <Route path="/user/info" exact component={InfoPage} />
                <Route path="/user/Faq" exact component={Faq} />
                <Route path="/user/HelpDesk" exact component={HelpDesk} />
                <Route path="/user/ReportBug" exact component={ReportBug} />
                <Route path="/user/Developer" exact component={Developer} />
                <Route path="/user/forgotpassword/:userId/:token" exact component={UpdatePassword} />
                <PrivateRoute path="/user/uploadphoto" exact component={UpLoadPhoto} />

                {/*manager GetRoute */}
                <ManagerRoute path="/manager/dashboard" exact component={ManDashboard} />
                <ManagerRoute path="/manager/allstudents" exact component={ManStudents} />
                <ManagerRoute path="/manager/allemployee" exact component={ManEmployee} />
                <ManagerRoute path="/manager/studpayRecord/:stuId/:userId" exact component={ManStuProfile} />
                <ManagerRoute path="/manager/notice" exact component={ManNotice} />
                <ManagerRoute path="/manager/abouthostel" exact component={AboutHostel} />
                <ManagerRoute path="/manager/charges" exact component={ManCharge} />
                <ManagerRoute path="/manager/studentprofile/:stuId/:userId" exact component={ManStuProfile} />


                {/*student GetRoute */}
                <PrivateRoute path="/student/home" exact component={StuHome} />
                <PrivateRoute path="/student/basicInfo" exact component={StuBasicInfo} />
                <PrivateRoute path="/student/guest" exact component={StuGuest} />
                <PrivateRoute path="/student/meal" exact component={StuMeal} />
                <PrivateRoute path="/student/records" exact component={StuRecords} />
              

                <PrivateRoute path="/employee/home" exact component={EmpDashboard} />
                <PrivateRoute path="/employee/basicinfo" exact component={EmpBasicInfo} />
                <PrivateRoute path="/employee/meallist" exact component={EmpTodayMealList} />


                {/* global Route */}
                <PrivateRoute path="/manager/preparedMealList" exact component={ManMeal} />                    

               
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
