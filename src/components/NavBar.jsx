import React from 'react'
import { Mic , User} from 'lucide-react';

const NavBar = () => {
  return (
    <div className='bg-digital-blue-950 text-digital-blue-50 p-5 flex justify-around items-center'>

      <div className='size-auto object-cover'>
        <img className='rounded-full' src="" alt="Zaraiya logo" />
      </div>

      <div className='bg-digital-blue-50 text-digital-blue-900 w-270  p-2 rounded-full flex justify-evenly'>
        <input className='w-full focus:outline-none' type="text" placeholder='Search product, brands and more...'/>
        <div className='cursor-pointer'><Mic /></div>
      </div>
      <div className='cursor-pointer border-2 p-2 rounded-full'><User /></div>
    </div>
  )
}

export default NavBar