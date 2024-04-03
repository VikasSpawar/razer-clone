    import React from 'react'
import { useNavigate } from 'react-router-dom'

    let Menu = [
        {
            title:'Laptops',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.webp'
        },
        {
            title:'Gamers Room',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_gamer-room_icon_188x150.webp'
        },
        {
            title:'Mice',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png'
        },
        {
            title:'Keyboards',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.webp'
        },
        {
            title:'Headset',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.webp'
        },
        {
            title:'Content Creation',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.webp'
        },
        {
            title:'Chairs',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-enki-pro_lamborghini_80x150.webp'
        },
        {
            title:'Console',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.webp'
        },
        {
            title:'Mobile',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.webp'
        },
        {
            title:'Apparel & Gears',
            imgUrl:'https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/xanthus-tote-bag_2x.webp'
        },
    ]


    const MenuNavigation = () => {

        const navigate=useNavigate()
    
    const handleNavigation=(title)=>{
       let titleWithoutSpace=title.split(" ").join("")
        navigate(`/store/${titleWithoutSpace}`)
    }


    return (
        <div >
        <div className="menu-navigation  gap-1 snap-x [&>div]:snap-start   w-full  justify-between p-2 overflow-x-auto flex">
            {Menu.map((e,i) => {
            return (
                <div onClick={()=>handleNavigation(e.title)} key={i}  className="hover:text-[#44D62C] transition-all duration-100 menu-item text-center text-sm space-y-3 p-2 w-full min-w-[100px]">
                <div>
                    <img
                    className="h-[75px] m-auto"
                    src={e.imgUrl}
                    alt=""
                    />
                </div>
                <div>
                    <p>{e.title}</p>
                </div>
                </div>
            );
            })}
        </div>
    
        <div className="w-full flex-wrap gap-3 my-6 pl-4 text-left flex justify-between ">
            <div className="space-y-2">
            <h2 className="uppercase text-[#44D62C] text-4xl font-bold ">
                the latest and greatest gaming gear
            </h2>
            <p className="text-gray-400">
                Razer mice, Keyborad, headsets, laptops & more
            </p>
            </div>
            <div>
            <div className="flex  gap-2 p-1 w-[190px]">
                <img
                className="w-[30px]"
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/razerstore-icon.svg"
                alt=""
                />
                <p>
                {" "}
                Find a RazerStore near you{" "}
                <span
                    className="
            before:content-['>']
            before: text-green-500
            "
                ></span>{" "}
                </p>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export default MenuNavigation
