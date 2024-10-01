import React from 'react';
import Product from './Product';

//scss
import './ProductList.scss';

// Imagens
import mouse from "../assets/img/products/mouse.jpg";
import mousepad from '../assets/img/products/mousepad.jpg';
import cadeira from '../assets/img/products/cadeira-gamer.jpg';
import fechadura from '../assets/img/products/fechadura.jpg';
import fone from '../assets/img/products/g0918.jpg';
import mancer from '../assets/img/products/mancer.jpg';
import rgb from '../assets/img/products/rgb.jpg';
import mcr from '../assets/img/products/mcr.jpg';

const products = [
  { id: 1, img: mouse, name: 'Mouse Gamer TGT Vector', price: 35 },
  { id: 2, img: mousepad, name: 'Mousepad Gamer Havit', price: 40 },
  { id: 3, img: cadeira, name: 'Cadeira Gamer Pichau', price: 860 },
  { id: 4, img: fechadura, name: 'Fechadura Smart Zinnia', price: 420 },
  { id: 5, img: fone, name: 'Headset Gamer TGT', price: 140 },
  { id: 6, img: mancer, name: 'Headset Gamer Mancer', price: 96 },
  { id: 7, img: rgb, name: 'Mouse Gamer TGT Vector', price: 155 },
  { id: 8, img: mcr, name: 'Cadeira Gamer Mancer', price: 960 }
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