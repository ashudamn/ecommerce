
import { useSearchParams } from "react-router-dom";
import FormComponent from "./FormComponent";


function AddOrEditProduct() {
  const [searchParams,setSearchParams]=useSearchParams();
  return (
    <div>
        <FormComponent operation={searchParams.get('operation')}></FormComponent>
        </div>
  );
}

export default AddOrEditProduct;
