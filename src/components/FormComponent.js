import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import { createNewProduct, updateProduct } from "../services/productsService";

export default function FormComponent({operation,initValues,onSuccessFullEdit}){
    const validateProductSchema = Yup.object().shape({
        title: Yup.string().required("product title is required"),
        description: Yup.string().required("product description is required"),
        rating: Yup.number().min(0).max(5).required("rating is required"),
        price: Yup.number().min(1).required("price is required"),
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
        <div>
          <div>{operation} Product</div>
          <Formik
            initialValues={initValues}
            validationSchema={validateProductSchema}
            onSubmit={(values) => {
              console.log(values);
              if(operation==='edit'){
                updateProduct(values)
                .then(data=>{
                    console.log(data);
                    onSuccessFullEdit(data);
                    alert('updated success fully '+data.id);
                }).catch(error=>{
                    console.log(error);
                    alert('failed '+error);
                });
              }else{
              createNewProduct(values)
              .then(data=>{
                alert(`Added product with id ${JSON.stringify(data.id)}`);
              }).catch(error=>{
                console.log(error);
                alert(`Error: ${JSON.stringify(error)}`);
              });
            }
            }}
          >
            {(props) => (
              <div>
                {console.log(props)}
                <Form>
                  <div>
                    <label htmlFor="title">Title:</label>
                  </div>
                  <div>
                    <Field name="title" />
                  </div>
                  {
                  props.errors.title && props.touched.title ? (
                    <div>{props.errors.title}</div>
                  ) : null}
                  <div>
                    <label htmlFor="description">Description:</label>
                  </div>
                  <div>
                    <Field name="description" />
                  </div>
                  {
                  props.errors.description && props.touched.description ? (
                    <div>{props.errors.description}</div>
                  ) : null}
                  <div>
                    <label htmlFor="price">Price:</label>
                  </div>
                  <div>
                    <Field name="price" />
                  </div>
                  {
                  props.errors.price && props.touched.price ? (
                    <div>{props.errors.price}</div>
                  ) : null}
                  <div>
                    <label htmlFor="rating">Rating:</label>
                  </div>
                  <div>
                    <Field name="rating" />
                  </div>
                  {
                  props.errors.rating && props.touched.rating ? (
                    <div>{props.errors.rating}</div>
                  ) : null}
                  <button type="submit">{operation==='edit'?'Save':'Add'}</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      );
}