import React from 'react';
import Product from './Product';
import './ProductList.scss';

import mouse from "../assets/img/products/mouse.jpg";
import mousepad from '../assets/img/products/mousepad.jpg';

const products = [
  {
    id: 1, 
    img: mouse,
    name: 'Mouse Gamer TGT Vector E1, Rainbow RGB',
    price: 35 
  },
  {
    id: 2,
    img: mousepad,
    name: 'Mousepad Gamer Havit 700x300x3mm', 
    price: 40 
  },
  {
    id: 1, 
    img: mouse,
    name: 'Mouse Gamer TGT Vector E1, Rainbow RGB',
    price: 35 
  },
  {
    id: 2,
    img: mousepad,
    name: 'Mousepad Gamer Havit 700x300x3mm', 
    price: 40 
  },
  {
    id: 1, 
    img: mouse,
    name: 'Mouse Gamer TGT Vector E1, Rainbow RGB',
    price: 35 
  },
  {
    id: 2,
    img: mousepad,
    name: 'Mousepad Gamer Havit 700x300x3mm', 
    price: 40 
  }
];

const ProductList = () => {
  return (
    <section className='container-productList'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;