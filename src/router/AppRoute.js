import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";

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
]);

export default AppRoute;