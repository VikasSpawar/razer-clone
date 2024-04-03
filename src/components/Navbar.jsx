import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom"; // If you're using React Router
import CartPopover from "./CartPopover";
import NavForSmallScreens from "./NavForSmallScreens";
import Search from "./Search";
const Navbar = ({products , isLoading}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOn , setIsSearchOn]=useState(false)
  const location = useLocation(); // React Router hook to get current location

  const handleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <nav className="bg-black w-full sticky top-0 z-10">
      <div className="lg:hidden">
        <NavForSmallScreens location={location} products={products}  isLoading={isLoading}/>
      </div>
      <div className="
      hidden
      lg:block
      py-4 ">
        <div className="flex justify-around items-center">
        
          <div className="   flex items-center w-full mx-10 ">
            <Link to={'/'} className="m-0 flex justify-center p-0 w-full ">
              <img
                src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
                alt="Logo"
                className="h-8 mr-4"
              />
            </Link>

            <NavLink to="/store" active={location.pathname === "/store"}>
              Store
            </NavLink>
            <NavLink to="/pc" active={location.pathname === "/pc"}>
              PC
            </NavLink>
            <NavLink to="/console" active={location.pathname === "/console"}>
              Console
            </NavLink>
            <NavLink to="/mobile" active={location.pathname === "/mobile"}>
              Mobile
            </NavLink>
            <NavLink
              to="/lifestyle"
              active={location.pathname === "/lifestyle"}
            >
              lifestyle
            </NavLink>
            <NavLink to="/services" active={location.pathname === "/services"}>
              Services
            </NavLink>
            <NavLink
              to="/community"
              active={location.pathname === "/community"}
            >
              Community
            </NavLink>
            <NavLink to="/support" active={location.pathname === "/support"}>
              Support
            </NavLink>
            <NavLink >
              {isSearchOn ?     <Search products={products} isLoading={isLoading} setIsSearchOn={setIsSearchOn}/> :   <IoSearchSharp onClick={()=>setIsSearchOn(true)} size={22} />}
         
        
            </NavLink>
            <NavLink>
              <RiShoppingCartLine onClick={handleCartPopup} size={22} />
              <CartPopover
                handleCartPopup={handleCartPopup}
                isCartOpen={isCartOpen}
              />
            </NavLink>
          </div>
        </div>
      </div>
      <hr className="border-1  border-green-500" />
    </nav>
  );
};

// Custom NavLink component to add an 'active' class based on the 'active' prop
export const NavLink = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`m-0 p-0 flex justify-center w-full hover:text-white ${
        active ? " text-white" : "text-gray-400"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
