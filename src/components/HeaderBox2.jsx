import React from 'react'
import HeaderBox from './HeaderBox'
let data=[
  {
    bgImage:'https://assets2.razerzone.com/images/pnx.assets/89acc66caa02feac3530c8d538b16d4f/razer-iskur-v2-homepage-b-950x580-desktop.webp',
    heading:"Razer iskur v2",
    desc:'perfect gaming form',
    link:"Learn More"
  },
  {
    bgImage:'https://assets2.razerzone.com/images/pnx.assets/89acc66caa02feac3530c8d538b16d4f/razer-blade16-2024-b-950x580-desktop.webp',
    heading:"New Razer blade 16",
    desc:'fastest.Sharp.Clearest.',
    link:"shop now"

  }
]
const HeaderBox2 = ({bgImage , heading , desc , link}) => {


  return (
    <div className='flex bg-[#222] w-full [&<div]:w-full space-x-3'>
      <HeaderBox {...data[0]}/>
      <HeaderBox {...data[1]}/>
    </div>
  )
}

export default HeaderBox2
