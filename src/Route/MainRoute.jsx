import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Dashboard from './../pages/Dashboard';
import Settings from './../pages/Settings';
import Login from './../pages/Login';
import Register from './../pages/Register';


const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      
      {
        path: "/dashboard/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MainRoute;
