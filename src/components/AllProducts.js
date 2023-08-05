import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsService";
import ProductCard from "./ProductCard";
function AllProducts() {
    const [products,setProducts]=useState([]);
  useEffect(function () {
    getAllProducts()
      .then((result) => {
        console.log(result);
        setProducts([...result]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function sortProductListAscending(){
    const sortedList=products.sort((p1,p2)=>p1.price-p2.price);
    setProducts([...sortedList]);
  }
  function sortProductListDescending(){
    const sortedList=products.sort((p1,p2)=>p2.price-p1.price);
    setProducts([...sortedList]);
  }
  return (
    <>
      <h2>All Products</h2>
      <button onClick={sortProductListAscending}>SORT BY ASCENDING</button>
      <button onClick={sortProductListDescending}>SORT BY DESCENDING</button>
      {
        products.map((productItem,index)=>{
            return <ProductCard product={productItem} key={index}></ProductCard>
        })
      }
    </>
  );
}

export default AllProducts;
