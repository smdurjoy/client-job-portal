import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";
import OTPPage from "../pages/OTPPage";
import RegistrationPage from "../pages/RegistrationPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import WorkerProfilePage from "../pages/WorkerProfileUpdatePage";

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
    {
        path: "/forget-password",
        element: <ForgetPasswordPage/>
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPage/>
    },
    {
        path: "/edit-profile",
        element: <WorkerProfilePage/>
    },
]);

export default AppRoute;