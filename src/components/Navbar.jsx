import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // If you're using React Router
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
const Navbar = () => {
  const location = useLocation(); // React Router hook to get current location

  return (
    <nav className="bg-black w-full">
      <div className="container  py-3 ">
        <div className="flex justify-around items-center">
          

        
          <div className=" font-mono  flex items-center w-[85%] justify-between space-x-6">
          <div>

            <img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="Logo" className="h-8 mr-4" />
          </div>
          
            <NavLink to="/store" active={location.pathname === '/store'}>Store</NavLink>
            <NavLink to="/pc" active={location.pathname === '/pc'}>PC</NavLink>
            <NavLink to="/console" active={location.pathname === '/console'}>Console</NavLink>
            <NavLink to="/mobile" active={location.pathname === '/mobile'}>Mobile</NavLink>
            <NavLink to="/lifestyle" active={location.pathname === '/lifestyle'}>lifestyle</NavLink>
            <NavLink to="/services" active={location.pathname === '/services'}>Services</NavLink>
            <NavLink to="/community" active={location.pathname === '/community'}>Community</NavLink>
            <NavLink to="/support" active={location.pathname === '/support'}>Support</NavLink>
            <NavLink to="/cart" active={location.pathname === '/cart'}><IoSearchSharp size={22} /></NavLink>
            <RiShoppingCartLine />

          </div>
        
        </div>
      </div>
      <hr className='border-1 border-green-500' />
    </nav>
  );
};

// Custom NavLink component to add an 'active' class based on the 'active' prop
const NavLink = ({ to, children, active }) => {
  return (
    <Link to={to} className={` hover:text-white ${active ? ' text-white' : 'text-gray-400'}`}>
      {children}
    </Link>
  );
};

export default Navbar;
