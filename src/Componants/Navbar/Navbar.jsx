import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './profile';
import { AuthContext } from '../../Provider/AuthProvider';




const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100 border-b shadow-lg mb-2 px-5 py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                }
                >
            <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Home</li>
            </NavLink>
            
            <NavLink
                to="/add-event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                }
                >
            <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Add Event</li>
            </NavLink>
        
            <NavLink
                to="/gallary"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                }
                >
            <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Gallary</li>
            </NavLink>
     
        </ul>
        

    </div>
    <img className='h-16  w-24 pl-2' src="/Logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 gap-2 text-xl font-medium">
        
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
            }
            >
           <li className='py-2 px-4 text-sm rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Home</li>
        </NavLink>
         
        <NavLink
            to="/add-event"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
            }
            >
           <li className='py-2 px-4 text-sm rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Add Event</li>
        </NavLink>
      
        
    
        <NavLink
            to="/gallary"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
            }
            >
           <li className='py-2 px-4 text-sm rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Gallary</li>
        </NavLink>
        
        </ul>
  </div>    

        {
            !user?<div className='navbar-end'>
            <NavLink to={"/login"}>
            <button className='btn bg-red-500 text-white font-semibold'>Login/SignUP</button>
            </NavLink>            
        </div>:<Profile></Profile>
        }

</div>
        </div>
    );
};

export default Navbar;