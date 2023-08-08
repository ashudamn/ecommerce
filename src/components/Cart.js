import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function Cart() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>{
        products.length===0 && <div><h2>YOUR CART IS EMPTY</h2></div>
    }
    {products && products.length>0 &&
      <div>
        <h2>Cart items</h2>
        {products.map((productItem, index) => {
          return (
            <ProductItem
              product={productItem}
              key={index}
              showDeleteFromCart={true}
            ></ProductItem>
          );
        })}
      </div>
    }
    </>
  );
}

export default Cart;
