import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
  return (
    <div className='flex mt-4 gap-6 items-center'>
      <p className=' bg-[#D72050] text-base-100 p-2 '>Latest</p>
      <Marquee pauseOnHover className='bg-gray-300 py-3'>
        <p>
          <Link>
            This a World wide Dragon News Airticle Blog This a World wide Dragon News Airticle Blog .
          </Link>
        </p>
        <p>
          <Link>
            This a World wide Dragon News Airticle Blog This a World wide Dragon News Airticle Blog .
          </Link>
        </p>
        <p>
          <Link>
            This a World wide Dragon News Airticle Blog This a World wide Dragon News Airticle Blog .
          </Link>
        </p>

      </Marquee>
    </div>
  );
};

export default Latest;