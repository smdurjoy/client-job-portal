import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../app/hooks";
import {COMPANY_LOGIN} from "../helpers/Constants";

export default function CompanyPrivateRoute({children}) {
    const {token, user_type} = useAppSelector((state) => state.app);

    if (!token) {
        return <Navigate to="/login"/>
    }

    if (user_type !== COMPANY_LOGIN) {
        return <Navigate to="/"/>
    }

    return children;
}