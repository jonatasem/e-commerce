import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Preço: ${item.price}</p>
          <p>Quantidade: {item.quantity}</p>
          <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
          <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;