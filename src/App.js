import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {RouterProvider} from "react-router-dom";
import AppRoute from "./router/AppRoute";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
    return (
        <>
            <ToastContainer/>
            <RouterProvider router={AppRoute}/>
        </>
    );
}

export default App;
