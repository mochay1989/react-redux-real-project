import productType from "../type/productType"

export const  productsAddNewItem=(newItem)=>{
    return{
        type: productsAddNewItem,
        payload: newItem
    }
}

export const  productsChangeQuality=(changeQualtiy)=>{
    return{
        type:productsChangeQuality,
        payload: changeQualtiy
    }
}