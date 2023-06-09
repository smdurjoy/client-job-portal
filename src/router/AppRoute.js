import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import CandidatesPage from "../pages/CandidatesPage";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/jobs",
        element: <JobsPage />,
    },
    {
        path: "/candidates",
        element: <CandidatesPage />,
    },
]);

export default AppRoute;