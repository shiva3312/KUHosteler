import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.profileType === 3 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/auth/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default AdminRoute;
