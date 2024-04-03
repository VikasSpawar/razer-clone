import React, { useEffect, useState } from "react";

import axios from "axios";
import { BsBox2, BsCart, BsPerson } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { RiVipDiamondLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const CartPopover = ({ isCartOpen, handleCartPopup }) => {
  const api = import.meta.env.VITE_API;
  const [productsInCart, setProductsInCart] = useState([]);
  const navigation = useNavigate();

  const handleRedirect = () => {
    navigation(`/cart`);
  };

  useEffect(() => {
    axios.get(`${api}/cart`).then((res) => {
      setProductsInCart(res.data);
    });
  }, [productsInCart.length, isCartOpen]);

  return (
    <div className="flex   ml-[22px] justify-end ">
      {isCartOpen && (
        <div
          onClick={handleCartPopup}
          className=" absolute  h-screen w-full top-0 right-0"
        ></div>
      )}

      <div
        className={`
      ${!isCartOpen && "hidden"}
    before:bg-red-black
    before:border-l
    before:border-t
    before:border-gray-400
    before:rotate-45
    before:w-4
    before:h-4 
    before:absolute 
    before:top-[-10px]
    before:bg-[#222]
    bg-[#222]
    before:right-6
    before:z-20
    border-[1px]
     border-[#555]
     cartPopover 
     rounded-lg 
     max-w-72 
     min-w-64
    
     top-14
     z-40
     absolute
     `}
      >
        <div className="text-gray-400 border-b divide-y divide-[#555] py-6 mx-4 flex flex-col border-[#555] align-middle justify-center">
          {productsInCart.slice(0, 3).map((el) => {
            return (
              <div
                key={el._id}
                className="flex justify-between text-white text-sm my-1 text-left gap-4 "
              >
                {" "}
                <img
                  className={"h-12  w-12"}
                  src={el.images[0].url}
                  alt=""
                />{" "}
                <div className="my-auto w-full">
                  <p className="">{el.baseProductName}</p>{" "}
                </div>{" "}
              </div>
            );
          })}

          {productsInCart.length > 3 ? (
            <div>
              <div className="flex ">
                <hr className="flex border-gray-500 w-[20%] m-auto" />
                <p className="text-xs mx-1">
                  {" "}
                  {productsInCart.length - 3} more items in your cart
                </p>

                <hr className="flex border-gray-500 w-[20%] m-auto" />
              </div>
            </div>
          ) : null}

          {productsInCart.length === 0 ? (
            <p>Your Cart is empty.</p>
          ) : (
            <div>
              <button className="bg-[#44d62c] px-10 text-sm font-bold py-2 my-2 text-black rounded-sm">
                CHECKOUT
              </button>
            </div>
          )}
        </div>
        <div className="cartPopoverItems">
          <ul className="text-white [&>li]:py-3  flex flex-col text-left divide-[#555]  divide-y px-4">
            <li
              onClick={handleRedirect}
              className="hover:text-green-500 flex items-center space-x-2 py-2"
            >
              <Link to='/cart'>   <BsCart />
              <span>Cart</span>
              </Link>
           
            </li>
            <li className="hover:text-green-500 flex items-center space-x-2 py-2">
              <BsBox2 />
              <span></span>
              Orders
            </li>
            <li className="hover:text-green-500 flex items-center space-x-2 py-2">
              <BsPerson />
              <span>Account</span>
            </li>

            <li className="hover:text-green-500 flex items-center space-x-2 py-2">
              <RiVipDiamondLine />
              <span>RazerStore Rewards</span>
            </li>

            <li className="hover:text-green-500 pb-5 flex items-center space-x-2 py-2">
              <MdOutlineLogin />
              <span>Log In</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPopover;
