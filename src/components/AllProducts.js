import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsService";
import ProductCard from "./ProductCard";
import { ERROR,API_RESULT,ASCENDING,DESCENDING,UNSORTED,NO_PRODUCTS_TO_SHOW } from "../assets/constants";
import Loader from "./Loader";
import "../styles/AllProducts.css";

function AllProducts() {
  const [products, setProducts] = useState(null);
  const [sorting, setSorting] = useState(UNSORTED);
  const [originalProducts, setOriginalProducts] = useState(null);
  const [loading,setLoading]=useState(false);
  useEffect(function () {
    setLoading(true);
    getAllProducts()
      .then((result) => {
        console.log(API_RESULT, result);
        result.forEach((product) => {
          product.rating = product.rating.rate;
        });
        setProducts([...result]);
        setOriginalProducts(result);
        setLoading(false);
      })
      .catch((err) => {
        alert(`${ERROR}  ${err.message}`);
        setProducts([]);
        setLoading(false);
        console.log(err);
      });
  }, []);
  function sortProductList() {
    let sortedList = [];
    if (sorting===UNSORTED || sorting === DESCENDING) {
      setSorting(ASCENDING);
      sortedList = products.sort((p1, p2) => p1.price - p2.price);
    } else if (sorting === ASCENDING) {
      setSorting(DESCENDING);
      sortedList = products.sort((p1, p2) => p2.price - p1.price);
    }
    setProducts(sortedList.slice());
  }
  function removeSort() {
    setSorting(UNSORTED);
    const copy = originalProducts.slice();
    setProducts(copy);
  }
  function isProductSorted(){
    return sorting!==UNSORTED;
  }
  return (
    <>
    {
      loading && <Loader/>
    }
      {products && products.length>0 && (
        <div className="all-products-container">
          <h2>All Products</h2>
          <div className="sort-container">
            <div>
          <button className="btn-sorted" onClick={sortProductList}>
            SORT BY PRICE&nbsp;({sorting ? sorting : UNSORTED})
          </button>
          </div>
          <div>
           {isProductSorted() && <button className="btn-sort-cancel" onClick={removeSort}>X</button>}
           </div>
          </div>
          {products.map((productItem, index) => {
            return (
              <ProductCard
                product={productItem}
                key={productItem.id}
              ></ProductCard>
            );
          })}
        </div>
      )}
      {
       products && products.length===0 && <div><h2>{NO_PRODUCTS_TO_SHOW}</h2></div>
      }
    </>
  );
}

export default AllProducts;
