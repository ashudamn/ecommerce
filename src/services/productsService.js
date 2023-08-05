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

export { getAllProducts,getProductById };
