import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import Home from './pages/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // estado inicial não visível
  const [isCartVisible, setCartVisible] = useState(false);

  // muda o estado do cart, seja ele qual for.
  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <Provider store={store}>
      <Header toggleCart={toggleCart} /> {/* Passando toggleCart aqui */}
      <main>
        <Home />
        <ProductList />
        {isCartVisible && <Cart onBack={toggleCart} />} {/* Passa a função onBack */}
      </main>
      <Footer />
    </Provider>
  );
};

export default App;