import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";
import ProductItem from "./ProductItem";

function ProductDetails(){
    const params=useParams();
    const [product,setProduct]=useState();
    console.log(params);

    useEffect(function(){
        getProductById(params.id)
        .then((data)=>{
            console.log(data);
            if(data){
                data.rating=data.rating.rate;
                setProduct(data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    },[params.id]);

    return (<>
    <h1>Product details</h1>
    {
        product && <ProductItem product={product} showAddToCart={true} />
    }
    </>)
}

export default ProductDetails;