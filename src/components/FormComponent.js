import { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import { createNewProduct, updateProduct } from "../services/productsService";
import { ADDED_SUCCESSFUL, ERROR, FAILED, UPDATE_SUCCESSFUL } from "../assets/constants";

import "../styles/FormComponent.css";

export default function FormComponent({operation,initValues,onSuccessFullEdit,onSuccessFullAdd}){
   const[isSubmitted,setIsSubmitted]=useState(false);
    const validateProductSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        rating: Yup.number().min(0).max(5).required("Rating is required"),
        price: Yup.number().min(1).required("Price is required"),
      });
      if(!initValues){
        initValues={
            title: "",
            rating: 0,
            description: "",
            price: 0,
          }
      }
      return (
        <div className="add-edit-container">
          <div>{operation} Product</div>
          <Formik
            initialValues={initValues}
            validationSchema={validateProductSchema}
            onSubmit={(values) => {
              setIsSubmitted(true);
              console.log(values);
              if(operation==='edit'){
                updateProduct(values)
                .then(data=>{
                    console.log(data);
                    onSuccessFullEdit(data);
                    alert(UPDATE_SUCCESSFUL+data.id);
                }).catch(error=>{
                    console.log(error);
                    alert(`${FAILED} ${error.message}`);
                });
              }else{
              createNewProduct(values)
              .then(data=>{
                alert(`${ADDED_SUCCESSFUL} ${JSON.stringify(data.id)}`);
                onSuccessFullAdd(data);
              }).catch(error=>{
                console.log(error);
                alert(`${ERROR}: ${JSON.stringify(error)}`);
              });
            }
            }}
          >
            {(props) => (
              <div className="form-container">
                {console.log(props)}
                <Form>
                  <div>
                    <label htmlFor="title">Title*</label>
                  </div>
                  <div>
                    <Field name="title" className="text-field" disabled={isSubmitted}/>
                  </div>
                  {
                  props.errors.title && props.touched.title ? (
                    <div className="field-errors">{props.errors.title}</div>
                  ) : null}
                  <div>
                    <label htmlFor="description">Description*</label>
                  </div>
                  <div>
                    <Field name="description"  className="text-field" disabled={isSubmitted}/>
                  </div>
                  {
                  props.errors.description && props.touched.description ? (
                    <div className="field-errors">{props.errors.description}</div>
                  ) : null}
                  <div>
                    <label htmlFor="price">Price*</label>
                  </div>
                  <div>
                    <Field name="price"  className="text-field" disabled={isSubmitted}/>
                  </div>
                  {
                  props.errors.price && props.touched.price ? (
                    <div className="field-errors">{props.errors.price}</div>
                  ) : null}
                  <div>
                    <label htmlFor="rating">Rating*</label>
                  </div>
                  <div>
                    <Field name="rating"  className="text-field" disabled={isSubmitted}/>
                  </div>
                  {
                  props.errors.rating && props.touched.rating ? (
                    <div className="field-errors">{props.errors.rating}</div>
                  ) : null}
                  <div>
                  <button type="submit" disabled={isSubmitted}>{operation==='edit'?'Save':'Add'}</button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      );
}