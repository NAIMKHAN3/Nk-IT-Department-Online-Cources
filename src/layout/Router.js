import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-side.vercel.app/courses'),
                element: <Courses></Courses>
            }
        ]
    }

])