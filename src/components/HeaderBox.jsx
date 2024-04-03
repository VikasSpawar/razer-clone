import React from "react";

const HeaderBox = ({bgImage, heading , desc , link}) => {
  return (
    <div className="relative pb-3 bg-[#222]">
      <div className="h-full w-full z-1 ">
        <img
          className=" w-full object-cover object-bottom min-h-[700px]"
          src={bgImage}
          alt=""
        />
      </div>
      <div className="absolute top-0 z-2 flex justify-center w-full px-4 ">
        <div className="mt-24 flex gap-y-4 flex-col">
          <h2 className=" lg:text-[3.5rem] md:text-5xl sm:text-3xl font-bold uppercase max-w-[unset] text-white  ">
            {heading}
          </h2>
          <h2 className="text-[1.75rem] uppercase">{desc}</h2>
          <div className=" text-[1.31rem] leading-6 tracking-wide m-0 p-0">
            <a href="">
             {link}
              <div className="inline mx-1 absolute bottom-[-2px]">
                <span
                  className="text-green-500 before:content-['>']"
                ></span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <CommentBox setData={setData} originalData={data} commentsData={data} /> */}
      {/* <FakeStore  /> */}
      {/* <TrafficLight/> */}
    </div>
  );
};

export default HeaderBox;
