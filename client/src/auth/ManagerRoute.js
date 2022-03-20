import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const ManagerRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.profileType === 1 ? (
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

export default ManagerRoute;
