import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';
import './Home.scss';

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

// Import partner logos (mitra folder)
import logoBlackSky from '../assets/images/logo/mitra/blacksky_logo_2021_blackyellow_web.jpg';
import logoInternationalCharter from '../assets/images/logo/mitra/InternationalCharterLogo4_0.jpg';
import logoKemhan from '../assets/images/logo/mitra/Kemhan.tiw3951-1024x1024.png';
import logoBnpb from '../assets/images/logo/mitra/Logo_BNPB.png';
import logoLen from '../assets/images/logo/mitra/Logo_Len_Industri_Baru.png';
import logoUndip from '../assets/images/logo/mitra/Logo_Universitas_Diponegoro.png';
import logoUnitSE from '../assets/images/logo/mitra/UnitSE_Posi_White.jpg';
import logoUgm from '../assets/images/logo/mitra/UNIVERSITAS_GADJAH_MADA,_YOGYAKARTA.png';
import logoUnspider from '../assets/images/logo/mitra/unspider_logo_resc.png';

const Home = () => {
    // State for image preview modal
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');

    // State for latest releases pagination
    const [releasePage, setReleasePage] = useState(0);
    const RELEASES_PER_PAGE = 3;

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
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        } else {
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
        }
    ];

    // Partner logos data (mitra logos)
    const partners = [
        { id: 1, logo: logoKemhan, alt: 'Logo Kementerian Pertahanan' },
        { id: 2, logo: logoLen, alt: 'Logo LEN Industri' },
        { id: 3, logo: logoBnpb, alt: 'Logo BNPB' },
        { id: 4, logo: logoBlackSky, alt: 'Logo BlackSky' },
        { id: 5, logo: logoUnspider, alt: 'Logo UN-SPIDER' },
        { id: 6, logo: logoInternationalCharter, alt: 'Logo International Charter' },
        { id: 7, logo: logoUndip, alt: 'Logo Universitas Diponegoro' },
        { id: 8, logo: logoUgm, alt: 'Logo Universitas Gadjah Mada' },
        { id: 9, logo: logoUnitSE, alt: 'Logo Unit SE Posi' }
    ];

    return (
        <main className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-heading">Near-Realtime. Open. Unlimited Insights</h1>
                        <p className="hero-description">
                            SPECTRA adalah Platform Satelit untuk Emergency Crisis Tracking dan Remote Analytics. 
                            Akses citra satelit berkualitas tinggi, terbarui secara berkala, dan near-realtime untuk 
                            monitoring bencana, penelitian, rapid response, dan pengambilan keputusan berbasis data.
                        </p>
                    </div>
                    <div className="search-form-container">
                        <div className="search-form">
                            <h2 className="search-form-title">Mulai jelajahi data citra</h2>
                            <div className="form-fields">
                                <div className="form-field">
                                    <label htmlFor="region">Nama Daerah</label>
                                    <input 
                                        type="text" 
                                        id="region" 
                                        placeholder="Masukkan nama daerah"
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="incident">Jenis Kejadian</label>
                                    <select id="incident" className="form-select">
                                        <option>Semua kejadian</option>
                                    </select>
                                </div>
                                <button className="btn-search">Cari Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Releases Section */}
            <section className="latest-releases">
                <div className="container">
                    <div className="latest-header">
                        <h2 className="section-heading">Rilisan Terbaru</h2>
                        <div className="releases-nav">
                            <button
                                type="button"
                                className="releases-nav-btn"
                                onClick={() => setReleasePage((prev) => Math.max(0, prev - 1))}
                                disabled={releasePage === 0}
                            >
                                ← Sebelumnya
                            </button>
                            <button
                                type="button"
                                className="releases-nav-btn"
                                onClick={() =>
                                    setReleasePage((prev) =>
                                        (prev + 1) * RELEASES_PER_PAGE >= products.length ? prev : prev + 1
                                    )
                                }
                                disabled={(releasePage + 1) * RELEASES_PER_PAGE >= products.length}
                            >
                                Selanjutnya →
                            </button>
                        </div>
                    </div>
                    <div className="releases-grid">
                        {products
                            .slice(
                                releasePage * RELEASES_PER_PAGE,
                                releasePage * RELEASES_PER_PAGE + RELEASES_PER_PAGE
                            )
                            .map((product) => (
                            <div key={product.id} className="release-card">
                                <div 
                                    className="card-image"
                                    onClick={() => handleImagePreview(product.thumbnail, product.title)}
                                >
                                    <img 
                                        src={product.thumbnail} 
                                        alt={product.title}
                                    />
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{product.title}</h3>
                                    <p className="card-text">
                                        Body text for whatever you'd like to say. Add main takeaway points, 
                                        quotes, anecdotes, or even a very very short story.
                                    </p>
                                    <button 
                                        className="btn-access"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDownload(product.pdf, product.filename);
                                        }}
                                    >
                                        Akses Data
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="interactive-map">
                <div className="map-overlay"></div>
                <div className="container map-container">
                    <div className="map-content">
                        <h2 className="map-heading">SPECTRA Interactive Map</h2>
                        <p className="map-description">
                            Lihat, zoom, analisis. Akses detail data dan informasi yang Anda butuhkan secara instan.
                        </p>
                    </div>
                    <Link to="/maps" className="btn-map-cta">Akses Sekarang →</Link>
                </div>
            </section>

            {/* Collaboration Partners Section */}
            <section className="partners">
                <div className="container">
                    <h2 className="section-heading partners-heading">Mitra Kolaborasi</h2>
                    <div className="partners-grid">
                        {partners.map((partner) => (
                            <div key={partner.id} className="partner-logo">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Preview Modal */}
            {previewImage && (
                <div className="preview-modal" onClick={closePreview}>
                    <div className="preview-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closePreview}
                            className="preview-close"
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        <h3 className="preview-title">{previewTitle}</h3>
                        <img
                            src={previewImage}
                            alt={previewTitle}
                            className="preview-image"
                        />
                        <p className="preview-instruction">
                            Tekan ESC atau klik di luar gambar untuk menutup
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;
