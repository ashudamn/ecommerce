

import "../styles/ProductCard.css";
import ProductItem from "./ProductItem"

function ProductCard({product}){
   
    return (<>
        <div className="product-card-container">
        <ProductItem product={product} showAddToCart={true} showEdit={true} showDelete={true} showDetailsPage={true}/>
           
        </div>
    </>)
}

export default ProductCard;