import React from 'react';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/MainLayout/LeftNavbar';
import RightNav from '../Components/MainLayout/RightNav';
import { Outlet } from 'react-router-dom';
const HomeLayouts = () => {
  return (
    <div>
      <div>
        {/* This is header  */}
        <header>
          <Header></Header>
          <section className='w-11/12 mx-auto'>
            <Latest></Latest>
          </section>

        </header>
        {/* This is Navbar */}
        <nav>
          <section className='w-11/12 mx-auto py-2'>
            <Navbar> </Navbar>
          </section>
        </nav>
        {/* This is main Section */}
        <main className='w-11/12 mx-auto grid md:grid-cols-12 mt-6  gap-4'>
          <aside className='col-span-3'>
            <LeftNavbar></LeftNavbar>
          </aside>
          <section className='col-span-6'>
            <h1 className=' text-center text-3xl font-bold'>There all Trading Braking News </h1>
            <Outlet />
          </section>
          <aside className='col-span-3'><RightNav></RightNav></aside>

        </main>
      </div>

    </div>
  );
};

export default HomeLayouts;