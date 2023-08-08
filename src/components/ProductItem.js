import "../styles/ProductItem.css";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/actions/productActions";
import { useState } from "react";
import FormComponent from "./FormComponent";
import { deleteProduct } from "../services/productsService";

export default function ProductItem({
  product,
  showAddToCart,
  showDetailsPage,
  showDeleteFromCart,
  showDelete,
  showEdit,
}) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [productState, setProductState] = useState(product);
  let [showEditForm, setShowEditForm] = useState(false);
  function moveToDetailsPage() {
    navigate(`/productDetails/${product.id}`);
  }
  function showEditProductComponent() {
    setShowEditForm(true);
  }
  function addToCart() {
    dispatch(addProduct(product));
  }
  function deleteFromCart() {
    dispatch(removeProduct(product.id));
  }
  function backToDetailView(updatedProduct) {
    setProductState(updatedProduct);
    setShowEditForm(false);
  }
  function deleteFromList() {
    deleteProduct(productState.id)
      .then((result) => {
        console.log(result);
        if (result) {
            alert("product deleted");
          setProductState(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {productState && (
        <div>
          <div className="product-cart-container">
            {showEditForm && (
              <FormComponent
                operation={"edit"}
                initValues={{ ...productState }}
                onSuccessFullEdit={backToDetailView}
              ></FormComponent>
            )}
          </div>
          {!showEditForm && (
            <div className="product-container">
              <div className="product-image-container product-common">
                <label>Image:&nbsp;</label>
                <img alt="product" src={productState.image} />
              </div>
              <div className="product-common">
                <label>Name:&nbsp;</label>
                <span>{productState.title}</span>
              </div>
              <div className="product-common">
                <label>Description:&nbsp;</label>
                <span>{productState.description}</span>
              </div>
              <div className="product-common">
                <label>Price:&nbsp;</label>
                <span> {productState.price}</span>
              </div>

              <div className="rating product-common">
                <label>Rating:&nbsp;</label>
                <span> {productState.rating}</span>
              </div>

              <div className="product-actions">
                {showEdit && (
                  <div className="product-edit">
                    <button onClick={showEditProductComponent}>Edit</button>
                  </div>
                )}
                {showDelete && (
                  <div className="product-delete">
                    <button onClick={deleteFromList}>Delete</button>
                  </div>
                )}
                {showDetailsPage && (
                  <div className="product-details">
                    <button onClick={moveToDetailsPage}>More-Details</button>
                  </div>
                )}
                {showAddToCart && (
                  <div className="product-add-to-cart">
                    <button onClick={addToCart}>Add To Cart</button>
                  </div>
                )}
                {showDeleteFromCart && (
                  <div className="product-delete-from-cart">
                    <button onClick={deleteFromCart}>Delete From Cart</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
