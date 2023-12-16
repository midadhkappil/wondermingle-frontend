import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "../Layouts/Main";

import Home from 'Pages/Home'
import Trips from 'Pages/Trips'
import About from 'Pages/About'
import Login from "Pages/Login"
import Signup from "Pages/Signup"
import Brodcast from "Pages/Brodcast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/trips",
        element: <Trips/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/broadcast/:tripId",
        element: <Brodcast/>,
      },
    ]

  },
  
])


const Router = () => (
  <RouterProvider router={router}/>
)


export default Router;