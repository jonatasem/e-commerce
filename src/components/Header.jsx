import './Header.scss';

import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header className='container-header'>
            <h2>Head<span>set</span></h2>
            <section className="container-mobile">
                <nav>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>Produtos</p></li>
                        <li><p>Sobre</p></li>
                        <li><p>Contato</p></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;
