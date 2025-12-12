import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';

// Import JPG thumbnails
import longsorAcehThumb from '../assets/data/Longsor_Aceh_20251202_R2_AcehTengahAOI1.jpg';
import banjirAcehUtaraThumb from '../assets/data/Banjir_Aceh_2511201_R2_AcehUtara.jpg';
import banjirBireuenThumb from '../assets/data/Banjir_Aceh_251201_R2_Bireuen.jpg';
import banjirLhokseumaweThumb from '../assets/data/Banjir_Aceh_251130_R2_Lhokseumawe.jpg';

// Import PDF files
import longsorAcehPdf from '../assets/data/Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf';
import banjirAcehUtaraPdf from '../assets/data/Banjir_Aceh_2511201_R2_AcehUtara.pdf';
import banjirBireuenPdf from '../assets/data/Banjir_Aceh_251201_R2_Bireuen.pdf';
import banjirLhokseumawePdf from '../assets/data/Banjir_Aceh_251130_R2_Lhokseumawe.pdf';

// Import partner logos
import logoKemhan from '../assets/images/logo/logo_kemhan.png';
import logoLen from '../assets/images/logo/logo_len.png';
import logoBnpb from '../assets/images/logo/logo_bnpb.png';
import logoBlacksky from '../assets/images/logo/logo_blacksky.png';
import logoUnspider from '../assets/images/logo/unspider_logo.png';

// Import header image
import headerImage from '../assets/images/header.png';

const Home = () => {
    // State for image preview modal
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');

    // Function to handle image preview
    const handleImagePreview = (imageUrl, title) => {
        setPreviewImage(imageUrl);
        setPreviewTitle(title);
    };

    // Function to close preview modal
    const closePreview = () => {
        setPreviewImage(null);
        setPreviewTitle('');
    };

    // Close modal on ESC key press and prevent body scroll when modal is open
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && previewImage) {
                closePreview();
            }
        };
        
        if (previewImage) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        } else {
            // Restore body scroll when modal is closed
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [previewImage]);

    // Function to handle PDF download
    const handleDownload = (pdfUrl, filename) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Product data array
    const products = [
        {
            id: 1,
            thumbnail: longsorAcehThumb,
            pdf: longsorAcehPdf,
            title: 'Longsor Aceh - Aceh Tengah',
            date: '02 Des 2025',
            filename: 'Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf'
        },
        {
            id: 2,
            thumbnail: banjirAcehUtaraThumb,
            pdf: banjirAcehUtaraPdf,
            title: 'Banjir Aceh - Aceh Utara',
            date: '25 Nov 2025',
            filename: 'Banjir_Aceh_2511201_R2_AcehUtara.pdf'
        },
        {
            id: 3,
            thumbnail: banjirBireuenThumb,
            pdf: banjirBireuenPdf,
            title: 'Banjir Aceh - Bireuen',
            date: '01 Des 2025',
            filename: 'Banjir_Aceh_251201_R2_Bireuen.pdf'
        },
        {
            id: 4,
            thumbnail: banjirLhokseumaweThumb,
            pdf: banjirLhokseumawePdf,
            title: 'Banjir Aceh - Lhokseumawe',
            date: '30 Nov 2025',
            filename: 'Banjir_Aceh_251130_R2_Lhokseumawe.pdf'
        }
    ];

    return (
        <main>
            {/* 1. Hero Section */}
            <section className="hero" style={{
                height: '400px',
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'var(--white)',
                padding: '0 20px'
            }}>
                <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>
               Satellite Platform for Emergency Crisis, Tracking and Remote Analytic
                </h1>
                <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
                    Dukungan data geospasial cepat dan akurat untuk manajemen bencana nasional.
                </p>
                <Link to="/maps" className="btn-primary">Akses Peta Interaktif</Link>
            </section>

            {/* 2. Highlight Produk Terbaru */}
            <section className="product-highlight" style={{ padding: '50px', textAlign: 'center', backgroundColor: 'var(--bg-light-gray)' }}>
                <h2 style={{ marginBottom: '30px', color: 'var(--primary-dark-blue)' }}>Produk Peta Terbaru</h2>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="product-card" 
                            style={{ 
                                padding: '20px', 
                                backgroundColor: 'var(--white)', 
                                borderRadius: '8px', 
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                            }}
                        >
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                                style={{ 
                                    width: '100%', 
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px', 
                                    marginBottom: '10px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleImagePreview(product.thumbnail, product.title)}
                            />
                            <h3 style={{ color: 'var(--secondary-cyan)', marginBottom: '8px' }}>
                                {product.title}
                            </h3>
                            <p style={{ marginBottom: '10px', fontSize: '0.9em', color: '#666' }}>
                                Diperbarui: {product.date}
                            </p>
                            <button 
                                style={{
                                    backgroundColor: 'var(--primary-dark-blue)',
                                    color: 'var(--white)',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.9em',
                                    fontWeight: 'bold'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(product.pdf, product.filename);
                                }}
                            >
                                Download PDF
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Kolaborasi */}
            <section className="collaboration" style={{ padding: '30px 50px', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                <h2 style={{ color: 'var(--primary-dark-blue)', marginBottom: '40px' }}>Mitra Kolaborasi</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '50px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '120px',
                        padding: '20px'
                    }}>
                        <img 
                            src={logoKemhan} 
                            alt="Logo Kementerian Pertahanan" 
                            style={{
                                maxHeight: '100%',
                                maxWidth: '200px',
                                objectFit: 'contain',
                                filter: 'grayscale(0%)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '120px',
                        padding: '20px'
                    }}>
                        <img 
                            src={logoLen} 
                            alt="Logo LEN" 
                            style={{
                                maxHeight: '100%',
                                maxWidth: '200px',
                                objectFit: 'contain',
                                filter: 'grayscale(0%)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '120px',
                        padding: '20px'
                    }}>
                        <img 
                            src={logoBnpb} 
                            alt="Logo BNPB" 
                            style={{
                                maxHeight: '100%',
                                maxWidth: '200px',
                                objectFit: 'contain',
                                filter: 'grayscale(0%)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '120px',
                        padding: '20px'
                    }}>
                        <img 
                            src={logoBlacksky} 
                            alt="Logo BlackSky" 
                            style={{
                                maxHeight: '100%',
                                maxWidth: '200px',
                                objectFit: 'contain',
                                filter: 'grayscale(0%)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '120px',
                        padding: '20px'
                    }}>
                        <img 
                            src={logoUnspider} 
                            alt="Logo UN-SPIDER" 
                            style={{
                                maxHeight: '100%',
                                maxWidth: '200px',
                                objectFit: 'contain',
                                filter: 'grayscale(0%)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Image Preview Modal */}
            {previewImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        padding: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={closePreview}
                >
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePreview}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'var(--white)',
                                fontSize: '2em',
                                cursor: 'pointer',
                                padding: '5px 15px',
                                borderRadius: '4px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        
                        {/* Image Title */}
                        <h3
                            style={{
                                color: 'var(--white)',
                                marginBottom: '20px',
                                textAlign: 'center',
                                fontSize: '1.5em'
                            }}
                        >
                            {previewTitle}
                        </h3>
                        
                        {/* Preview Image */}
                        <img
                            src={previewImage}
                            alt={previewTitle}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '80vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                            }}
                        />
                        
                        {/* Instructions */}
                        <p
                            style={{
                                color: 'var(--white)',
                                marginTop: '20px',
                                fontSize: '0.9em',
                                opacity: 0.8
                            }}
                        >
                            Tekan ESC atau klik di luar gambar untuk menutup
                        </p>
                    </div>
                </div>
            )}

        </main>
    );
};

export default Home;