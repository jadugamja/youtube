import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default App;