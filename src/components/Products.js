import React, { useState, useEffect } from 'react';
import '../assets/style/ColorPalette.css';

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

    // Product data array - all products from data folder
    const products = [
        // Root data folder products
        {
            id: 1,
            thumbnail: longsorAcehThumb,
            pdf: longsorAcehPdf,
            title: 'Longsor Aceh - Aceh Tengah',
            date: '02 Des 2025',
            filename: 'Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf',
            category: 'Longsor'
        },
        {
            id: 2,
            thumbnail: banjirAcehUtaraThumb,
            pdf: banjirAcehUtaraPdf,
            title: 'Banjir Aceh - Aceh Utara',
            date: '25 Nov 2025',
            filename: 'Banjir_Aceh_2511201_R2_AcehUtara.pdf',
            category: 'Banjir'
        },
        {
            id: 3,
            thumbnail: banjirBireuenThumb,
            pdf: banjirBireuenPdf,
            title: 'Banjir Aceh - Bireuen',
            date: '01 Des 2025',
            filename: 'Banjir_Aceh_251201_R2_Bireuen.pdf',
            category: 'Banjir'
        },
        {
            id: 4,
            thumbnail: banjirLhokseumaweThumb,
            pdf: banjirLhokseumawePdf,
            title: 'Banjir Aceh - Lhokseumawe',
            date: '30 Nov 2025',
            filename: 'Banjir_Aceh_251130_R2_Lhokseumawe.pdf',
            category: 'Banjir'
        },
        // Provinsi Aceh/Rilis-1_Aceh_Sentinel-1
        {
            id: 5,
            thumbnail: banjirAcehSumutThumb,
            pdf: banjirAcehSumutPdf,
            title: 'Banjir Aceh Sumut',
            date: '29 Nov 2025',
            filename: 'Banjir_AcehSumut_251129_R1.pdf',
            category: 'Banjir'
        },
        // Provinsi Aceh/Rilis-2
        {
            id: 6,
            thumbnail: longsorAcehR2Thumb,
            pdf: longsorAcehR2Pdf,
            title: 'Longsor Aceh - Aceh Tengah (Rilis 2)',
            date: '02 Des 2025',
            filename: 'Longsor_Aceh_20251202_R2_AcehTengahAOI1.pdf',
            category: 'Longsor'
        },
        {
            id: 7,
            thumbnail: banjirAcehUtaraR2Thumb,
            pdf: banjirAcehUtaraR2Pdf,
            title: 'Banjir Aceh - Aceh Utara (Rilis 2)',
            date: '25 Nov 2025',
            filename: 'Banjir_Aceh_2511201_R2_AcehUtara.pdf',
            category: 'Banjir'
        },
        {
            id: 8,
            thumbnail: banjirBireuenR2Thumb,
            pdf: banjirBireuenR2Pdf,
            title: 'Banjir Aceh - Bireuen (Rilis 2)',
            date: '01 Des 2025',
            filename: 'Banjir_Aceh_251201_R2_Bireuen.pdf',
            category: 'Banjir'
        },
        {
            id: 9,
            thumbnail: banjirLhokseumaweR2Thumb,
            pdf: banjirLhokseumaweR2Pdf,
            title: 'Banjir Aceh - Lhokseumawe (Rilis 2)',
            date: '30 Nov 2025',
            filename: 'Banjir_Aceh_251130_R2_Lhokseumawe.pdf',
            category: 'Banjir'
        },
        // Provinsi Aceh/Rilis-1b_Aceh_Sentinel-1 (QR products)
        {
            id: 10,
            thumbnail: qrAcehA3Thumb,
            pdf: qrAcehA3Pdf,
            title: 'QR Aceh A3',
            date: '29 Nov 2025',
            filename: 'QR_Aceh_20251129_A3_R2.pdf',
            category: 'Quick Response'
        },
        {
            id: 11,
            thumbnail: qrAcehA4Thumb,
            pdf: qrAcehA4Pdf,
            title: 'QR Aceh A4',
            date: '29 Nov 2025',
            filename: 'QR_Aceh_20251129_A4_R2.pdf',
            category: 'Quick Response'
        },
        {
            id: 12,
            thumbnail: qrAcehB3Thumb,
            pdf: qrAcehB3Pdf,
            title: 'QR Aceh B3',
            date: '29 Nov 2025',
            filename: 'QR_Aceh_20251129_B3_R2.pdf',
            category: 'Quick Response'
        },
        {
            id: 13,
            thumbnail: qrAcehB4Thumb,
            pdf: qrAcehB4Pdf,
            title: 'QR Aceh B4',
            date: '29 Nov 2025',
            filename: 'QR_Aceh_20251129_B4_R2.pdf',
            category: 'Quick Response'
        },
        {
            id: 14,
            thumbnail: qrAcehB5Thumb,
            pdf: qrAcehB5Pdf,
            title: 'QR Aceh B5',
            date: '29 Nov 2025',
            filename: 'QR_Aceh_20251129_B5_R2.pdf',
            category: 'Quick Response'
        }
    ];

    return (
        <main>
            {/* Products Section */}
            <section className="products-section" style={{ padding: '50px', textAlign: 'center', backgroundColor: 'var(--bg-light-gray)' }}>
                <h1 style={{ marginBottom: '30px', color: 'var(--primary-dark-blue)', fontSize: '2em' }}>Produk</h1>
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

export default Products;


