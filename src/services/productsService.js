import { PRODUCTS_API } from "../assets/constants";

async function getAllProducts() {
  try {
    const response = await fetch(PRODUCTS_API);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getProductById(id){
  try{
    const response = await fetch(`${PRODUCTS_API}/${id}`);
    return response.json();
  }catch(error){
    console.log(error);
    throw error;
  }
}

async function createNewProduct(product){
  try{
    const response=await fetch(PRODUCTS_API,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product)
    });
    const result=await response.json();
    console.log(result);
    return result;
  }catch(error){
    console.log(error);
    throw error;
  }
}

export { getAllProducts,getProductById,createNewProduct };
