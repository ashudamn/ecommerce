import { useSelector } from "react-redux";
import ProductCartItem from "./ProductCartItem";

function Cart(){
    const products=useSelector(state=>state.products);
    console.log(products);
    return (<>
    <div>Cart items</div>
    {
        products.map((productItem,index)=>{
            return <ProductCartItem product={productItem} key={index}></ProductCartItem>
        })
      }
    </>)
}

export default Cart;