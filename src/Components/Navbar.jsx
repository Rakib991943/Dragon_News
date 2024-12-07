import { Link, NavLink, Outlet } from "react-router-dom";
import logoIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContest } from "./MainLayout/Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContest);
  return (
    <div className=" py-7">
      <h1>{user && user.name}</h1>
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-center md:text-4xl text-red-500 hidden md:block">Dragon World Wide News</h1>
        </div>
        <div className="">
          <ul className="space-x-3 text-2xl
          ">
            <NavLink className={({ isActive }) => (isActive ? "active  text-yellow-400" : "")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active  text-yellow-400" : "")} to='/career'>Career</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active  text-yellow-400" : "")} to='/about'>About</NavLink>
          </ul>
        </div>
        <div className="login">

          <div className="flex gap-2">
            <div className="md:mr-6">
              {
                user && user?.email ? <div>
                  <img className="w-[100px]  rounded-full h-[100px]" src={user?.photoURL} alt="" />
                  <p className="text-2xl font-bold mt-3">UerName:{user?.displayName}</p>
                </div> : (
                  <img
                    src=''
                  ></img>
                )
              }
            </div>
            <div className="w-[40px]">
              <img className="w-full" src={logoIcon} alt="" />
            </div>
            {
              user && user?.email ? <button onClick={logOut} className="btn btn-neutral">Logout</button> : <Link to='/auth/login' className="btn btn-neutral">Login</Link>
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;