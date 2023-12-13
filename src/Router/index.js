import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home'
import Trips from '../pages/Trips'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/trips",
    element: <Trips/>,
  },
])


const Router = () => (
  <RouterProvider router={router}/>
)


export default Router;