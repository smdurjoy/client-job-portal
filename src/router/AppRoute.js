import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import CandidatesPage from "../pages/CandidatesPage";
import EmployersPage from "../pages/EmployersPage";
import JobDescriptionPage from "../pages/JobDescriptionPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/jobs",
        element: <JobsPage/>,
    },
    {
        path: "/jobs/:id",
        element: <JobDescriptionPage/>,
    },
    {
        path: "/candidates",
        element: <CandidatesPage/>,
    },
    {
        path: "/employers",
        element: <EmployersPage/>,
    },
    {
        path: "/company/:id",
        element: <CompanyProfilePage/>,
    },
]);

export default AppRoute;