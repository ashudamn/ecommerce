
import { useSearchParams } from "react-router-dom";
import FormComponent from "./FormComponent";
import { useNavigate } from "react-router-dom"


function AddOrEditProduct() {
  const [searchParams,setSearchParams]=useSearchParams();
  const navigate=useNavigate();
  function successFullyAdded(data){
    navigate("/");
  }
  return (
    <div>
        <FormComponent operation={searchParams.get('operation')} onSuccessFullAdd={successFullyAdded}></FormComponent>
        </div>
  );
}

export default AddOrEditProduct;
