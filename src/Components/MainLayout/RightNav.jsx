import React from 'react';
import SocialLogin from './SocialLogin';
import Kids from './kids'
import FindUs from './FindUs';
import addimag from '../../assets/bg.png'

const RightNav = () => {
  return (
    <div className='ml-20 md:ml-0'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <div className='mt-11'>
        <h1 className='text-center mt-5 text-3xl mb-3 text-green-500'>Add Your Add </h1>
        <img className='w-full' src={addimag} alt="" />
      </div>
      <Kids></Kids>
    </div>
  );
};

export default RightNav;