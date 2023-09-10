import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../app/hooks";
import {WORKER_LOGIN} from "../helpers/Constants";

export default function PrivateRoute({children}) {
    const {token, user_type} = useAppSelector((state) => state.app);

    if (!token) {
        return <Navigate to="/login"/>
    }

    if (user_type !== WORKER_LOGIN) {
        return <Navigate to="/"/>
    }

    return children;
}