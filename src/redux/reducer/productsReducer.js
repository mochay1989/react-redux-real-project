import { addToCart, products, changeItem } from '../type/productType';
import {
  productsAddNewItem,
  productsChangeQuality,
  changeProducts,
  searchProducts,
  cartDisplay,
} from '../type/productType';

export const initialState = [
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
export const allProducts = [
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

export const cart = [];

export const initialreducer = (state = initialState, action) => {
  switch (action.type) {
    // case productsAddNewItem:
    //   return [...state, action.payload];
    // case productsChangeQuality:
    //   return [
    //     state.map((product) =>
    //       product.id === action.payload
    //         ? { ...product, quantity: product.quantity + 1 }
    //         : product
    //     ),
    //   ];
    case changeProducts:
      return action.payload;
    case searchProducts:
      return action.payload;
    default:
      return state;
  }
};

export const cartreducer = (state = cart, action) => {
  switch (action.type) {
    case addToCart:
      return [...state, action.payload];

    case changeItem:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
