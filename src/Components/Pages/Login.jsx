import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContest } from '../../assets/Provider/AuthProvider';

const Login = () => {
  const { logInUser, setUser } = useContext(AuthContest);

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    logInUser(email, password)
      .then(res => {
        const data = res.user;
        setUser(data);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {

      })
  }

  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className="card bg-base-100 w-[500px] p-12 h-[550px]  shrink-0 shadow-2xl">
        <h2 className='text-3xl font-bold text-center mt-4'>Login Acount </h2>
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className='text-center font-semibold'>Don't have acount <Link className='text-purple-600' to='/auth/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;