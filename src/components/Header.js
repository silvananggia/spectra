import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';
import logoBrin from '../assets/images/logo/logo_brin.png';
const Header = () => {
    return (
        <header style={{
            backgroundColor: 'var(--primary-dark-blue)',
            color: 'var(--white)',
            padding: '15px 50px',
            display: 'flex',
            position: 'relative'
        }}>
            <div className="logo-section" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                <Link to="/" style={{
                    color: 'var(--white)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <img src={logoBrin} alt="logo" style={{ width: 'auto', height: '50px' }} />
                    <span style={{ textAlign: 'center' }}>SPECTRA</span>
                </Link>
            </div>

            <nav style={{ position: 'absolute', right: '50px' }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex'
                }}>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/" style={{ color: 'var(--white)', textDecoration: 'none' }}>Beranda</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/profile" style={{ color: 'var(--white)', textDecoration: 'none' }}>Tentang Kami</Link>
                    </li>
                    <li style={{ margin: '0 15px', fontWeight: 'bold' }}>
                        <Link to="/maps" style={{ color: 'var(--secondary-cyan)', textDecoration: 'none' }}>Produk Peta</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/products" style={{ color: 'var(--white)', textDecoration: 'none' }}>Produk</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/howto" style={{ color: 'var(--white)', textDecoration: 'none' }}>Services</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/contact" style={{ color: 'var(--white)', textDecoration: 'none' }}>Kontak</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;