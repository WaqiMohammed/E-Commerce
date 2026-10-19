import React from 'react'
import { Mic , User} from 'lucide-react';

const NavBar = () => {
  return (
    <div className='bg-digital-blue-950 text-digital-blue-50 p-5 flex justify-around items-center'>

      <div className='w-10 object-cover'>
        <img className='rounded-full' src="https://i.pinimg.com/736x/43/d4/c5/43d4c5920ea5256e9180aa0169c806fe.jpg" alt="" />
      </div>

      <div className='bg-digital-blue-50 text-black w-270  p-2 rounded-full flex justify-evenly'>
        <input className='w-full focus:outline-none' type="text" placeholder='Search product, brands and more...'/>
        <div className='cursor-pointer'><Mic /></div>
      </div>
      <div className='cursor-pointer border-2 p-2 rounded-full'><User /></div>
    </div>
  )
}

export default NavBar