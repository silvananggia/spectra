import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ColorPalette.css';
import './Products.scss';

// Import JPG thumbnails from root data folder
import longsorAcehThumb from '../assets/data/Longsor_Aceh_20251202_R2_AcehTengahAOI1.jpg';
import banjirAcehUtaraThumb from '../assets/data/Banjir_Aceh_2511201_R2_AcehUtara.jpg';
import banjirBireuenThumb from '../assets/data/Banjir_Aceh_251201_R2_Bireuen.jpg';
import banjirLhokseumaweThumb from '../assets/data/Banjir_Aceh_251130_R2_Lhokseumawe.jpg';

// Import PDF files from root data folder
import longsorAcehPdf from '../assets/data/Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf';
import banjirAcehUtaraPdf from '../assets/data/Banjir_Aceh_2511201_R2_AcehUtara.pdf';
import banjirBireuenPdf from '../assets/data/Banjir_Aceh_251201_R2_Bireuen.pdf';
import banjirLhokseumawePdf from '../assets/data/Banjir_Aceh_251130_R2_Lhokseumawe.pdf';

// Import from Provinsi Aceh/Rilis-1_Aceh_Sentinel-1
import banjirAcehSumutThumb from '../assets/data/Provinsi Aceh/Rilis-1_Aceh_Sentinel-1/Banjir_AcehSumut_251129_R1.jpg';
import banjirAcehSumutPdf from '../assets/data/Provinsi Aceh/Rilis-1_Aceh_Sentinel-1/Banjir_AcehSumut_251129_R1.pdf';

// Import from Provinsi Aceh/Rilis-2
import longsorAcehR2Thumb from '../assets/data/Provinsi Aceh/Rilis-2/Longsor_Aceh_20251202_R2_AcehTengahAOI1.jpg';
import longsorAcehR2Pdf from '../assets/data/Provinsi Aceh/Rilis-2/Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf';
import banjirAcehUtaraR2Thumb from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_2511201_R2_AcehUtara.jpg';
import banjirAcehUtaraR2Pdf from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_2511201_R2_AcehUtara.pdf';
import banjirBireuenR2Thumb from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_251201_R2_Bireuen.jpg';
import banjirBireuenR2Pdf from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_251201_R2_Bireuen.pdf';
import banjirLhokseumaweR2Thumb from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_251130_R2_Lhokseumawe.jpg';
import banjirLhokseumaweR2Pdf from '../assets/data/Provinsi Aceh/Rilis-2/Banjir_Aceh_251130_R2_Lhokseumawe.pdf';

// Import from Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1 (sample of QR products)
import qrAcehA3Thumb from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_A3_R2.jpg';
import qrAcehA3Pdf from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_A3_R2.pdf';
import qrAcehA4Thumb from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_A4_R2.jpg';
import qrAcehA4Pdf from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_A4_R2.pdf';
import qrAcehB3Thumb from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B3_R2.jpg';
import qrAcehB3Pdf from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B3_R2.pdf';
import qrAcehB4Thumb from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B4_R2.jpg';
import qrAcehB4Pdf from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B4_R2.pdf';
import qrAcehB5Thumb from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B5_R2.jpg';
import qrAcehB5Pdf from '../assets/data/Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1/QR_Aceh_20251129_B5_R2.pdf';

const Products = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');
    const [sortOrder, setSortOrder] = useState('latest'); // 'latest' or 'oldest'
    const [currentPage, setCurrentPage] = useState(1);
    const [regionFilter, setRegionFilter] = useState('Provinsi Aceh');
    const [eventTypeFilter, setEventTypeFilter] = useState('Semua kejadian');
    const itemsPerPage = 9;

    // Product data array
    const allProducts = [
        {
            id: 1,
            thumbnail: longsorAcehThumb,
            pdf: longsorAcehPdf,
            title: 'XX - Provinsi Aceh',
            date: '02 Desember 2025',
            releaseDate: new Date('2025-12-02'),
            filename: 'Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf',
            category: 'Longsor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            thumbnail: banjirAcehUtaraThumb,
            pdf: banjirAcehUtaraPdf,
            title: 'XX - Lhokseumawe, Aceh Utara, Provinsi Aceh',
            date: '25 November 2025',
            releaseDate: new Date('2025-11-25'),
            filename: 'Banjir_Aceh_2511201_R2_AcehUtara.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            thumbnail: banjirBireuenThumb,
            pdf: banjirBireuenPdf,
            title: 'C8 - Peunaron, Aceh Timur, Provinsi Aceh',
            date: '01 Desember 2025',
            releaseDate: new Date('2025-12-01'),
            filename: 'Banjir_Aceh_251201_R2_Bireuen.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            thumbnail: banjirLhokseumaweThumb,
            pdf: banjirLhokseumawePdf,
            title: 'D9 - Kejuruan Muda, Aceh Tamiang, Provinsi Aceh',
            date: '30 November 2025',
            releaseDate: new Date('2025-11-30'),
            filename: 'Banjir_Aceh_251130_R2_Lhokseumawe.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            thumbnail: banjirAcehSumutThumb,
            pdf: banjirAcehSumutPdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'Banjir_AcehSumut_251129_R1.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            thumbnail: longsorAcehR2Thumb,
            pdf: longsorAcehR2Pdf,
            title: 'XX - Provinsi Aceh',
            date: '02 Desember 2025',
            releaseDate: new Date('2025-12-02'),
            filename: 'Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf',
            category: 'Longsor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 7,
            thumbnail: banjirAcehUtaraR2Thumb,
            pdf: banjirAcehUtaraR2Pdf,
            title: 'XX - Provinsi Aceh',
            date: '25 November 2025',
            releaseDate: new Date('2025-11-25'),
            filename: 'Banjir_Aceh_2511201_R2_AcehUtara.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 8,
            thumbnail: banjirBireuenR2Thumb,
            pdf: banjirBireuenR2Pdf,
            title: 'XX - Provinsi Aceh',
            date: '01 Desember 2025',
            releaseDate: new Date('2025-12-01'),
            filename: 'Banjir_Aceh_251201_R2_Bireuen.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 9,
            thumbnail: banjirLhokseumaweR2Thumb,
            pdf: banjirLhokseumaweR2Pdf,
            title: 'XX - Provinsi Aceh',
            date: '30 November 2025',
            releaseDate: new Date('2025-11-30'),
            filename: 'Banjir_Aceh_251130_R2_Lhokseumawe.pdf',
            category: 'Banjir',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 10,
            thumbnail: qrAcehA3Thumb,
            pdf: qrAcehA3Pdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'QR_Aceh_20251129_A3_R2.pdf',
            category: 'Quick Response',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 11,
            thumbnail: qrAcehA4Thumb,
            pdf: qrAcehA4Pdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'QR_Aceh_20251129_A4_R2.pdf',
            category: 'Quick Response',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 12,
            thumbnail: qrAcehB3Thumb,
            pdf: qrAcehB3Pdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'QR_Aceh_20251129_B3_R2.pdf',
            category: 'Quick Response',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 13,
            thumbnail: qrAcehB4Thumb,
            pdf: qrAcehB4Pdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'QR_Aceh_20251129_B4_R2.pdf',
            category: 'Quick Response',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 14,
            thumbnail: qrAcehB5Thumb,
            pdf: qrAcehB5Pdf,
            title: 'XX - Provinsi Aceh',
            date: '29 November 2025',
            releaseDate: new Date('2025-11-29'),
            filename: 'QR_Aceh_20251129_B5_R2.pdf',
            category: 'Quick Response',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];

    // Filter and sort products
    const filteredProducts = allProducts.filter(product => {
        if (eventTypeFilter !== 'Semua kejadian' && product.category !== eventTypeFilter) {
            return false;
        }
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'latest') {
            return b.releaseDate - a.releaseDate;
        } else {
            return a.releaseDate - b.releaseDate;
        }
    });

    // Pagination
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    const handleImagePreview = (imageUrl, title) => {
        setPreviewImage(imageUrl);
        setPreviewTitle(title);
    };

    const closePreview = () => {
        setPreviewImage(null);
        setPreviewTitle('');
    };

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

    const handleDownload = (pdfUrl, filename) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSearch = () => {
        // Reset to first page when searching
        setCurrentPage(1);
    };

    const formatDate = (dateString) => {
        const months = {
            'November': 'November',
            'Desember': 'Desember'
        };
        return dateString;
    };

    return (
        <main className="products-page">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <Link to="/">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Produk Spectra</span>
            </div>

            {/* Page Title */}
            <h1 className="page-title">Produk Spectra</h1>

            {/* Search and Filter Section */}
            <section className="search-section">
                <div className="search-container">
                    <div className="form-field">
                        <label htmlFor="region">Nama Daerah</label>
                        <input 
                            type="text" 
                            id="region" 
                            value={regionFilter}
                            onChange={(e) => setRegionFilter(e.target.value)}
                            className="form-input"
                            placeholder="Provinsi Aceh"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="incident">Jenis Kejadian</label>
                        <select 
                            id="incident" 
                            value={eventTypeFilter}
                            onChange={(e) => setEventTypeFilter(e.target.value)}
                            className="form-select"
                        >
                            <option>Semua kejadian</option>
                            <option>Banjir</option>
                            <option>Longsor</option>
                            <option>Quick Response</option>
                        </select>
                    </div>
                    <button className="btn-search" onClick={handleSearch}>
                        Cari Data
                    </button>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="filter-tabs">
                <button 
                    className={`filter-tab ${sortOrder === 'latest' ? 'active' : ''}`}
                    onClick={() => {
                        setSortOrder('latest');
                        setCurrentPage(1);
                    }}
                >
                    <span className="tab-icon">✓</span>
                    Terbaru
                </button>
                <button 
                    className={`filter-tab ${sortOrder === 'oldest' ? 'active' : ''}`}
                    onClick={() => {
                        setSortOrder('oldest');
                        setCurrentPage(1);
                    }}
                >
                    Terlama
                </button>
            </section>

            {/* Products Grid */}
            <section className="products-grid-section">
                <div className="products-grid">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="product-card">
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
                                <p className="card-date">Rilis: {product.date}</p>
                                <h3 className="card-title">{product.title}</h3>
                                <p className="card-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
                <section className="pagination-section">
                    <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                    >
                        ← Sebelumnya
                    </button>
                    <div className="pagination-numbers">
                        {currentPage > 3 && (
                            <>
                                <button 
                                    className="pagination-number"
                                    onClick={() => setCurrentPage(1)}
                                >
                                    1
                                </button>
                                {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
                            </>
                        )}
                        {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1;
                            if (
                                page === currentPage ||
                                page === currentPage - 1 ||
                                page === currentPage + 1 ||
                                page === 1 ||
                                page === totalPages
                            ) {
                                return (
                                    <button
                                        key={page}
                                        className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                );
                            }
                            return null;
                        })}
                        {currentPage < totalPages - 2 && (
                            <>
                                {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
                                <button 
                                    className="pagination-number"
                                    onClick={() => setCurrentPage(totalPages)}
                                >
                                    {totalPages}
                                </button>
                            </>
                        )}
                    </div>
                    <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Selanjutnya →
                    </button>
                </section>
            )}

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

export default Products;
