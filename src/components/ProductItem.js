import "../styles/ProductItem.css";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/actions/productActions";
import { useState } from "react";
import FormComponent from "./FormComponent";
import { deleteProduct } from "../services/productsService";
import { PRODUCT_ADDED_TO_CART, PRODUCT_REMOVED_FROM_CART,PRODUCT_DELETED, ERROR } from "../assets/constants";

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
    alert(PRODUCT_ADDED_TO_CART);
  }
  function deleteFromCart() {
    dispatch(removeProduct(product.id));
    alert(PRODUCT_REMOVED_FROM_CART);
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
            alert(PRODUCT_DELETED);
          setProductState(null);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(`${ERROR}:${error.message}`);
      });
  }
  return (
    <>
      {productState && (
        <div className="product-item-container">
         
            {showEditForm && (
               <div className="product-edit-container">
              <FormComponent
                operation={"edit"}
                initValues={{ ...productState }}
                onSuccessFullEdit={backToDetailView}
              ></FormComponent>
              </div>
            )}
          
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
                  <div className="product-edit btn-structure">
                    <button onClick={showEditProductComponent}>Edit</button>
                  </div>
                )}
                {showDelete && (
                  <div className="product-delete btn-structure">
                    <button onClick={deleteFromList}>Delete</button>
                  </div>
                )}
                {showDetailsPage && (
                  <div className="product-details btn-structure">
                    <button onClick={moveToDetailsPage}>More-Details</button>
                  </div>
                )}
                {showAddToCart && (
                  <div className="product-add-to-cart btn-structure">
                    <button onClick={addToCart}>Add To Cart</button>
                  </div>
                )}
                {showDeleteFromCart && (
                  <div className="product-delete-from-cart btn-structure">
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
