import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsService";
import ProductCard from "./ProductCard";
function AllProducts() {
  const [products, setProducts] = useState(null);
  const [sorting, setSorting] = useState(null);
  const [originalProducts, setOriginalProducts] = useState(null);
  useEffect(function () {
    getAllProducts()
      .then((result) => {
        console.log("API RESULT ", result);
        result.forEach((product) => {
          product.rating = product.rating.rate;
        });
        setProducts([...result]);
        setOriginalProducts(result);
      })
      .catch((err) => {
        alert("ERROR: " + err.message);
        console.log(err);
      });
  }, []);
  function sortProductList() {
    let sortedList = [];
    if (!sorting || sorting === "DESCENDING") {
      setSorting("ASCENDING");
      sortedList = products.sort((p1, p2) => p1.price - p2.price);
    } else if (sorting === "ASCENDING") {
      setSorting("DESCENDING");
      sortedList = products.sort((p1, p2) => p2.price - p1.price);
    }
    setProducts(sortedList.slice());
  }
  function removeSort() {
    setSorting(null);
    const copy = originalProducts.slice();
    setProducts(copy);
  }
  return (
    <>
      {products && (
        <div>
          <h2>All Products</h2>
          <button onClick={sortProductList}>
            SORT BY PRICE&nbsp;({sorting ? sorting : "UNSORTED"})
          </button>
          <button onClick={removeSort}>X</button>
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
        !products && <div><h2>NO PRODUCTS TO SHOW</h2></div>
      }
    </>
  );
}

export default AllProducts;
