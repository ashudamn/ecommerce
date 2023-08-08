import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import "../styles/Navigation.css";
function Navigation(){
    const products=useSelector(state=>state.products);
    const navigate=useNavigate();
    function navigateToAddProduct(){
        navigate("/AddOrEditProduct?operation=Add");
    }
    function navigateToHome(){
        navigate("/");
    }
    function navigateToCart(){
        navigate("/cart");
    }
    return(<>
        <div className="nav-container">
        <div className="nav-to-left-end">
        <div className="nav-link-container" onClick={navigateToHome}>All Products</div>
        <div className="nav-link-container" onClick={navigateToAddProduct}>Add Product</div>
        </div>
        <div className="nav-to-right-end">
        <div className="nav-link-container" onClick={navigateToCart}>Cart({products.length})</div>
        </div>
        </div>
    </>)
}

export default Navigation;