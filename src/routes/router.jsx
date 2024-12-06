import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts';
import CategoryNews from '../Components/Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Rigister';
import NewsDetails from '../Components/Pages/NewsDetails';
import Private from './Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/01" />
      },
      // This is Important 
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },

    ],
  },
  {
    path: "/user/:id",
    element: <Private>
      <NewsDetails></NewsDetails>,
    </Private>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  }
]);

export default router;
