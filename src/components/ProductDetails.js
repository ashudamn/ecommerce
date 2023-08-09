import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";
import ProductItem from "./ProductItem";
import Loader from "./Loader";

function ProductDetails(){
    const params=useParams();
    const [product,setProduct]=useState();
    const [loading,setLoading]=useState(false);
    console.log(params);

    useEffect(function(){
        setLoading(true);
        getProductById(params.id)
        .then((data)=>{
            console.log(data);
            setLoading(false);
            if(data){
                data.rating=data.rating.rate;
                setProduct(data);
            }
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[params.id]);

    return (<>
    <h1>Product details</h1>
    {
        product && <ProductItem product={product} showAddToCart={true} />
    }
    {
        !product && loading && <Loader/>
    }
    </>)
}

export default ProductDetails;