import React from 'react'

const ProductList = ({children}) => {


  return (
    <div className=" relative overflow-visible pdList select-none w-[104%]    flex    gap-8  ">
      
<div className='flex w-full  gap-8 overflow-hidden select-none'>

    {children}
</div>
    </div>
  )
}

export default ProductList
