import 'react-toastify/dist/ReactToastify.min.css';
import {RouterProvider} from "react-router-dom";
import AppRoute from "./router/AppRoute";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
        <ToastContainer/>
        <RouterProvider router={AppRoute}/>
      </>
  );
}

export default App;
