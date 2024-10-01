import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './Product.scss';
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(
      { 
        id: product.id, 
        img: product.img, 
        name: product.name, 
        price: product.price, 
        quantity: 1 
      }));

    const message = 'Adicionado com sucesso!';
    setNotification(message);
    setIsExiting(false); // Reseta a animação de saída

    // Define a classe de saída após 1 segundo
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setNotification(''); // Limpa a notificação completamente após a animação
      }, 500); // Tempo da animação de saída
    }, 1000); // Tempo antes de iniciar a animação de saída
  };

  return (
    <section className='container-products' id='products'>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p className='preco-item'>${product.price}</p>
      <button onClick={handleAddToCart}>
        Adicionar
        <FaCartPlus />
      </button>
      {notification && (
        <div className={`notification ${isExiting ? 'slide-out' : ''}`}>
          {notification}
        </div>
      )}
    </section>
  );
};

export default Product;