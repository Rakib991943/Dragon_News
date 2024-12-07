import React, { Children, useContext } from 'react';
import { AuthContest } from '../Components/MainLayout/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContest);
  if (loading) {
    return <div className='flex min-h-screen justify-center items-center'>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>


  // return (
  //   <div>

  //   </div>
  // );
};

export default Private;