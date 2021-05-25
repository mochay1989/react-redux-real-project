import {
  productsAddNewItem,
  productsChangeQuality,
  changeProducts,
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
