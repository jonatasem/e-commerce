import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeQuantity } from '../redux/cartSlice';
import { IoMdLogOut } from "react-icons/io";
import './Cart.scss';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <section className='container-cart'>
        <h2>Carrinho</h2>
        <p>O carrinho está vazio.</p>
        <a href="">Adicionar produtos</a>
      </section>
    );
  }

  return (
    <section className='container-cart'>
      <span className='exit-cart'>
        <IoMdLogOut />
      </span>
      <h2>Carrinho</h2>
      {cartItems.map(item => (
        <article key={item.id}>
          <h3>{item.name}</h3>
          <p>Preço: ${item.price}</p>
          <p>Quantidade: {item.quantity}</p>
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
  );
};

export default Cart;