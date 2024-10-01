import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeQuantity } from '../redux/cartSlice';
import './Cart.scss';

import emptyCart from '../assets/img/empty-cart.png';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <>
        <section className='container-cart'>
          <h2 className='title-cart'>Carrinho</h2>
          <img className='empty' src={emptyCart} alt="carrinho vazio" />
          <a className='aviso' href="">Comprar Agora</a>
        </section>
      </>
    );
  }

  return (
    <>
      <section className='container-cart'>
        <h2 className='title-cart'>Carrinho</h2>
        {cartItems.map(item => (
          <article key={item.id}>
            <img src={item.img} alt="image do produto" />
            <h3>{item.name}</h3>
            <p className='value-cart'>Preço: ${item.price}</p>
            <p className='amount-cart'>Quantidade: {item.quantity}</p>
            <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => {
              if (item.quantity > 1) {
                dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }));
              }
            }}>-</button>
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remover</button>
          </article>
        ))}
      </section>
    </>
  );
};

export default Cart;