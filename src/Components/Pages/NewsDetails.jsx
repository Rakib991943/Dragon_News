import React from 'react';
import Header from '../Header';
import RightNav from '../MainLayout/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';

const NewsDetails = () => {
  const data = useLoaderData();
  const news = (data.data[0]);
  console.log(news);
  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main className='grid md:grid-cols-12 w-11/12 gap-5 mx-auto'>
        <aside className='left col-span-8'>
          <div className="card bg-base-100 w-11/12 md:w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-warning mt-3 mb-2">Back To Categoty </Link>
              </div>
            </div>
          </div>
        </aside>

        <aside className='col-span-3'>
          <RightNav></RightNav>
        </aside>

      </main>
    </div>
  );
};

export default NewsDetails;