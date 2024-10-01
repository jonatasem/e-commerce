import React from 'react';
import { useSelector } from 'react-redux'; // Importar useSelector para acessar o estado
import { CiSearch } from "react-icons/ci";
import './Header.scss';
import cartImage from '../assets/svg/cart.svg';

const Header = ({ toggleCart }) => {
    const cartItems = useSelector(state => state.cart.items); // Acessa os itens do carrinho
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Calcula a quantidade total de itens

    return (
        <header className='container-header'>
            <h2>Head<span>set</span></h2>
            <section className="container-mobile">
                <nav>
                    <ul>
                        <li>
                            <div className="icon-cart">
                                <p>{totalItems > 0 ? totalItems : 0}</p>
                                <img 
                                    className='btn-cart' 
                                    onClick={toggleCart} 
                                    src={cartImage} 
                                    alt="logo cart" 
                                />
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;
