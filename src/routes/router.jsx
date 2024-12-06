import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts';
import CategoryNews from '../Components/Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';

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
      {
        path: "/news",
        element: <h3>This is the News Page</h3>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <h2>This is login Page </h2>,
      },
      {
        path: '/auth/register',
        element: <h2>This is Register  Page </h2>,
      },
    ]
  }
]);

export default router;
