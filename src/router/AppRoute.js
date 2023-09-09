import {createBrowserRouter} from "react-router-dom";
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
import GetAPlansPage from "../pages/GetAPlansPage";
import CreateCompanyPage from "../pages/CreateCompanyPage";
import PostAJobPage from "../pages/PostAJobPage";
import PostedJobDetailsPage from "../pages/PostedJobDetailsPage";
import HomePageRedirector from "../components/HomePageRedirector";
import PrivateRoute from "../components/PrivateRoute";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePageRedirector/>,
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
    {
        path: "/get-a-plan",
        element: <GetAPlansPage/>
    },
    {
        path: "/create-company",
        element: <CreateCompanyPage/>
    },
    {
        path: "/post-a-job",
        element: <PrivateRoute children={<PostAJobPage/>}/>
    },
    {
        path: "/posted-job-details",
        element: <PostedJobDetailsPage/>
    },
]);

export default AppRoute;