import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../components/Header.css';




const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo_accueil'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className='menu'>
                    <ul className='navbar'>
                        <li className='link'><Link to="/artisans">Batiments</Link></li>
                        <li className='link'><Link to="/artisans">Services</Link></li>
                        <li className='link'><Link to="/artisans">Fabrication</Link></li>
                        <li className='link'><Link to="/artisans">Alimentation</Link></li>
                    </ul>
                </div>
                <div className='searchBar'>
                    <SearchBar />
                </div>
            </nav>
        </header>
    );
}

export default Header;
