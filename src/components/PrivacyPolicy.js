import React from 'react';
import '../assets/style/ColorPalette.css';

const PrivacyPolicy = () => {
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
                    Kebijakan Privasi
                </h1>

                <div style={{ lineHeight: '1.8', color: '#333' }}>
                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            1. Pendahuluan
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN menghormati privasi pengguna 
                            dan berkomitmen untuk melindungi informasi pribadi yang dikumpulkan melalui platform ini. 
                            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan 
                            melindungi informasi Anda.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            2. Informasi yang Dikumpulkan
                        </h2>
                        <p style={{ marginBottom: '10px' }}>Kami dapat mengumpulkan informasi berikut:</p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Informasi Pribadi:</strong> Nama, alamat email, institusi, dan informasi kontak 
                                yang Anda berikan saat menggunakan layanan kami.
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Data Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan informasi 
                                perangkat yang digunakan untuk mengakses platform.
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Data Penggunaan:</strong> Halaman yang dikunjungi, waktu akses, dan aktivitas 
                                interaksi dengan platform.
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Data Geospasial:</strong> Koordinat lokasi dan data spasial yang Anda akses 
                                atau unduh melalui platform.
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            3. Penggunaan Informasi
                        </h2>
                        <p style={{ marginBottom: '10px' }}>Informasi yang dikumpulkan digunakan untuk:</p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Menyediakan dan meningkatkan layanan informasi kebencanaan berbasis geospasial
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Memproses permintaan akses data dan produk peta
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Menganalisis penggunaan platform untuk perbaikan layanan
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Mengirimkan notifikasi penting terkait layanan dan pembaruan
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Mematuhi kewajiban hukum dan regulasi yang berlaku
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            4. Perlindungan Data
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi 
                            informasi pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. 
                            Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% 
                            aman, sehingga kami tidak dapat menjamin keamanan absolut.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            5. Pembagian Informasi
                        </h2>
                        <p style={{ marginBottom: '10px' }}>
                            Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. 
                            Informasi dapat dibagikan dalam situasi berikut:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Dengan mitra kolaborasi resmi (Kemhan, LEN, BNPB, BlackSky, UN-SPIDER) untuk tujuan 
                                penelitian dan pengembangan
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Ketika diwajibkan oleh hukum atau perintah pengadilan
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Untuk melindungi hak, properti, atau keamanan BRIN dan pengguna lainnya
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            6. Hak Pengguna
                        </h2>
                        <p style={{ marginBottom: '10px' }}>Anda memiliki hak untuk:</p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Mengakses informasi pribadi yang kami simpan tentang Anda
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Meminta koreksi atau pembaruan informasi yang tidak akurat
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Meminta penghapusan informasi pribadi Anda
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Menolak pemrosesan data tertentu
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Mengajukan keluhan terkait penggunaan data pribadi Anda
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            7. Cookie dan Teknologi Pelacakan
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Platform ini menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman 
                            pengguna, menganalisis penggunaan, dan menyediakan konten yang disesuaikan. Anda dapat 
                            mengatur preferensi cookie melalui pengaturan browser Anda.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            8. Perubahan Kebijakan
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                            melalui platform atau melalui email. Penggunaan berkelanjutan platform setelah perubahan 
                            menandakan persetujuan Anda terhadap kebijakan yang diperbarui.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            9. Kontak
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini, 
                            silakan hubungi kami melalui halaman Kontak atau email resmi BRIN.
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
                            <strong>Terakhir diperbarui:</strong> Desember 2025
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;

