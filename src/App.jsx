import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Home />
        <ProductList />
      </main>
    </Provider>
  );
};

export default App;