import React from 'react';
import '../assets/style/ColorPalette.css';

const Contact = () => {
    return (
        <main style={{ minHeight: '80vh', padding: '50px', backgroundColor: 'var(--bg-light-gray)' }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                backgroundColor: 'var(--white)',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ 
                    color: 'var(--primary-dark-blue)', 
                    marginBottom: '30px',
                    fontSize: '2.5em',
                    textAlign: 'center'
                }}>
                    Kontak Kami
                </h1>

                <div style={{ lineHeight: '1.8', color: '#333' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '20px', fontSize: '1.5em' }}>
                            Informasi Kontak
                        </h2>
                        
                        <div style={{
                            backgroundColor: 'var(--bg-light-gray)',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.2em'
                                }}>
                                    National Contact Point
                                </h3>
                                <p style={{ marginBottom: '5px', fontSize: '1.1em', fontWeight: 'bold' }}>
                                    Dr. Yenni Vetrita
                                </p>
                                <p style={{ marginBottom: '5px', color: '#666' }}>
                                    Indonesia RSO UN-SPIDER
                                </p>
                                <p style={{ marginBottom: '5px', color: '#666' }}>
                                    Secretariat of Indonesian Space Agency
                                </p>
                                <p style={{ marginBottom: '5px', color: '#666' }}>
                                    National Research and Innovation Agency (INASA-BRIN)
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Alamat
                                </h3>
                                <p style={{ marginBottom: '5px' }}>
                                    Cibinong Science Center
                                </p>
                                <p style={{ marginBottom: '5px' }}>
                                    Jln. Raya Jakarta-Bogor KM.46
                                </p>
                                <p style={{ marginBottom: '5px' }}>
                                    Cibinong, Jawa Barat 16911
                                </p>
                                <p style={{ marginBottom: '5px' }}>
                                    Indonesia
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Email
                                </h3>
                                <p style={{ marginBottom: '5px' }}>
                                    <a 
                                        href="mailto:yenn004@brin.go.id" 
                                        style={{ 
                                            color: 'var(--secondary-cyan)', 
                                            textDecoration: 'none' 
                                        }}
                                    >
                                        yenn004@brin.go.id
                                    </a>
                                </p>
                                <p style={{ marginBottom: '5px' }}>
                                    <a 
                                        href="mailto:indonesia_rso_unspider@brin.go.id" 
                                        style={{ 
                                            color: 'var(--secondary-cyan)', 
                                            textDecoration: 'none' 
                                        }}
                                    >
                                        indonesia_rso_unspider@brin.go.id
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Website
                                </h3>
                                <p style={{ marginBottom: '5px' }}>
                                    <a 
                                        href="https://www.brin.go.id/en" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            color: 'var(--secondary-cyan)', 
                                            textDecoration: 'none' 
                                        }}
                                    >
                                        www.brin.go.id
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '20px', fontSize: '1.5em' }}>
                            Layanan yang Tersedia
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px'
                        }}>
                            <div style={{
                                padding: '20px',
                                backgroundColor: 'var(--bg-light-gray)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--secondary-cyan)'
                            }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Dukungan Teknis
                                </h3>
                                <p style={{ marginBottom: 0, fontSize: '0.95em' }}>
                                    Konsultasi dan dukungan teknis untuk aplikasi penginderaan jauh dalam manajemen bencana
                                </p>
                            </div>

                            <div style={{
                                padding: '20px',
                                backgroundColor: 'var(--bg-light-gray)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--secondary-cyan)'
                            }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Pelatihan & Capacity Building
                                </h3>
                                <p style={{ marginBottom: 0, fontSize: '0.95em' }}>
                                    Program pelatihan penginderaan jauh dan aplikasinya untuk manajemen bencana
                                </p>
                            </div>

                            <div style={{
                                padding: '20px',
                                backgroundColor: 'var(--bg-light-gray)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--secondary-cyan)'
                            }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Akses Data
                                </h3>
                                <p style={{ marginBottom: 0, fontSize: '0.95em' }}>
                                    Akses ke data geospasial dan produk peta untuk penelitian dan manajemen bencana
                                </p>
                            </div>

                            <div style={{
                                padding: '20px',
                                backgroundColor: 'var(--bg-light-gray)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--secondary-cyan)'
                            }}>
                                <h3 style={{ 
                                    color: 'var(--primary-dark-blue)', 
                                    marginBottom: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    Kolaborasi
                                </h3>
                                <p style={{ marginBottom: 0, fontSize: '0.95em' }}>
                                    Kerjasama dengan instansi pemerintah, lembaga penelitian, dan organisasi internasional
                                </p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '20px', fontSize: '1.5em' }}>
                            Jam Operasional
                        </h2>
                        <div style={{
                            padding: '20px',
                            backgroundColor: 'var(--bg-light-gray)',
                            borderRadius: '8px'
                        }}>
                            <p style={{ marginBottom: '10px' }}>
                                <strong>Senin - Jumat:</strong> 08:00 - 16:00 WIB
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                <strong>Sabtu - Minggu:</strong> Tutup
                            </p>
                            <p style={{ marginBottom: 0, fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>
                                *Untuk permintaan darurat, silakan hubungi melalui email dengan subjek "URGENT"
                            </p>
                        </div>
                    </section>

                    <section style={{ 
                        marginTop: '40px', 
                        padding: '20px', 
                        backgroundColor: 'var(--bg-light-gray)', 
                        borderRadius: '5px',
                        borderLeft: '4px solid var(--secondary-cyan)'
                    }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#666' }}>
                            <strong>Sumber:</strong> Informasi kontak diambil dari{' '}
                            <a 
                                href="https://www.un-spider.org/network/regional-support-offices/national-research-and-innovation-agency-brin" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--secondary-cyan)', textDecoration: 'none' }}
                            >
                                UN-SPIDER RSO Indonesia
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Contact;