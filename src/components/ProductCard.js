
import { useNavigate } from "react-router";
import "../styles/ProductCard.css";

function ProductCard({product}){
    let navigate=useNavigate();
    function moveToDetailsPage(){
        navigate(`/productDetails/${product.id}`);
    }
    return (<>
        <div className="product-card-container">
            <div className="product-image">
                <img src={product.imageSrc} alt={product.name} />
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
        </div>
    </>)
}

export default ProductCard;