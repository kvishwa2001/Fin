
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage.jsx";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        children: [
            { index: true, element: <Homepage /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> }
        ]
    }
]);
