import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeQuantity } from '../redux/cartSlice';
import './Cart.scss';

import emptyCart from '../assets/img/empty-cart.png';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
        <span>
          <h2 className='title-cart'>Carrinho</h2>
        </span>
        {cartItems.map(item => (
          <article className='card-item' key={item.id}>
            <img src={item.img} alt="imagem do produto" />
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
        <div className="container-total">
          <p className='total-value'>Total: ${totalValue.toFixed(2)}</p> {/* Exibir o valor total */}
        </div>
      </section>
    </>
  );
};

export default Cart;