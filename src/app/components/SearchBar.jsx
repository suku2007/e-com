import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useAppContext } from "./ContextProvider";
import { products as dataProducts } from "../data"; 
import Filter from "./Filter";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [popUp, setPopup] = useState(false);
   const {setProducts, productPrice, setProductPrice, productDiscount, setProductDiscount, productRating, setProductRating} = useAppContext();

  useEffect(()=>{
    const searchedProducts = dataProducts.filter((item, index)=> {
        const productName = item.name;
        if(productName.toLowerCase().includes(searchTerm.toLowerCase())){
            return item;
        };
    });

    setProducts(searchedProducts);
  }, [searchTerm])
  
  function handleShowFilter(){
    console.log('clickwed');
    setPopup(true);

  }
  function handleClearFilter(){
    setProducts(dataProducts);
    setProductPrice("");
    setProductDiscount(0);
    setProductRating(0);
  }

  return (
    <div className="flex items-center ml-auto gap-2 p-4 bg-white shadow-md rounded-xl w-full max-w-md">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-3 top-3 text-gray-500" />
        {/* <FaSearch  /> */}
      </div>
      <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick= {handleShowFilter}><FontAwesomeIcon icon={faFilter} /></button>
      {
        productPrice || productDiscount || productRating ?
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handleClearFilter}><FontAwesomeIcon icon={faXmark} /></button>
        : ""
      }
      {popUp && <div className={`fixed inset-0 grid  place-items-center backDropColor`}>
            <div className="relative">
                <button className="absolute top-3 right-3 bg-red-500 p-2 text-white rounded" onClick={()=>setPopup(false)}>X</button>
                <Filter/>
            </div>
            
            
      </div>}
    </div>
  );
};

export default SearchBar;
