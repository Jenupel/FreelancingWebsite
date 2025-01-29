import React from "react";
import Navbar from "./compontents/Navbar/Navbar";
import Footer from "./compontents/footer/Footer";
import Home from "./pages/home/Home";
//import MyGigs from "./pages/myGigs/MyGigs";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Msgs from "./pages/msgs/Msgs";
import Msg from "./pages/msg/Msg";
import Login from "./pages/login/Login";
import Resister from "./pages/resister/Resister";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import MyGigs from "./pages/mygigs/Mygigs";
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


function App() {

  const queryClient = new QueryClient();

  const Layout = () =>{
    return(
      <div className="app">
      <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </QueryClientProvider>
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,


      children:[
        {
        path: "/",
        element: <Home/>,
        },
        {
          path: "/gigs",
          element: <Gigs/>,
        },
        {
          path: "/gig/:id",
          element: <Gig/>,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add/>,
        },
        {
          path: "/msgs",
          element: <Msgs/>,
        },
        {
          path: "/msg/:id",
          element: <Msg/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/Resister",
          element: <Resister/>,
        },
        {
          path: "/pay/:id",
          element: <Pay/>,
        },
        {
          path: "/success",
          element: <Success />,
        },
        
        
      ]

    },
  ]);

   
  
  return <RouterProvider router={router} />
    
  
}

export default App
