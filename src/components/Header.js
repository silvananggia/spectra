import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';
import logoSpectra from '../assets/images/logo/logo-spectra.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="spectra-header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={logoSpectra} alt="SPECTRA Logo" className="logo-icon" />
                    </Link>
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <Link to="/products" className="nav-link">Produk</Link>
                        <Link to="/howto" className="nav-link">Services</Link>
                        <Link to="/profile" className="nav-link">Tentang Spectra</Link>
                    </nav>
                    <div className="header-actions">
                        <button className="btn-login">Log In</button>
                        <button className="btn-lang">
                            <span className="lang-active">ID</span> | <span className="lang-inactive">EN</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
