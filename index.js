import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ExploreCard from "./components/ExploreCard";
import DetailOfCard from "./components/DetailOfCard";
import DetailOfFoodCard from "./components/DetailOfFoodCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import SearchCardsDetail from "./components/SearchCardsDetail";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
     
   {
      path: "/",
      element: <Home/>,
    },
   
     
        {
          path: "/meal/:mealDetail",
          element:<DetailOfCard/> ,
        },
        {
          path:"/food/:detailOfFood",
          element:< DetailOfFoodCard/>
        },
        {
          path: "/search/:searchTerm",
          element: <SearchResult />,
        },
       
        {
          path: "/food-product/:foodProduct",
          element: <SearchCardsDetail />,
        },
      
    
  
],
},
]);


const root = createRoot(document.querySelector("#root"));
root.render(   <RouterProvider router={router} />);
