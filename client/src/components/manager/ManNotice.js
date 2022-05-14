// published notice will be shown here
// new notice button will be shown here

// all employee will be listed and give require controls
import React from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";

const AdminDashboard = ({ history }) => {
  const { user } = isAuthenticated();

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {user.fname} {user.lname}
          </li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">
            {user.profileType === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <ManLayout history={history}>
      <div className="row">
        <div> {adminInfo()} </div>
      </div>
    </ManLayout>
  );
};

export default AdminDashboard;
