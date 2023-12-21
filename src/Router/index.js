import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "../Layouts/Main";

import Home from 'Pages/Home'

import About from 'Pages/About'
import Login from "Pages/Login"
import Signup from "Pages/Signup"
import Brodcast from "Pages/Brodcast"
import Profile from"Pages/Profile"
import ProfileEditor from"Pages/Profile/Profile editer"
import Message from"Pages/Message"


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
        path: "/broadcast/:tripId",
        element: <Brodcast/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/profileeditor",
        element: <ProfileEditor/>,
      },
      {
        path: "/message",
        element: <privateRouter element={Message}/>,
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