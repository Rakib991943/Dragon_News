import React from 'react';
import swimming from '../../assets/swimming.png'
import ground from '../../assets/playground.png'
import img1 from '../../assets/images (1).jpeg'
import img2 from '../../assets/images (2).jpeg'
import img3 from '../../assets/images (3).jpeg'
import img4 from '../../assets/images (4).jpeg'
import img5 from '../../assets/images (5).jpeg'
const kids = () => {
  return (
    <div>
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
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img3}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img4}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img5}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img4}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
      <div className="card bg-base-100 w-96 py-3 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            className="rounded-xl" />
        </figure>

      </div>
    </div>
  );
};

export default kids;