import React, { useState } from "react";

const LabelsForFooter = ({title , linkArray}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex-1 border-b lg:border-none border-[#555] text-left">
      <div  onClick={() => setExpanded((prev) => !prev)} className="flex justify-between">
        <button
          className="text-white px-3 py-4 md:text-lg sm:text-lg"
          htmlFor=""
        >
          {title}
        </button>
        <button
         
          className="lg:hidden px-4 mx-4"
        >
       
          <svg
           
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${expanded ? '-rotate-[225deg]' : ''} transition-transform`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <ul
        className={` ${
          !expanded ? "h-0 " : " h-72"
        } lg:h-72  overflow-hidden transition-all duration-300 text-left px-3 space-y-4 [&>li:hover]:underline [&>li:hover]:text-white cursor-pointer  text-gray-400`}
      >
        {linkArray.map((el)=>{
         return  <li key={el}>{el}</li>
        })}

      </ul>
    </div>
  );
};

export default LabelsForFooter;
