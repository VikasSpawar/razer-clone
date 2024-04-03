import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PdBoxForListing = ({ product  }) => {

  const [isImgLoading, setIsImageLoading] = useState(true);
  const [badgeColor, setBadgeColor] = useState('');
  const navigation = useNavigate();
  const description = { __html: product.description };

 
 

  const handleLoading = () => {
    setIsImageLoading(false);
  };
  const handleRedirectToProduct = () => {
    navigation(`/product/${product._id}`);
  };

  useEffect(()=>{
    setBadgeColor(product.badge.color.toLowerCase())
  },[])
  return (
    <div
      onClick={handleRedirectToProduct}
      className={` h-full w-72 min-w-64 flex flex-col    border-2 transition-colors  border-transparent cursor-pointer ${
        badgeColor == `violet`||badgeColor == `green`
          ? "hover:border-[#44D62C]"
          : `hover:bg-${badgeColor}-500`
      } } `}
    >
      <div
        className={`  bg-[rgb(17,16,16)] ${isImgLoading && "animate-pulse "} `}
      >
        <img
          className="w-[298] pointer-events-none"
          src={product.images[1].url}
          onLoad={handleLoading}
          onError={handleLoading}
          alt="Img"
        />
      </div>

      <div className=" h-full flex flex-col px-4 py-3 text-left space-y-4 bg-[#222] min-h-48 justify-between">
        <div className="description space-y-3">
          <h3 className="text-lg ">{product.baseProductName}</h3>

          <p
            dangerouslySetInnerHTML={description}
            className="text-sm text-[#888] font-light leading-1 tracking-wide "
          >
            {/* {product.description} */}
          </p>
          <p className="text-sm font-light leading-3 text-[#fff]">
            Get a Razer USB-C 130W GaN Charger with selected GeForce RTX 40
            Series.*
          </p>
        </div>

        <div className="priceDiv flex justify-between">
          <p className="text-sm">
            From <br />
            US$2,199.99
          </p>
          <div className=" grid place-items-end">
            <button className=" font-extrabold uppercase text-sm rounded-md px-2 py-1  bg-[#44d62c] text-black">
              buy
            </button>
          </div>
        </div>
      </div>
      {badgeColor ?    <div
        
        className={`
     ${
       badgeColor == `violet`||badgeColor==`green`
         ? "bg-[#44D62C]"
        
         : `bg-${badgeColor}-500`
     }
     uppercase
     absolute
      text-lg
       text-black
        font-extrabold
        top-5
        -left-3
            badge
            px-3
            py-0
            `}
      >
        {product.badge.displayName}
      </div>: null}
   
    </div>
  );
};

export default PdBoxForListing;
