import React, { useDebugValue, useEffect, useState } from "react";
import ManLayout from "./ManLayout";
import { isAuthenticated } from "../../auth";
import Notification from "../Notification";
import {
  getAllemployees,
  updateMembershipStatus,
  fchangeMealStatus,
} from "./ManApi";

const EmployeeListInfo = ({ history }) => {
  const { user, token } = isAuthenticated();
  const [employees, setEmployees] = useState([]);
  const [notify , setNotify]= useState({isOpen:false , message:'', type:''});


  const [reRender, setReRender] = useState(false);

  const loadUsers = () => {
    getAllemployees(user._id, token).then((data) => {
      setEmployees(data.users);
    });
  };

  const toggleMembership = (empId, status) => {
    updateMembershipStatus(user._id, token, {
      memId: empId,
      status: status,
    }).then((data) => {
      if (data.error) {
        setNotify({isOpen:true, message:'Unable to perform action' , type:"error"});
        console.log(data.error);
      } else {
        setNotify({isOpen:true, message:'Successfully changed membership' , type:"success"});
        console.log(data.info);
      }
    });
    setReRender(!reRender);
  };

  const viewDetails = (stuId) => {
    return <></>;
  };

  useEffect(() => {
    loadUsers();
  }, [reRender]);

  const emploeyeeList = () => {
    return (
      <div className="text-box fadeUp animate">
        <h1 className="p-2 text-start border-bottom">
          <i className="fa fa-angle-double-right"></i>
          &nbsp;Employee Request List
        </h1>
        <div className="p-2">
        <div className="shadow tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
            <thead>
              <tr>
                <th>SL</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Membership</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mb-5 shadow-lg tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0" id="tableLevel-2">
            <tbody>
              {employees.map((employee, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td> </td>
                  <td>
                    {employee.fname} {employee.lname}
                  </td>

                  {employee.membership === 2 ? (
                    <td>
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-success "
                        onClick={() => toggleMembership(employee._id, 3)}
                      >
                        Present
                      </button>
                    </td>
                  ) : (
                    <td>
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-danger "
                        onClick={() => toggleMembership(employee._id, 2)}
                      >
                        Left
                      </button>
                    </td>
                  )}

                  <td>
                    {" "}
                    <span> <i className="ms-1 fa fa-eye text-primary border fa-lg " data-bs-toggle="modal"  title="view profile"   onClick={(e) => {
                      
                        }}></i></span>
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                    >
                      View Details
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ManLayout
        title="Employees"
        description={`${user.fname} ${user.lname}`}
        className="container-fluid"
        history={history}
      >
        <Notification notify={notify} setNotify={setNotify} />
        {emploeyeeList()}
      </ManLayout>
    </>
  );
};

export default EmployeeListInfo;
