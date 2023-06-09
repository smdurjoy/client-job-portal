import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/responsive.css';
import {RouterProvider} from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
    return (
        <RouterProvider router={AppRoute}/>
    );
}

export default App;
