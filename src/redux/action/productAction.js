import {
  productsAddNewItem,
  productsChangeQuality,
  changeProducts,
  searchProducts,
  cartDisplay
} from '../type/productType';

export const addNewItem = (newItem) => {
  return {
    type: productsAddNewItem,
    payload: newItem,
  };
};

export const changeQUantity = (changeQualtiy) => {
  return {
    type: productsChangeQuality,
    payload: changeQualtiy,
  };
};

export const setProducts = (products) => {
  return {
    type: changeProducts,
    payload: products,
  };
};

export const searchText=(search)=>{
  return { 
    type:searchProducts,
    payload : search,
}
}
export const cartShow=(cart)=>{
    return { 
      type: cartDisplay,
      payload :cart,
  }
  }
