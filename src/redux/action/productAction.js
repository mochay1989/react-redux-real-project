import {
  productsAddNewItem,
  productsChangeQuality,
  changeProducts,
  searchProducts,
  addToCart,
  addNewItem,
  changeItem,
  currentID
} from '../type/productType';

// export const addNewItem = (newItem) => {
//   return {
//     type: productsAddNewItem,
//     payload: newItem,
//   };
// };

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

export const searchText = (search) => {
  return {
    type: searchProducts,
    payload: search,
  };
};

export const addItemToCart = (item) => {
  return {
    type: addToCart,
    payload: item,
  };
};

export const changeItemToCart=(cItem)=>{
  return{
    type :  changeItem,
    payload:cItem
  }
}

export const currentIDid=(id)=>{
  return{
    type: currentID,
    payload:id
  }
}