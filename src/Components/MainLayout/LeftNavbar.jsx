import React, { useEffect, useState, } from 'react';
import { NavLink } from 'react-router-dom';
import TecNews from '../TecNews';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category))
  }, [])

  return (
    <div>
      <h2 className='font-semibold mb-3 text-center text-2xl' >ALL Category  </h2>
      <div className='flex ml-10 w-full md:ml-0 flex-col'>
        {
          categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn mt-3 mb-2' key={category.category_id}>{category.category_name}</NavLink>

          )
        }
      </div>
      <TecNews></TecNews>
    </div>
  );
};

export default LeftNavbar;