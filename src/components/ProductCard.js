
import { useNavigate } from "react-router";
import "../styles/ProductCard.css";
import { useDispatch } from 'react-redux';
import { addProduct } from "../store/actions/productActions";

function ProductCard({product}){
    let navigate=useNavigate();
    let dispatch=useDispatch();
    function moveToDetailsPage(){
        navigate(`/productDetails/${product.id}`);
    }
    function addToCart(){
        
        dispatch(addProduct(product));
    }
    return (<>
        <div className="product-card-container">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-price">
                {product.price}
            </div>
            <div className="product-description">
                {product.description}
            </div>
            <div className="product-name">
                {product.name}
            </div>
            <div className="product-edit-delete">
                <button>edit</button>
                <button>delete</button>
            </div>
            <div className="product-details">
                <button onClick={moveToDetailsPage}>more-details</button>
            </div>
            <div className="product-add-to-cart">
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    </>)
}

export default ProductCard;