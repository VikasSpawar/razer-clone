import axios from 'axios'
// import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const PdBoxForCart = ({product , setCart , buttonHidden=false}) => {
const api=import.meta.env.VITE_API

    const handleRemoveFromCart=(action)=>{

        toast.promise(
             axios.delete(`${api}/cart/delete/${product._id}`).then((res)=>{
           
           
            setCart(res.data)
        }),
             {
               loading: `${action}...`,
               success: <b>Successful!</b>,
               error: <b>Could not Process!.</b>,
             }
           );
      

    }



return (
    <div>
    <div className='flex  text-right lg:text-center flex-wrap lg:flex-nowrap border-b border-[#555] w-full justify-between [&>div]:w-full  align-middle p-4'>
        <div className='product   m-auto flex h-28 align-middle '>
            <img className='w-28' src={product.images[0].url} alt="" />
            <h2 className='text-xl px-4 m-auto'>{product.baseProductName}</h2>
        </div>
        <div className='price  text-2xl px-4 my-auto'>
            <h2 className=''>{product.price.formattedValue}</h2>
        </div>
        <div className={`flex ${buttonHidden&&'hidden'} justify-end px-4`}>
            <div className='space-x-2'>

            <button onClick={()=>handleRemoveFromCart('Processing')} className='p-4 bg-[#44d62c] rounded-md text-black font-semibold'>Buy</button>
            <button onClick={()=>handleRemoveFromCart('Removing from cart')} className='p-4 bg-red-600 rounded-md'>Del</button>
            </div>
        </div>
    </div>
</div>

)
}

export default PdBoxForCart
