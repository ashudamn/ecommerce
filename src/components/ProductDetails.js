import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductDetails(){
    const params=useParams();
    const [product,setProduct]=useState({});
    console.log(params);
    useEffect(function(){
        getProductById(params.id)
        .then((data)=>{
            if(data){
                setProduct(data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    },[params.id]);
    return (<>
    <h1>Product details</h1>
    {
        product && <ProductDetailsCard product={product}/>
    }
    </>)
}

export default ProductDetails;