function ProductDetailsCard({ product }) {
  console.log(product);
  return (
    <>
      <div className="product-image">
        <img src={product.imageSrc} alt={product.name} />
      </div>

      <div className="product-name">
        <label>Name:</label> {product.name}
      </div>

      <div className="product-description">
        <label>Description:</label> {product.description}
      </div>

      <div className="product-price">
        <label>Price:</label> {product.price}
      </div>

      <div>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductDetailsCard;
