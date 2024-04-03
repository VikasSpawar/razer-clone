    import React, { useEffect, useState } from "react";
    import { CgSearch } from "react-icons/cg";
    import { MdCancel } from "react-icons/md";
    import { Link } from "react-router-dom";
    import PdBoxForCart from "./PdBoxForCart";

    const SmallScreenSearchBox = ({ products, setIsSearchOn }) => {
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        // search function by name
        let arrayOfStrings = text.toLowerCase().split(" ");
        const filteredData = products.filter((product) => {
        return arrayOfStrings.every((word) => {
            return product.url.toLowerCase().includes(word);
        });
        });

        {
        text.length && setSearchedProducts(filteredData);
        }
    }, [products, text]);

    return (
        <div className="w-full">
        <div className="my-3 text-left mx-2 rounded-lg  px-3 align-middle  w-full flex bg-neutral-800">
            <CgSearch color="#999" className="m-auto" />
            <input
            className="w-full p-3 bg-transparent outline-none"
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Search Razer.com"
            />
            {text&&     <div className="flex px-4">
            <MdCancel onClick={() => setText("")} className="my-auto" size={22} />
            </div>}
       
        </div>

        {searchedProducts.length
            ? text && (
                <div className="searchList max-h-svh overflow-auto  p-4 bg-neutral-800">
                {searchedProducts?.map((product, i) => {
                    return (
                    <Link
                        onClick={() => setIsSearchOn(false)}
                        to={`/product/${product._id}`}
                    >
                        <PdBoxForCart
                        onClick={() => {}}
                        key={i}
                        buttonHidden={true}
                        product={product}
                        />
                    </Link>
                    );
                })}
                </div>
            )
            : null}
        </div>
    );
    };

    export default SmallScreenSearchBox;
