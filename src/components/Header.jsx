import './Header.scss';
import { CiSearch } from "react-icons/ci";

const Header = ({ setSearchTerm }) => { // Recebe a função como prop
    return (
        <header className='container-header'>
            <h2>Head<span>set</span></h2>
            <section className="container-mobile">
                <nav>
                    <ul>
                        <li>
                            <div className="search-container">
                                <input 
                                    type="text" 
                                    name="search" 
                                    id="search" 
                                    placeholder='Pesquise um produto...' 
                                    className="search-input"
                                    onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                                />
                                <span className='icon-search'>
                                    <CiSearch />
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;