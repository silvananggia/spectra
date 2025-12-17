import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/ColorPalette.css';
import './Home.scss';
import axiosInstance from '../api/axios';

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
    const navigate = useNavigate();
    
    // State for image preview modal
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');

    // State for latest releases pagination
    const [releasePage, setReleasePage] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const RELEASES_PER_PAGE = 3;

    // State for search form
    const [regionSearch, setRegionSearch] = useState('');
    const [eventTypeSearch, setEventTypeSearch] = useState('Semua kejadian');

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
    const handleDownload = (productId, filename) => {
        const downloadUrl = `${process.env.REACT_APP_API_URL || ''}/products/${productId}/download`;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to format date to Indonesian format (DD Month YYYY)
    const formatDate = (dateString) => {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString; // Return original if invalid date
        
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${day} ${month} ${year}`;
    };

    // Function to handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        // Build query parameters
        const params = new URLSearchParams();
        if (regionSearch && regionSearch.trim() !== '') {
            params.append('region', regionSearch.trim());
        }
        if (eventTypeSearch && eventTypeSearch !== 'Semua kejadian') {
            params.append('category', eventTypeSearch);
        }
        
        // Navigate to products page with query parameters
        const queryString = params.toString();
        navigate(`/products${queryString ? `?${queryString}` : ''}`);
    };

    // Fetch latest products from API
    useEffect(() => {
        const fetchLatestProducts = async () => {
            try {
                setLoading(true);
                // Fetch latest 3 products (or more for pagination)
                const response = await axiosInstance.get('/products', {
                    params: {
                        page: 1,
                        limit: 10 // Fetch more to allow pagination
                    }
                });
                
                if (response.data.status === 'success' && response.data.data) {
                    // Transform API data to match component format
                    const fetchedProducts = response.data.data.map(product => {
                        // Construct thumbnail URL from backend
                        // Use preview endpoint which serves thumbnail if available, otherwise main file
                        const thumbnailUrl = product.thumbnail 
                            ? `${process.env.REACT_APP_API_URL || ''}/products/${product.id}/preview`
                            : null;
                        
                        // Format date for display
                        const dateStr = product.date || '';
                        
                        return {
                            id: product.id,
                            thumbnail: thumbnailUrl,
                            title: product.title || 'Untitled',
                            date: dateStr,
                            filename: product.filename || ''
                        };
                    });
                    setProducts(fetchedProducts);
                }
            } catch (err) {
                console.error('Error fetching latest products:', err);
                // Set empty array on error to prevent crashes
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestProducts();
    }, []);

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
                        <form className="search-form" onSubmit={handleSearchSubmit}>
                            <h2 className="search-form-title">Mulai jelajahi data citra</h2>
                            <div className="form-fields">
                                <div className="form-field">
                                    <label htmlFor="region">Nama Daerah</label>
                                    <input 
                                        type="text" 
                                        id="region" 
                                        value={regionSearch}
                                        onChange={(e) => setRegionSearch(e.target.value)}
                                        placeholder="Masukkan nama daerah"
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="incident">Jenis Kejadian</label>
                                    <select 
                                        id="incident" 
                                        value={eventTypeSearch}
                                        onChange={(e) => setEventTypeSearch(e.target.value)}
                                        className="form-select"
                                    >
                                        <option>Semua kejadian</option>
                                        <option>Banjir</option>
                                        <option>Longsor</option>
                                        <option>QR</option>
                                        <option>PCS</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-search">Cari Data</button>
                            </div>
                        </form>
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
                                disabled={loading || (releasePage + 1) * RELEASES_PER_PAGE >= products.length}
                            >
                                Selanjutnya →
                            </button>
                        </div>
                    </div>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <p>Memuat produk terbaru...</p>
                        </div>
                    ) : (
                        <div className="releases-grid">
                            {products.length > 0 ? (
                                products
                                    .slice(
                                        releasePage * RELEASES_PER_PAGE,
                                        releasePage * RELEASES_PER_PAGE + RELEASES_PER_PAGE
                                    )
                                    .map((product) => (
                                    <div key={product.id} className="release-card">
                                        <div 
                                            className="card-image"
                                            onClick={() => product.thumbnail && handleImagePreview(product.thumbnail, product.title)}
                                        >
                                            {product.thumbnail ? (
                                                <img 
                                                    src={product.thumbnail} 
                                                    alt={product.title}
                                                    onError={(e) => {
                                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                                                    }}
                                                />
                                            ) : (
                                                <div style={{ 
                                                    width: '100%', 
                                                    height: '200px', 
                                                    backgroundColor: '#ddd', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center' 
                                                }}>
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-content">
                                            <h3 className="card-title">{product.title}</h3>
                                            {product.date && (
                                                <p className="card-date">Tanggal Rilis : {formatDate(product.date)}</p>
                                            )}
                                            <button 
                                                className="btn-access"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDownload(product.id, product.filename);
                                                }}
                                            >
                                                Akses Data
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <p>Tidak ada produk terbaru</p>
                                </div>
                            )}
                        </div>
                    )}
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
