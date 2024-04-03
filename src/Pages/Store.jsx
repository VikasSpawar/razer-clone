import React, { useEffect, useState } from "react";
import PdBoxForListing from "../components/PdBoxForListing";

import ProductCarousel from "../components/Carousel";
import ImageCarousel from "../components/ImageCarousel";
import MenuNavigation from "../components/MenuNavigation";
import ProductHeading from "../components/ProductHeading";
import WhyToBuy from "../components/WhyToBuy";
import { useParams } from "react-router-dom";
import axios from "axios";

const Store = ({ products, isLoading }) => {
const api = import.meta.env.VITE_API;
const { category } = useParams();
const [categoryData, setCategoryData] = useState([]);
const [onLoading , setOnLoading]=useState(false)
useEffect(() => {
if (category) {
    setOnLoading(true)
    axios(`${api}/products/cat/${category}`).then(
    (res) => {
        setOnLoading(false)
        setCategoryData(res.data);
    }
    );
}
}, [category]);

return (
<div className="w-11/12 m-auto ">
    {/* Menu Navigation */}
    <MenuNavigation />

    {/* Product List */}

    <ProductHeading />

    <ProductCarousel>
    {category
        ? isLoading
        ? [1, 2, 3, 4].map(( i) => {
            return (
                <div
                key={i}
                className="animate-pulse bg-[#222]  w-72 min-h-96"
                ></div>
            );
            })
        : categoryData.map((el, i) => {
            return <PdBoxForListing key={i} product={el} />;
            })
        : isLoading
        ? [1, 2, 3, 4].map((el, i) => {
            return (
            <div
                key={i}
                className="animate-pulse bg-[#222]  w-72 min-h-96"
            ></div>
            );
        })
        : products.map((el, i) => {
            return <PdBoxForListing key={i} product={el} />;
        })}
    </ProductCarousel>
    {categoryData.length == 0 && category && (
    <div className="w-full h-64  m-auto">
        {" "}
        <p className="text-xl  font-bold my-auto ">products coming soon...</p>
{       onLoading&&<div className='m-4 w-[100px] h-[100px] mx-auto border-[#44d62c]  border-t-4 rounded-full animate-spin'></div>}
    </div>
    )}

    <ImageCarousel />
    <WhyToBuy />
</div>
);
};

export default Store;
