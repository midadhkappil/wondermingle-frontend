import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "../Layouts/Main";
import Home from 'Pages/Home'
import About from 'Pages/About'
import Login from "Pages/Login"
import Signup from "Pages/Signup"
import Message from"Pages/Message"
import Profile from "Pages/Profile"
import Notification from "Pages/Notification";
import ProtetedRoute from "./ProtecedRoute";


const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      
      
      {
        path: "/about",
        element: <About/>,
      },
 
     
      {
        path: "/message",
        element: <Message/>,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
      
      {
        path: "/profile",
        element: <ProtetedRoute element={Profile}/>,
      },
    ]

  },
])

const publicRouter = createBrowserRouter([

  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
])


const Router = ({auth}) => {
  const router = auth.isLoggedIn ? privateRouter : publicRouter
  return (
  <RouterProvider router={router}/>
)}


export default Router;