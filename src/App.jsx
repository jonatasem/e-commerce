import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import Home from './pages/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import cartImage from './assets/svg/cart.svg';

import Footer from './components/Footer';

const App = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para armazenar o termo de busca

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <Provider store={store}>
      <Header setSearchTerm={setSearchTerm} />
      <img className='btn-cart' onClick={toggleCart} src={cartImage} alt="logo cart" />
      <main>
        <Home />
        <ProductList searchTerm={searchTerm} /> {/* Passa o termo de busca para ProductList */}
        {isCartVisible && <Cart />}
      </main>
      <Footer />
    </Provider>
  );
};

export default App;