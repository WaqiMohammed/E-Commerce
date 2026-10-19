import {useState, useEffect} from 'react'

const CatagoryNav = () => {
  const [categories, setcategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("beauty")

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories?sortBy=category&order=asc')
    .then((res)=>res.json())
    .then((json)=>{
      const tencategories = json.slice(0,10)
    setcategories(tencategories);
    })   
  }, [])

  useEffect(() => {
    if(!selectedCategory) return;
    fetch(`https://dummyjson.com/{selectedCategory}`)
      .then((res) => res.json())
      .then((json) => setProducts(json.products || [])) 
      .catch((err) => console.error("Error fetching products:", err));
  }, [selectedCategory]); 
  

  

  return (
    <div>
     <div className='flex justify-center gap-10'>
       {categories.map((category)=>(
        <button key={category.slug} class='text-digital-blue-300'
        onClick={()=>setSelectedCategory(category.slug)}>
          {category.name}
          
        </button>
      ))}
      
     </div>
     <div>
        CATEGORY : {selectedCategory.replace("-"," ")}
      </div>
     </div>
     
  )
}

export default CatagoryNav