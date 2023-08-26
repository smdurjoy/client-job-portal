import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";

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
        element: <LoginPage />
    },
]);

export default AppRoute;