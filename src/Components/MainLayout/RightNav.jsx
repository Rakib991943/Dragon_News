import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightNav = () => {
  return (
    <div className='ml-20 md:ml-0'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNav;