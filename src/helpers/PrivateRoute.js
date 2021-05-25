import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from "../services/auth.service";

export default function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    const user = AuthService.getCurrentUser();

    if(user){
        return ( <Route {...rest} render={(props) =>
                (<Component {...props}/>)
            }
            />
        )}
    //redirect if there is no user
    return <Redirect to='/login' />
}