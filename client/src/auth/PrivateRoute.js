import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && (isAuthenticated().user.membership === 2  ||isAuthenticated().user.membership === 3 )? (
                <Component {...props} />
            ) : 
            
            isAuthenticated() && (isAuthenticated().user.membership === 0) ? ( 
                <Redirect
                to={{
                    pathname: "/user/info",
                    state: { from: props.location }
                }}
            />
            ) :

            (
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

export default PrivateRoute;
