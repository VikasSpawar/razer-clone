import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import PdBoxForCart from "./PdBoxForCart";
import { Link } from "react-router-dom";

const Search = ({products , setIsSearchOn}) => {
const [searchedProducts , setSearchedProducts]=useState([])
const [text,setText]=useState('')

useEffect(()=>{
  // search function by name
    let arrayOfStrings=text.toLowerCase().split(' ')
    const filteredData = products.filter((product)=>{
        return arrayOfStrings.every((word)=>{
            return product.url.toLowerCase().includes(word)
        })
    })

    {text.length&&setSearchedProducts(filteredData)}
    
},[products,text])


  return (
    <div className=" absolute w-[85%] top-0 left-32  h-full ">
      <div className={`  flex     h-full border-b ${searchedProducts.length? 'border-none' : 'border-green-600'}  `}>
        <div className=" flex justify-center p-4 bg-neutral-800 ">
          <IoSearchSharp className="my-auto" size={22} />
        </div>
        <div className=" bg-neutral-800  w-full flex justify-start align-middle">
          <input
            autoFocus
            className="my-auto bg-neutral-800 w-full h-10  outline-none"
            placeholder="Search for Products..."
            onChange={(e)=>setText(e.target.value)}
            value={text}
            type="text"
          />
          <div className="flex p-4">
            <MdCancel
              onClick={() => setIsSearchOn(false)}
              className="my-auto"
              size={22}
            />
          </div>
        </div>
      </div>

     { searchedProducts.length ? text&&<div className="searchList max-h-svh overflow-auto  p-4 bg-neutral-800">
        {searchedProducts?.map((product , i)=>{
          return <Link onClick={()=>setIsSearchOn(false)} to={`/product/${product._id}`}><PdBoxForCart onClick={()=>{}} key={i} buttonHidden={true} product={product} />
          </Link>
       })}
     
      </div> : null}
    </div>
  );
};

export default Search;
