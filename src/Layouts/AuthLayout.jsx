import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <h1>This is Auth Layout</h1>
    </div>
  );
};

export default AuthLayout;