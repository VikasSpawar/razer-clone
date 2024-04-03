import React, {  useEffect, useState } from 'react'
import PdBoxForCart from '../components/PdBoxForCart'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cart = () => {
    const api=import.meta.env.VITE_API
const [cart , setCart] = useState([])
const    [cartValue, setCartValue]=useState(0)
const [isLoading, setIsLoading]=useState(false)

const countCartValue=(cart)=>{
 let total=0
cart.forEach((el)=>{
   
    total+=el.price.value
})

setCartValue(total)
}



useEffect(()=>{
    setIsLoading(true)
    axios(`${api}/cart`).then((res)=>{

        setIsLoading(false)
        setCart(res.data)
        countCartValue(res.data)
    })

},[cart.length])


  return (
    <div>
        <div className='checkout w-[90%] m-auto'>
            <div className={` flex ${!cart.length&&'hidden'} justify-between p-8`}>
                <p className='text-xl font-bold'>US$ {Math.trunc(cartValue)}</p>
                <button  className='p-4 bg-[#44d62c] text-black rounded-sm'> Total {cart.length} Products</button>
            </div>

            {cart.map((el)=>{
                return <PdBoxForCart key={el._id} product={el} setCart={setCart} />
            })}
            {
                !cart.length&&isLoading?
                <div className='flex justify-center'>
                    <div className='m-4 w-[100px] h-[100px] border-[#44d62c]  border-t-4 rounded-full animate-spin'></div>
                </div> : <div className={`${cart.length&&'hidden'} max-w-56 mx-auto my-36 `}>
                <h2 className='text-xl'>Your cart is empty</h2>
                <p className='text-base leading-4 text-gray-400'>Fear not, have a look at our latest products and start shopping.</p>
                    <button className='bg-[#44D62C] rounded-sm m-4 px-6 py-4'>
                        <Link to='/store'> Shop Razer.com</Link>
                       </button>
                </div>
            }
        </div>
      
    </div>
  )
}

export default Cart
