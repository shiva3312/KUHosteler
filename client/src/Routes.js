import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Faq from "./components/view/Faq";
import OurVision from "./components/view/OurVision";
import MealTable from "./components/MealTable";
import SuggestFeature from "./components/view/SuggestFeature";
import HelpDesk from "./components/view/HelpDesk";
import ReportBug from "./components/view/ReportBug";
import Developer from "./components/view/Developer";
import UpdatePassword from "./user/ForgotPassword";
import InfoPage from "./user/InfoPage";
import UpLoadPhoto from "./user/PicUploading";
import Landing from "./components/Landing";
import ManagerRoute from "./auth/ManagerRoute";
import PrivateRoute from "./auth/PrivateRoute";
import PageNotFound from "./components/view/PageNotFound"

// manager route

import ManDashboard from "./components/manager/ManDashboard";
import ManCharge from "./components/manager/ManCharge";
import ManEmployee from "./components/manager/ManEmployee";
import ManMeal from "./components/manager/ManMeal";
import ManNotice from "./components/manager/ManNotice";
import ManStudents from "./components/manager/ManStudents";
import AboutHostel from "./components/view/AboutHostel";
//student route
import StuHome from "./components/student/StuHome";
import StuBasicInfo from "./components/student/StuBasicInfo";
import StuGuest from "./components/student/StuGuest";
import StuMeal from "./components/student/StuMeal";
import StuRecords from "./components/student/StuRecords";
import StuEdit from "./components/student/StuEdit";
//employee route
import EmpTodayMealList from "./components/employee/EmpMealList";
import EmpBasicInfo from "./components/employee/EmpBasicInfo";
import EmpDashboard from "./components/employee/EmpHome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route path="/" exact component={Landing} />
        <Route path="/auth/signin" exact component={Signin} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="/user/info" exact component={InfoPage} />
        <Route path="/user/Faq" exact component={Faq} />
        <Route path="/user/AboutHostel" exact component={AboutHostel} />
        <Route path="/user/HelpDesk" exact component={HelpDesk} />
        <Route path="/user/ReportBug" exact component={ReportBug} />
        <Route path="/user/Developer" exact component={Developer} />
        <Route path="/user/MealTable" exact component={MealTable} />
        <Route path="/user/OurVision" exact component={OurVision} />
        <Route path="/user/SuggestFeature" exact component={SuggestFeature} />
        <Route
          path="/user/forgotpassword/:userId/:token"
          exact
          component={UpdatePassword}
        />
        <Route path="/user/uploadphoto" exact component={UpLoadPhoto} />

        {/*manager GetRoute */}
        <ManagerRoute
          path="/manager/dashboard"
          exact
          component={ManDashboard}
        />
        <ManagerRoute
          path="/manager/allstudents"
          exact
          component={ManStudents}
        />
        <ManagerRoute
          path="/manager/allemployee"
          exact
          component={ManEmployee}
        />
        <ManagerRoute path="/manager/notice" exact component={ManNotice} />
        <ManagerRoute
          path="/manager/abouthostel"
          exact
          component={AboutHostel}
        />
        <ManagerRoute path="/manager/charges" exact component={ManCharge} />
        {/*student GetRoute */}
        <PrivateRoute path="/student/profile" exact component={StuHome} />
        <PrivateRoute
          path="/student/basicInfo"
          exact
          component={StuBasicInfo}
        />
        <PrivateRoute path="/student/guest" exact component={StuGuest} />
        <PrivateRoute path="/student/meal" exact component={StuMeal} />
        <PrivateRoute path="/student/StuEdit" exact component={StuEdit} />
        <PrivateRoute path="/student/records" exact component={StuRecords} />

        <PrivateRoute path="/employee/profile" exact component={EmpDashboard} />
        <PrivateRoute
          path="/employee/basicinfo"
          exact
          component={EmpBasicInfo}
        />
        <PrivateRoute
          path="/employee/meallist"
          exact
          component={EmpTodayMealList}
        />

        {/* global  */}
        <PrivateRoute
          path="/manager/preparedMealList"
          exact
          component={ManMeal}
        />
        <Route path="*" component={PageNotFound} />

      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
