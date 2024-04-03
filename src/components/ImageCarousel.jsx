import React from "react";
import Carousel from "react-multi-carousel";
import { ButtonGroup, ButtonOne, ButtonTwo } from "./CustomNavigation";

let IA = [
  {
    url: "https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/razer-esports-vct-masters-store_desktop_1920x400.webp",
  },
  {
    url: "https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/blackdesert_campaign-page-banner_1920x400-(2).webp",
  },
  {
    url: "https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-web-banners.webp",
  },
  {
    url: "https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-(9).webp",
  },
];

const ImageCarousel = ({ ImagesArray=IA }) => {
  return (
    <div className="my-8">
      <Carousel
        draggable
        // arrows={false}
        customLeftArrow={<ButtonOne/>}
        customRightArrow={<ButtonTwo/>}
        // customButtonGroup={<ButtonGroup />}
       infinite
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={true}
        showDots
        swipeable
      >
        {ImagesArray.map((image, index) => {
          return (
            <div key={index}>
            <div
        className={`flex relative lg:flex-row flex-col  `}
      >
           <div className="">
                <img className="h-full bg-center  w-full" src={image.url} alt={image.alt} />
              </div>
        <div className="my-auto    lg:absolute static w-full h-full flex  justify-end right-32 p-8 ">
            <div className=" space-y-4 text-left flex flex-col justify-center">
                      <h2 className=" text-2xl font-bold text-white text-shadow-md clap">
            Razer Esports VCT Masters Store
            </h2>
          <p className="text-xl  text-white text-shadow-md">
            Razer mice, Keyborad
          </p>
          <p>
            <a href="">
              Shop Now{" "}
              <span className="before:content-['>'] text-green-500"></span>
            </a>
          </p>
            </div>
  
        </div>
      </div>
            </div>
          );
        })}

   
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
