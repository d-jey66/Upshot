import React from 'react';
import Profile from '../assets/profile.png'



export default function Header1() {
  return (
    <div className="bg-blue-500 text-white flex justify-between items-center flex items-center justify-between bg-blue-500 text-white">
      <img src={Profile} alt="" className='w-[100%]' />
    </div>
  )
}

