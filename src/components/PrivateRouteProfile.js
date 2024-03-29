import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../app/hooks";
import {COMPANY_LOGIN} from "../helpers/Constants";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import CompanyProfileUpdatePage from "../pages/CompanyProfileUpdatePage";

export default function PrivateRouteProfile({children, editMode = false}) {
    const {token, user_type} = useAppSelector((state) => state.app);

    if (!token) {
        return <Navigate to="/login"/>
    }

    if (user_type === COMPANY_LOGIN) {
        return editMode ? <CompanyProfileUpdatePage/> : <CompanyProfilePage/>
    }

    return children;
}