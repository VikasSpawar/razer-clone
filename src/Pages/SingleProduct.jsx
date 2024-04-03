import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
    const api = import.meta.env.VITE_API
const [product, setProduct] = useState({});
const [loading , setLoading]=useState(false)
const { id } = useParams();

let desc = { __html: product.description };

const handleAddToCart = () => {
    toast.promise(
     axios.post(`${api}/cart/add`, {
    product,
    })
    .then((res) => {

    }),
         {
           loading: 'Adding to cart...',
           success: <b>Product is added to cart!</b>,
           error: <b>already added.</b>,
         }
       );

};
useEffect(() => {
    setLoading(true)
axios(`${api}/products/${id}`).then((res) => {
    setLoading(false)
    setProduct(res.data);
});
}, []);

return (
<div className={loading&&`min-h-screen animate-pulse bg-[#222]`}>
    {product.badge && (
    <div>
        {" "}
        <div className="product  gap-2">
        <h2 className="text-2xl bold text-left px-4 bg-[#222] py-2">
            Razer Blade 14
        </h2>
        <div className="flex gap-8 p-6 [&>div]:w-full flex-col lg:flex-row">
            <div className="img p-6  size-96">
            <img
                className="h-full m-auto bg-[#222]"
                loading="lazy"
                src={product?.images[1].url}
                alt=""
            />
            </div>
            <div className="descriptions text-left flex flex-col m-auto   gap-10">
            <div>
                <div
                className={`uppercase
                    text-lg
    text-black
    ont-extrabold
    w-fit
badge
    px-3
    py-1
    ${product.badge.color == "Violet" ? "bg-[#44D62C]" : "bg-yellow-600"}
    `}
                >
                {product.badge.displayName}
                </div>
                <h1 className="text-4xl bold py-4">
                {product.baseProductName}
                </h1>

                <p
                dangerouslySetInnerHTML={desc}
                className="flex flex-col  leading-6 "
                ></p>
            </div>
            <hr className="border-[#44D62C]" />
            <div className="flex justify-between">
                <h2 className="text-4xl font-extrabold ">
                {product.price.formattedValue}
                </h2>
                <div className="">
                <button
                    onClick={handleAddToCart}
                    className="rounded-md p-2 px-8 bg-[#44D62C] bold text-lg text-black"
                >
                    Add To Cart
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="addToCart w-full border-t border-[#44D62C] flex justify-between bg-[#222]">
        <div className=" w-full  align-middle text-center gap-4 py-6 px-4  ">
            <div className="m-auto">
            <Link to={"/cart"}>
                <button className="rounded-md p-2 px-8 bg-[#44d62c] bold text-lg text-black">
                GO TO CART
                </button>
            </Link>
            </div>
        </div>
        </div>
    </div>
    )}
</div>
);
};

export default SingleProduct;
