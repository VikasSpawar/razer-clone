import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup, ButtonOne, ButtonTwo } from "./CustomNavigation";

const ProductCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1123, min: 881 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 882, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" relative my-8 w-[109%] -ml-[4.5%]">
      <Carousel
        showDots={false}
        customLeftArrow={<ButtonOne />}
        customRightArrow={<ButtonTwo />}
        className="select-none "
        swipeable
        sliderClass="pl-16 "
       
        responsive={responsive}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
