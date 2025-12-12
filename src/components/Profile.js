import React from 'react';
import '../assets/style/ColorPalette.css';

const Profile = () => {
    return (
        <main style={{ minHeight: '80vh', padding: '50px', backgroundColor: 'var(--bg-light-gray)' }}>
            <div style={{
                maxWidth: '1000px',
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
                    Tentang Kami
                </h1>

                <div style={{ lineHeight: '1.8', color: '#333' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.8em' }}>
                            SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN
                        </h2>
                        <p style={{ marginBottom: '15px', fontSize: '1.1em' }}>
                            SPECTRA adalah platform informasi kebencanaan berbasis ruang angkasa yang dikembangkan oleh 
                            Badan Riset dan Inovasi Nasional (BRIN) sebagai bagian dari Regional Support Office (RSO) 
                            Indonesia untuk UN-SPIDER (United Nations Platform for Space-based Information for Disaster 
                            Management and Emergency Response).
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            Sejarah dan Latar Belakang
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            RSO-Indonesia didirikan pada <strong>19 Februari 2013</strong> selama sesi kelima puluh 
                            Subkomite Ilmiah dan Teknis Komite Penggunaan Damai Ruang Angkasa di Wina, Austria. 
                            Sebelumnya, Lembaga Penerbangan dan Antariksa Nasional (LAPAN) menjadi host untuk RSO-Indonesia. 
                            Sejak September 2021, organisasi ini bergabung dengan badan riset Indonesia lainnya di bawah 
                            Badan Riset dan Inovasi Nasional (BRIN).
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Pada <strong>5 Mei 2021</strong>, Presiden Joko Widodo menandatangani Peraturan Presiden No. 33 
                            Tahun 2021 yang menetapkan BRIN sebagai satu-satunya badan riset nasional. Peraturan ini 
                            menggabungkan semua badan riset nasional Indonesia seperti LIPI, BPPT, BATAN, dan LAPAN ke dalam BRIN.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            Misi dan Tujuan
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Sebagai RSO-Indonesia, BRIN berkomitmen untuk:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '10px' }}>
                                Menyediakan dukungan teknis dan konsultasi untuk UN-SPIDER kepada negara-negara di kawasan
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Berkontribusi pada upaya peningkatan kapasitas di bidang manajemen bencana dan tanggap darurat
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Mengembangkan dan menyediakan data geospasial untuk monitoring dan mitigasi bencana
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Meningkatkan kesiapsiagaan dan respon bencana melalui teknologi penginderaan jauh
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            Keahlian dan Layanan
                        </h2>
                        
                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em', marginTop: '20px' }}>
                            Capacity Building
                        </h3>
                        <ul style={{ marginLeft: '30px', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Fundamental of Remote Sensing and Digital Image Processing
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Aplikasi penginderaan jauh untuk lingkungan (degradasi hutan, tumpahan minyak, 
                                polusi air, penambangan ilegal, penurunan tanah, kawasan kumuh, dll) dan bencana 
                                (kekeringan, banjir, longsor, kebakaran hutan, letusan gunung berapi, tsunami)
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Advanced Remote Sensing (SAR processing and analysis)
                            </li>
                        </ul>

                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em', marginTop: '20px' }}>
                            Keahlian Spesifik Bencana
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            marginBottom: '20px'
                        }}>
                            {['Kekeringan', 'Epidemi', 'Longsor', 'Tsunami', 'Gempa Bumi', 'Banjir', 'Kebakaran Hutan', 'Letusan Gunung Berapi', 'Penurunan Tanah'].map((hazard, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: '8px 16px',
                                        backgroundColor: 'var(--secondary-cyan)',
                                        color: 'var(--white)',
                                        borderRadius: '20px',
                                        fontSize: '0.9em'
                                    }}
                                >
                                    {hazard}
                                </span>
                            ))}
                        </div>

                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em', marginTop: '20px' }}>
                            Keahlian yang Tersedia
                        </h3>
                        <p style={{ marginBottom: '15px' }}>
                            Di bawah BRIN, RSO-Indonesia dikoordinasikan oleh Sekretariat Badan Antariksa Indonesia (INASA) 
                            bekerja sama dengan unit lain yaitu Pusat Data dan Informasi serta Pusat Riset Penginderaan Jauh. 
                            Lebih dari <strong>100 ilmuwan dan insinyur</strong> bertanggung jawab untuk melakukan semua fase 
                            operasi penginderaan jauh, termasuk akuisisi data, pengolahan dan manajemen data, dan analisis 
                            data termasuk analisis GIS.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Anggota tim sangat berpengalaman dalam berbagai aplikasi penginderaan jauh, seperti mitigasi bencana, 
                            penilaian kerentanan dan risiko bencana, pemodelan perubahan iklim, monitoring lingkungan atau 
                            monitoring sumber daya alam.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            Database dan Informasi Berbasis Ruang Angkasa
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Stasiun Bumi Penginderaan Jauh di Pare-Pare (Sulawesi Selatan) dan Jakarta telah menerima data dari 
                            Landsat-7, Terra/Aqua MODIS, SPOT-2/4, NOAA, dan FengYun-1D. Sejak 2013, LAPAN telah meningkatkan 
                            sistem stasiun bumi untuk menerima NPP/NPOES, FengYun-3B/C, Landsat-8/9, SPOT-5/6/7, Pleiades, 
                            dan data SAR.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            BRIN juga memiliki teknologi Unmanned Aerial Vehicle (UAV) untuk Penginderaan Jauh udara, yang 
                            dapat digunakan untuk memantau area bencana untuk mendukung kegiatan rekonstruksi dan rehabilitasi. 
                            Alat penginderaan jauh dan GIS digunakan untuk memproses data.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            Kolaborasi
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Untuk mendukung informasi bencana menggunakan data satelit Penginderaan Jauh, BRIN berkoordinasi 
                            dengan Badan Nasional Penanggulangan Bencana (BNPB) dan bekerja sama dengan berbagai mitra strategis 
                            termasuk Kementerian Pertahanan (Kemhan), LEN, BlackSky, dan UN-SPIDER.
                        </p>
                    </section>

                    <section style={{ 
                        marginTop: '40px', 
                        padding: '20px', 
                        backgroundColor: 'var(--bg-light-gray)', 
                        borderRadius: '5px',
                        borderLeft: '4px solid var(--secondary-cyan)'
                    }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#666' }}>
                            <strong>Sumber:</strong> Informasi diambil dari{' '}
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

export default Profile;