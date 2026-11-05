import NavBar from "./components/NavBar";
import CatagoryNav from "./components/CatagoryNav";
import ProductCard from "./components/ProductCard"
import axios from "axios";
import { useEffect , useState } from "react";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
      }catch (error) {
        console.log(error);
      }
    }
    getData()
  }, []);


  return (
    <div>
      <NavBar />
      <CatagoryNav />
      <div className="grid grid-cols-5 m-3">
      {products.map((elem) => {
        return (
          <ProductCard key={elem.id} title={elem.title} price={elem.price} thumbnail={elem.thumbnail} images={elem.images} />
        );
      })}
      </div>
    </div>
  );
}

export default App;
