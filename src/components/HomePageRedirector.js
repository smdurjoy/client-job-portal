import React from 'react';
import {useAppSelector} from "../app/hooks";
import {COMPANY_LOGIN} from "../helpers/Constants";
import CompanyDashboardPage from "../pages/CompanyDashboardPage";
import HomePage from "../pages/HomePage";

export default function HomePageRedirector() {
    const {token, user_type} = useAppSelector((state) => state.app);

    if (token && user_type === COMPANY_LOGIN) {
        return <CompanyDashboardPage/>
    }

    return <HomePage/>
}