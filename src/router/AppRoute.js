import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";
import OTPPage from "../pages/OTPPage";
import RegistrationPage from "../pages/RegistrationPage";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/jobs",
        element: <JobsPage/>
    },
    {
        path: "/job-details/:id",
        element: <JobDetailsPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/otp-verification",
        element: <OTPPage/>
    },
    {
        path: "/register",
        element: <RegistrationPage/>
    },
]);

export default AppRoute;