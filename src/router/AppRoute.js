import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // errorElement: <ErrorPage />,
    },
]);

export default AppRoute;