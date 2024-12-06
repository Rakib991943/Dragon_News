import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';
const SingleNewsCard = ({ singleNews }) => {
  const {
    category_id,
    rating: { number, badge },
    total_view,
    title,
    author: { name, published_date, img },
    thumbnail_url,
    image_url,
    details,
  } = singleNews;
  return (
    <div>
      <div className='w-full bg-white rounded-lg shadow-md mb-10 p-6'>
        <div className='flex items-center mb-4 justify-between'>
          <div className='flex'>
            <img className='w-10 h-10  rounded-full mr-3' src={thumbnail_url} alt="" />
            <div>
              <p className='font-semibold'>{singleNews.author.name}</p>
              <p>{singleNews.author.published_date}</p>
            </div>
          </div>
          <div className='flex'>
            <CiBookmark className='text-3xl mr-4' />
            <IoShareSocialOutline className='text-3xl mr-3'></IoShareSocialOutline>
          </div>
        </div>

        {/* Thubnail */}
        <div>
          <h2 className='mt-6 mb-3 font-bold text-2xl'>{singleNews.title}</h2>
          <div className='md:w-[650px]'>
            <img className=' h-[400px]  w-full mb-6' src={image_url} alt="" />
            <p>{singleNews.details}</p>
            <Link to={`/user/${singleNews._id}`} className='text-red-500 mt-2'>Read More </Link>
          </div>
        </div>

        {/* Rating  */}
        <div className='flex justify-between mt-8'>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 " />
            <input type="radio" name="rating-2" className="mask mask-star-2
            " />

            <p className='ml-3'>{singleNews.rating.number}</p>

          </div>
          <div className='flex items-center'>
            <IoMdEye className='text-3xl'></IoMdEye>
            <p className='ml-2'>{singleNews.total_view}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SingleNewsCard;