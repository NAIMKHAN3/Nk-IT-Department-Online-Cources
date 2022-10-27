import { createBrowserRouter } from "react-router-dom";
import CardComponents from "../components/CardComponents/CardComponents";
import SignUp from "../components/CardComponents/Signup/SignUp";
import CardDetails from "../components/CardDetails/CardDetails";
import CheckOut from "../components/CheckOut/CheckOut";
import Courses from "../components/Courses/Courses";
import Faqs from "../components/Faqs/Faqs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                loader: () => fetch('/products.json'),
                element: <Faqs></Faqs>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-side.vercel.app/courses'),
                element: <Courses></Courses>, children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://assignment-10-server-side.vercel.app/courses'),
                        element: <CardComponents></CardComponents>
                    },
                    {
                        path: '/courses/:id',
                        loader: ({ params }) => fetch(`https://assignment-10-server-side.vercel.app/courses/${params.id}`),
                        element: <CardDetails></CardDetails>
                    }
                ]
            },
            {
                path: '/courses/checkout/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-side.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }

        ]
    }

])