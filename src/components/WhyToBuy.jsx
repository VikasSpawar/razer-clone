import React from "react";

const WhyToBuy = () => {
return (
<div className="m-4 p-4">
    <div className="m-6">
    <h2 className=" p-4  uppercase tracking-wide text-[#44D62C] text-4xl font-bold ">
        WHY BUY FROM RAZER.COM
    </h2>
    </div>
    <div className="w-full  justify-evenly [&>div]:w-full  [&>div>p]:text-xl  gap-8   grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-2">
        <div className="space-y-2 ">
        <img
        className="w-16 m-auto"
        src="//assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/first-dibs-icon.svg"
        alt=""
    
        />

        <div className="text-2xl font-bold">Get First Dibs</div>
        <p className="text-lg  text-[#999]">
        Razer.com is the only place where you can buy our most anticipated
        Razer gear immediately upon release.
        </p>
    </div>
    <div className="space-y-2 ">
        <img
        className="w-16 m-auto"
        src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/largest-array-icon.svg"
        alt=""
       
        />

        <div className="text-2xl font-bold">The Largest Array Of Razer Gear</div>
        <p className=" text-lg antialiased leading-tight text-[#999]">
        As Razer’s official online store, we hold a massive collection of products that can’t be matched anywhere else.
        </p>
    </div>
    <div className="space-y-2 ">
        <img
        className="w-16 m-auto"
        src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/exclusives-icon.svg"
        alt=""
        pnxssr_9=""
        />

        <div className="text-2xl font-bold">Exclusive Razer Gear And Swag</div>
        <p className="antialiased text-lg leading-tight text-[#999]">
        Get access to limited edition Razer gear that’s only available on Razer.com.
        </p>
    </div>
    <div className="space-y-2 ">
        <img
        className="w-16 m-auto"
        src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/buynow-paylater-icon.svg"
        alt=""
    
        />

        <div className="text-2xl font-bold">Play Now, Pay Later</div>
        <p className="antialiased  leading-tight text-[#999]">
        With our 0% installment plan, spend more time gaming with your sweet new gear and less time fussing over payment.
        </p>
    </div>
    </div>
</div>
);
};

export default WhyToBuy;
