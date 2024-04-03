import React from 'react'

const Notification = ({msg}) => {
  return (
    <div className='py-3 bg-neutral-600 text-center tracking-wide'>
      <a className=''>{msg}</a>
    </div>
  )
}

export default Notification
