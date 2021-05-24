import { products } from '../type/productType';
import { productsAddNewItem, productsChangeQuality } from '../type/productType';

const initialState = [
  {
    id: 1,
    title: 'aircon',
    Category: 'IT',
    image: './img/aircon.jpg',
    price: 500,
  },
  {
    id: 2,
    title: 'copier',
    Category: 'IT',
    image: './img/copier.jpg',
    price: 300,
  },
  {
    id: 3,
    title: 'firemachine',
    Category: 'Electric',
    image: 'img/firemachine.jpg',
    price: 200,
  },
  {
    id: 4,
    title: 'laptop',
    Category: 'IT',
    image: './img/laptop.jpg',
    price: 100,
  },
  {
    id: 5,
    title: 'phone',
    Category: 'IT',
    image: './img/phone.jpg',
    price: 50,
  },
  {
    id: 6,
    title: 'printer',
    Category: 'IT',
    image: './img/printer.jpg',
    price: 100,
  },
  {
    id: 7,
    title: 'Refrigera',
    Category: 'Electric',
    image: 'img/Refrigera.jpg',
    price: 50,
  },
  { id: 8, title: 'TV', Category: 'IT', image: './img/TV.jpg', price: 50 },
  {
    id: 9,
    title: 'washing',
    Category: 'Electric',
    image: './img/washing.jpg',
    price: 20,
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productsAddNewItem:
      return [...state, action.payload];
    default:
      return state;
  }
};
