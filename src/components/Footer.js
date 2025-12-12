import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';

const Footer = () => (
  <footer style={{
    backgroundColor: 'var(--primary-dark-blue)',
    color: 'var(--white)',
    padding: '20px 50px',
    textAlign: 'center',
    marginTop: '30px'
  }}>
    <p style={{ marginBottom: '10px' }}>
      Copyright © 2025 BRIN | SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic)
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      <Link 
        to="/privacy-policy" 
        style={{ color: 'var(--secondary-cyan)', textDecoration: 'none' }}
      >
        Kebijakan Privasi
      </Link>
      <span style={{ color: 'var(--white)' }}>|</span>
      <Link 
        to="/disclaimer" 
        style={{ color: 'var(--secondary-cyan)', textDecoration: 'none' }}
      >
        Disclaimer & Ketentuan
      </Link>
    </div>
  </footer>
);

export default Footer;