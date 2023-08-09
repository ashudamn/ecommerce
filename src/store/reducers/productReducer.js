export default function productReducer(state={products:[]},action){
    switch(action.type){
        case "ADD_PRODUCT":
            return {products:[...state.products,action.payload.product]};
        case "REMOVE_PRODUCT":
            const id=action.payload.productId;
            const existingProducts=state.products.filter(product=>product.id===id);

            if(existingProducts){
                existingProducts.pop();
                const filteredProducts=state.products.filter(product=>product.id!==id);
                return {products:filteredProducts.concat(existingProducts)};
            }
            return state; 
        default:
            return state;
    }
}