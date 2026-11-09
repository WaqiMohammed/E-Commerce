import { useState } from 'react';
import { Heart, HeartPlus } from 'lucide-react';

const productcard = (props) => {
  const [IsFavourite, setIsFavourite] = useState(false)
  const [IsCart, setIsCart] = useState(false)

  const fav = () => {
    setIsFavourite(!IsFavourite)
  }
  const cart = () => {
    setIsCart(!IsCart)
  }
  return (
  <div className=' m-4 border-2 rounded-2xl overflow-hidden w-70 h-70'>
    <div className="relative h-70% w-full object-cover">
      <button onClick={fav} className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-gray-500 shadow-md">{IsFavourite ? (<Heart fill='red' color='red'/>) : (<HeartPlus />) }</button>
      <div className="w-full h-43 flex justify-center items-center">
        <img className='w-full h-full object-contain' src={props.thumbnail}  /* src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-webdonut-19090.jpg&fm=jpg" */ alt="product image" />
      </div>
    </div>

    <div className="ml-4">
        <h4 className=' text-sm font-sans' >{props.title}</h4>
        <p>${props.price}</p> 
    </div>
  
    <div className='flex justify-between gap-2'>
      <button onClick={cart} className='border-2 border-black p-2 rounded-3xl m-2  hover:bg-digital-blue-800 hover:text-white cursor-pointer '>{IsCart ? "Added to cart" : "Add to cart"}</button>
      <button className='border-2 border-black p-2 rounded-3xl m-2 hover:bg-digital-blue-800 hover:text-white cursor-pointer'>BUY NOW</button>
    </div>
  </div>
  )
}

export default productcard