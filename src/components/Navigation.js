import { Link } from "react-router-dom"
function Navigation(){

    return(<>
        <div><Link to="/AddProduct">Add Product</Link></div>
        <div><Link to="/">All Products</Link></div>
        <div><Link to="/cart">Cart</Link></div>
    </>)
}

export default Navigation;