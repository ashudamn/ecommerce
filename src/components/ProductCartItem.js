import "../styles/ProductCartItem.css"
export default function ProductCartItem({product}){

    return (<>
    <div className="product-cart-container">
        <div className="product-common">
            <label >Name:&nbsp;</label>
            <span>{product.title}</span>
        </div>
        <div  className="product-common">
            <label>Description:&nbsp;</label>
            <span>{product.description}</span>
        </div>
        <div  className="product-common">
            <label>Price:&nbsp;</label>
           <span> {product.price}</span>
        </div>
        <div className="product-image-container product-common">
            <label>Image:&nbsp;</label>
           <img alt="product" src={product.image}/>
        </div>
        <div className="rating product-common">
            <label>Rating:&nbsp;</label>
           <span> {product.rating.rate}</span>
        </div>
        </div>
    </>)
}