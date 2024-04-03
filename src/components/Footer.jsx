import React from "react";
import LabelsForFooter from "./LabelsForFooter";

let footerData = [
  {
    id: 1,
    title: "Shop",
    linkArray: [
      "RazerStores",
      "RazerCafe",
      "Store Locator",
      "Purchase Program",
      "Bulk Order",
      "Education",
      "Exlusive",
      "RazerStore Rewards",
      "Newsletter",
    ],
  },
  {
    id: 2,
    title: "Explore",
    linkArray: ["Technology", "Chroma RGB", "Consepts", "Esports", "Collabs"],
  },
  {
    id: 3,
    title: "Support",
    linkArray: [
      "Get Help",
      "Registration & Warrenty",
      "RazerStore Support",
      "Razercare",
      "Manage Razer ID",
      "support Videos",
      "Accessibility Statement",
    ],
  },
  {
    id: 4,
    title: "Company",
    linkArray: ["About Us", "Careers", "Newsroom", "zVentures", "Contact Us"],
  },
];

const Footer = () => {
  return (
    <div className="text-xs py-4 p-6     bg-neutral-900 w-full  ">
      <div className="   flex   m-auto w-11/12 md:flex-col flex-col lg:flex-row sm:flex-col">
        {footerData.map((el) => {
          return (
            <LabelsForFooter
              key={el.id}
              title={el.title}
              linkArray={el.linkArray}
            />
          );
        })}

        {/* <LabelsForFooter /> */}

        <div className="flex-[25%] m-0 p-0 text-right ">
          <p className="text-[#44d62c] text-base lg:text-right text-center ">
            FOR GAMERS. BY GAMERS.™
          </p>
          
        </div>
      </div>
      <hr className="border border-[#555] my-4 " />
      <div className="flex w-11/12 text-gray-400 text-base lg:flex-row flex-col px-1  justify-between m-auto mb-4 text-nowrap space-y-2 ">
        <div className="flex lg:flex-row md:flex-row flex-col m-auto lg:m-0">
          <div>
            <p className="text-white  lg:text-gray-400">
              Copyright © 2024 Razer Inc. All rights reserved.
            </p>
          </div>
          <div className="divide-x-2 divide-[#555] flex [&>p]:px-4">
            <p>Site Map</p>
            <p>Legal Term</p>

            <p>Legal Term</p>
            <p>Legal Term</p>
          </div>
        </div>
        <div className="flex divide-x-2 divide-slate-500 gap-2 m-auto">
          <p>United States</p>

          <p className="px-2">Change Location</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
