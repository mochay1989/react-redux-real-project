import { productsAddNewItem, productsChangeQuality } from '../type/productType';

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
