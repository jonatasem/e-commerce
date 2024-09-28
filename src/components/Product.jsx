import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

import './Product.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: product.id, img: product.img, name: product.name, price: product.price, quantity: 1 }));
  };

  return (
    <>
      <section className='container-products' id='products'>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </section>
    </>
  );
};

export default Product;