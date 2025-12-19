import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../redux/slices/language';
import { useTranslation } from '../utils/i18n';
import '../assets/style/ColorPalette.css';
import logoSpectra from '../assets/images/logo/logo-spectra.png';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { t, currentLanguage } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Check if current path matches maps-related routes
    const isMapsActive = location.pathname === '/maps' || 
                         location.pathname.startsWith('/dynamic-maps') || 
                         location.pathname.startsWith('/admin/maps');

    const handleLanguageToggle = () => {
        dispatch(toggleLanguage());
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    return (
        <header className="spectra-header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={logoSpectra} alt="SPECTRA Logo" className="logo-icon" />
                    </Link>
                </div>
                <div className="header-top">
                    <div className="logo">
                        <Link to="/" className="logo-link">
                            <img src={logoSpectra} alt="SPECTRA Logo" className="logo-icon" />
                        </Link>
                    </div>
                    <button 
                        className="hamburger-button"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-icon ${isMobileMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
                <div className={`header-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <nav className="nav">
                        <NavLink to="/" className="nav-link" end onClick={closeMobileMenu}>
                            {t('header.home')}
                        </NavLink>
                        <NavLink 
                            to="/maps" 
                            className={({ isActive }) => 
                                `nav-link ${isActive || isMapsActive ? 'active' : ''}`
                            }
                            onClick={closeMobileMenu}
                        >
                            {t('header.maps')}
                        </NavLink>
                        <NavLink to="/products" className="nav-link" onClick={closeMobileMenu}>{t('header.products')}</NavLink>
                        <NavLink to="/howto" className="nav-link" onClick={closeMobileMenu}>{t('header.services')}</NavLink>
                        <NavLink to="/profile" className="nav-link" onClick={closeMobileMenu}>{t('header.about')}</NavLink>
                    </nav>
                    <div className="header-actions">
                        <button className="btn-login">{t('header.login')}</button>
                        <button 
                            className="btn-lang" 
                            onClick={handleLanguageToggle}
                            title={currentLanguage === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                        >
                            <span className={currentLanguage === 'id' ? 'lang-active' : 'lang-inactive'}>ID</span> | <span className={currentLanguage === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
