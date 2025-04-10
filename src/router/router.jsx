import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
export  const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/post/:id",
                element: <BlogDetails/>
            }
        ]
       
    }
])