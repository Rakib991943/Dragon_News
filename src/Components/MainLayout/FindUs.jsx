import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../assets/swimming.png'
import ground from '../../assets/playground.png'
const FindUs = () => {
  return (
    <div>
      <h2 className='text-bold text-2xl font-semibold mt-3'>Find Us </h2>
      <div className='flex md:flex-col mt-3 w-full mb-3 gap-3'>

        <button className='btn md:w-[350px]'><FaFacebook className='text-3xl'></FaFacebook> <span>Facebook</span></button>


        <button className='btn md:w-[350px]'><FaSquareTwitter className='text-3xl'></FaSquareTwitter> <span>Twiter</span> </button>


        <button className='btn md:w-[350px]'> <FaInstagram className='text-3xl'></FaInstagram> <span>Instragram</span></button>

      </div>
      {/* Image  */}
      <h1 className='text-center text-3xl font-bold mt-2'> Kids Zone </h1>
      <div className="card bg-base-100 w-96 shadow-xl py-3 ">
        <figure className="px-10 pt-10">
          <img
            src={swimming}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={ground}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
    </div>


  );
};

export default FindUs;