function addProduct(product){
    return {
        type:"ADD_PRODUCT",
        payload:{
            product:product
        }
    }
}

function removeProduct(productId){
    return {
        type:"REMOVE_PRODUCT",
        payload:{
            productId:productId
        }
    }
}

export {removeProduct,addProduct};