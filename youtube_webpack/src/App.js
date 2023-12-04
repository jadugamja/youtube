import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    }
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default App;