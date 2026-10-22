import { HeartPlus } from 'lucide-react';

const productcard = () => {
  return (
  <div className=' m-4 border-2 rounded-2xl overflow-hidden w-70 h-70'>
    <div className="relative h-70% w-full object-cover">
      <button className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-gray-500 shadow-md"><HeartPlus /></button>
      <div className="h-full w-full z-0 ">
        <img  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-webdonut-19090.jpg&fm=jpg" alt="" />
      </div>
    </div>

    <div className="ml-4">
        <h4 className='font-bold' >puma</h4>
        <p>$29</p> 
    </div>
  
    <div className='flex justify-between gap-2'>
      <button className='border-2 border-black p-2 rounded-3xl m-2  hover:bg-digital-blue-800 hover:text-white cursor-pointer '>Add to Cart</button>
      <button className='border-2 border-black p-2 rounded-3xl m-2 hover:bg-digital-blue-800 hover:text-white cursor-pointer'>BUY NOW</button>
    </div>
  </div>
  )
}

export default productcard