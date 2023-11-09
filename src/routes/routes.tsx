import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout.tsx";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import Store from "../pages/Store.tsx";
import About from "../pages/About.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/store",
                element: <Store/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
]);
