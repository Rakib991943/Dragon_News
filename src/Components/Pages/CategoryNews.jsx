import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNewsCard from './SingleNewsCard';

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <div>
        {
          news.map(singleNews => (
            <SingleNewsCard key={singleNews._id} singleNews={singleNews}></SingleNewsCard>
          )

          )
        }
      </div>
    </div>
  );
};

export default CategoryNews;