import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
  console.log(import.meta.env.VITE_a);
  return (
    <div className='flex flex-col justify-center items-center font-poppins '>
      <div className='flex justify-center mt-4 '>
        <img className='' src={logo} alt="" />
      </div>
      <h2 className='text-gray-400 mt-2 '>
        Journalism Without Fear or Favour
      </h2>
      <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;