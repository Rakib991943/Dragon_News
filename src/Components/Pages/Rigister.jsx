import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContest } from '../MainLayout/Provider/AuthProvider';

const Rigister = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateauser } = useContext(AuthContest);
  const [err, setError] = useState({});
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get('name');
    if (name.length < 5) {
      setError({ ...err, name: "must be more the 5 character long " })
      return;
    }
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    console.log({ name, email, photo, password });
    createUser(email, password)
      .then(res => {
        const data = res.user;
        setUser(data);
        updateauser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/')
          })
          .catch(err => {
            console.log(err);
          })

      })
      .catch(error => {
        setError({ ...err, })
      })
  }

  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className="card bg-base-100 w-[500px] p-10 h-[670px]  shrink-0 shadow-2xl">
        <h2 className='text-3xl font-bold text-center mt-4'>Register Acount </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            {
              err.name && (
                <label className='lebel text-xs text-red-500 mt-2'>
                  {err.name}
                </label>
              )
            }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo</span>
            </label>
            <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className='text-center font-semibold'>Already have an acount <Link className='text-purple-600' to='/auth/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Rigister;