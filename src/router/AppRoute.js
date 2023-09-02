import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";
import OTPPage from "../pages/OTPPage";
import RegistrationPage from "../pages/RegistrationPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import WorkerProfileUpdatePage from "../pages/WorkerProfileUpdatePage";
import WorkerProfilePage from "../pages/WorkerProfilePage";
import BookmarkPage from "../pages/BookmarksPage";
import CompaniesPage from "../pages/CompaniesPage";
import CompanyDetailsPage from "../pages/CompanyDetailsPage";
import CompanyDashboardPage from "../pages/CompanyDashboardPage";
import PostedJobsPage from "../pages/PostedJobsPage";

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
        path: "/profile",
        element: <WorkerProfilePage/>
    },
    {
        path: "/edit-profile",
        element: <WorkerProfileUpdatePage/>
    },
    {
        path: "/bookmarks",
        element: <BookmarkPage/>
    },
    {
        path: "/companies",
        element: <CompaniesPage/>
    },
    {
        path: "/company-details",
        element: <CompanyDetailsPage/>
    },
    {
        path: "/dashboard",
        element: <CompanyDashboardPage/>
    },
    {
        path: "/posted-jobs",
        element: <PostedJobsPage/>
    },
]);

export default AppRoute;