import React from 'react'

const Header = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col items-center font-lora text-slate-600'>
        <span className='text-xl absolute top-20'>React &#38; Node</span>
        <span className='text-8xl absolute top-24'>Blog</span>
      </div>
      <img className='w-full h-96 object-cover' src="https://i.ibb.co/fDw1nph/header-img.jpg" alt="Header Image"/>
    </div>
  )
}

export default Header