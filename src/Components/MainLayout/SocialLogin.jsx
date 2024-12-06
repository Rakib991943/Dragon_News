import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-semibold text-2xl'>Login With </h2>
      <div className='flex gap-3 md:flex-col mt-4 w-full'>
        <button className='btn'> <FaGoogle className='text-2xl'></FaGoogle> <span>Login With Google</span> </button>
        <button className='btn'> <FaGithub className='text-2xl'></FaGithub> <span>Login With Github</span> </button>
      </div>
    </div>
  );
};

export default SocialLogin;