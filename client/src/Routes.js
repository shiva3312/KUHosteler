
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Landing from './user/Landing';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth/signin" exact component={Signin} />
                <Route path="/auth/signup" exact component={Signup} />
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
