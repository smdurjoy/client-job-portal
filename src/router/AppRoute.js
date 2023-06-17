import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import CandidatesPage from "../pages/CandidatesPage";
import CompanyPage from "../pages/CompanyPage";
import JobDescriptionPage from "../pages/JobDescriptionPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import CandidateProfilePage from "../pages/CandidateProfilePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import WorkersProfileUpdatePage from "../pages/WorkersProfileUpdatePage";

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
        path: "/candidate-profile/:id",
        element: <CandidateProfilePage/>,
    },
    {
        path: "/profile",
        element: <CandidateProfilePage/>,
    },
    {
        path: "/edit-profile",
        element: <WorkersProfileUpdatePage/>,
    },
    {
        path: "/companies",
        element: <CompanyPage/>,
    },
    {
        path: "/company/:id",
        element: <CompanyProfilePage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
]);

export default AppRoute;