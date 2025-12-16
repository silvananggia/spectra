import React from 'react';
import '../assets/style/ColorPalette.css';
import logoBrin from '../assets/images/logo/Logo BRIN_Lanscape_White.png';
import './Footer.scss';

const Footer = () => (
  <footer className="spectra-footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src={logoBrin} alt="BRIN Logo" className="footer-logo-img" />
      </div>
      <p className="footer-copyright">
        SPECTRA ©2025 by Pusat Riset Geoinformatika BRIN
      </p>
    </div>
  </footer>
);

export default Footer;
