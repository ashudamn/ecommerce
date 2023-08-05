import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
function AddProduct() {
  const validateProductSchema = Yup.object().shape({
    name: Yup.string().required("product name is required"),
    description: Yup.string().required("product description is required"),
    rating: Yup.number().min(0).max(5).required("rating is required"),
    price: Yup.number().min(1).required("price is required"),
  });
  return (
    <div>
      <div>Add Product</div>
      <Formik
        initialValues={{
          name: "",
          rating: 0,
          description: "",
          price: 0,
        }}
        validationSchema={validateProductSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <div>
            {console.log(props)}
            <Form>
              <div>
                <label htmlFor="name">Name:</label>
              </div>
              <div>
                <Field name="name" />
              </div>
              {
              props.errors.name && props.touched.name ? (
                <div>{props.errors.name}</div>
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
              <button type="submit">Add</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddProduct;
