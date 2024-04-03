import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./Navbar";
import { CgSearch } from "react-icons/cg";
import Search from "./Search";
import SmallScreenSearchBox from "./SmallScreenSearchBox";

const NavForSmallScreens = ({products ,isLoading }) => {

let location = useLocation()

const [isSidebarOpen, setIsSidebarOpen] = useState(false);


const handleSidebarPopup = () => {
setIsSidebarOpen(!isSidebarOpen);
};

useEffect(()=>{

    setIsSidebarOpen(false)

},[location])

return (
<div>
    <div className={`   flex px-4  py-2`}>
    <div onClick={handleSidebarPopup} className=" md:flex  background">
        <button
        className={`${
            isSidebarOpen ? "openedSidebar" : "closedSidebar"
        } menu__icon`}
        >
        <span></span>
        <span></span>
        <span></span>
        </button>
    </div>

    <div className="m-0 flex justify-end p-0 w-full ">
        <img
        src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
        alt="Logo"
        className="h-8 mr-4"
        />
    </div>
    </div>
    <div className="flex justify-around items-center  ">

    <div
        className={`${!isSidebarOpen&&'hidden'}  transition-all flex flex-col [&>a]:border-[#555] [&>a]:border-b [&>a]:p-5  w-full p-2 [&>a]:justify-start h-screen   text-left `
    }>   

    <SmallScreenSearchBox  products={products} isLoading={isLoading}/>
  

    

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
        <NavLink to="/lifestyle" active={location.pathname === "/lifestyle"}>
        lifestyle
        </NavLink>
        <NavLink to="/services" active={location.pathname === "/services"}>
        Services
        </NavLink>
        <NavLink to="/community" active={location.pathname === "/community"}>
        Community
        </NavLink>
        <NavLink to="/support" active={location.pathname === "/support"}>
        Support
        </NavLink>
        {/* <NavLink to="/cart" active={location.pathname === "/cart"}> */}
        {/* <IoSearchSharp size={22} /> */}
        {/* </NavLink> */}
        {/* <NavLink>
        <RiShoppingCartLine onClick={handleCartPopup} size={22} />
        <CartPopover
            handleCartPopup={handleCartPopup}
            isCartOpen={isCartOpen}
        />
        </NavLink> */}
    </div>
    </div>
  
</div>
);
};

export default NavForSmallScreens;
