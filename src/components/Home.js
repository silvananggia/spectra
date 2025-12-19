import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from '../utils/i18n';
import { SkeletonCard } from './Skeleton';
import '../assets/style/ColorPalette.css';
import './Home.scss';
import { fetchProductsAsync } from '../redux/slices/product';
import { getDownloadUrl } from '../services/product.service';

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
    const dispatch = useDispatch();
    const { t, currentLanguage } = useTranslation();
    const { products, loading } = useSelector((state) => state.product);
    
    // State for image preview modal
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');

    // State for latest releases pagination
    const [releasePage, setReleasePage] = useState(0);
    const RELEASES_PER_PAGE = 3;

    // State for search form
    const [regionSearch, setRegionSearch] = useState('');
    const [eventTypeSearch, setEventTypeSearch] = useState('');
    
    // Initialize eventTypeSearch with translation after component mounts
    useEffect(() => {
        if (!eventTypeSearch) {
            setEventTypeSearch(t('home.allEvents'));
        }
    }, [t, eventTypeSearch]);

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
        const downloadUrl = getDownloadUrl(productId);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to format date based on language
    const formatDate = (dateString) => {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        
        if (currentLanguage === 'id') {
            const months = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];
            const day = String(date.getDate()).padStart(2, '0');
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        } else {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
        }
    };

    // Function to handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        // Build query parameters
        const params = new URLSearchParams();
        if (regionSearch && regionSearch.trim() !== '') {
            params.append('region', regionSearch.trim());
        }
        if (eventTypeSearch && eventTypeSearch !== t('home.allEvents')) {
            params.append('category', eventTypeSearch);
        }
        
        // Navigate to products page with query parameters
        const queryString = params.toString();
        navigate(`/products${queryString ? `?${queryString}` : ''}`);
    };

    // Fetch latest products from API using Redux
    useEffect(() => {
        // Fetch latest 10 products (or more for pagination)
        dispatch(fetchProductsAsync({
            page: 1,
            limit: 10,
        }));
    }, [dispatch]);

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
                        <h1 className="hero-heading">{t('home.heroHeading')}</h1>
                        <p className="hero-description">
                            {t('home.heroDescription')}
                        </p>
                    </div>
                    <div className="search-form-container">
                        <form className="search-form" onSubmit={handleSearchSubmit}>
                            <h2 className="search-form-title">{t('home.searchTitle')}</h2>
                            <div className="form-fields">
                                <div className="form-field">
                                    <label htmlFor="region">{t('home.searchRegion')}</label>
                                    <input 
                                        type="text" 
                                        id="region" 
                                        value={regionSearch}
                                        onChange={(e) => setRegionSearch(e.target.value)}
                                        placeholder={t('home.searchRegionPlaceholder')}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="incident">{t('home.searchEventType')}</label>
                                    <select 
                                        id="incident" 
                                        value={eventTypeSearch}
                                        onChange={(e) => setEventTypeSearch(e.target.value)}
                                        className="form-select"
                                    >
                                        <option>{t('home.allEvents')}</option>
                                        <option>{t('home.banjir')}</option>
                                        <option>{t('home.longsor')}</option>
                                        <option>QR</option>
                                        <option>PCS</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-search">{t('home.searchButton')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Latest Releases Section */}
            <section className="latest-releases">
                <div className="container">
                    <div className="latest-header">
                        <h2 className="section-heading">{t('home.latestReleases')}</h2>
                        <div className="releases-nav">
                            <button
                                type="button"
                                className="releases-nav-btn"
                                onClick={() => setReleasePage((prev) => Math.max(0, prev - 1))}
                                disabled={releasePage === 0}
                            >
                                ← {t('home.previous')}
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
                                {t('home.next')} →
                            </button>
                        </div>
                    </div>
                    {loading ? (
                        <div className="releases-grid">
                            <SkeletonCard count={RELEASES_PER_PAGE} />
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
                                                <p className="card-date">{t('products.date')}: {formatDate(product.date)}</p>
                                            )}
                                            <button 
                                                className="btn-access"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDownload(product.id, product.filename);
                                                }}
                                            >
                                                {t('home.access')}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <p>{t('products.noResults')}</p>
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
                        <h2 className="map-heading">{t('home.interactiveMap')}</h2>
                        <p className="map-description">
                            {t('home.interactiveMapDesc')}
                        </p>
                    </div>
                    <Link to="/maps" className="btn-map-cta">{t('home.accessMap')} →</Link>
                </div>
            </section>

            {/* Collaboration Partners Section */}
            <section className="partners">
                <div className="container">
                    <h2 className="section-heading partners-heading">{t('home.partners')}</h2>
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
                            {t('home.pressEscape')} {t('home.clickToClose')}
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;
