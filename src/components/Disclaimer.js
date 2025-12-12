import React from 'react';
import '../assets/style/ColorPalette.css';

const Disclaimer = () => {
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
                    Disclaimer & Ketentuan Penggunaan Data
                </h1>

                <div style={{ 
                    padding: '20px', 
                    backgroundColor: '#fff3cd', 
                    borderRadius: '5px',
                    marginBottom: '30px',
                    borderLeft: '4px solid #ffc107'
                }}>
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#856404' }}>
                        ⚠️ WAJIB BACA: Ketentuan penggunaan data geospasial dan produk peta SPECTRA BRIN
                    </p>
                </div>

                <div style={{ lineHeight: '1.8', color: '#333' }}>
                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            1. Tujuan dan Ruang Lingkup
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Platform SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN menyediakan data 
                            geospasial, produk peta, dan informasi kebencanaan untuk tujuan penelitian, pendidikan, 
                            dan manajemen bencana. Dengan mengakses dan menggunakan platform ini, Anda menyetujui 
                            ketentuan penggunaan berikut.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            2. Ketentuan Penggunaan Data
                        </h2>
                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em' }}>2.1. Penggunaan yang Diizinkan</h3>
                        <p style={{ marginBottom: '10px' }}>Data dan produk peta dapat digunakan untuk:</p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Tujuan penelitian dan pengembangan ilmiah
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Pendidikan dan pelatihan terkait manajemen bencana
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Perencanaan dan mitigasi bencana oleh instansi pemerintah
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Kegiatan kemanusiaan dan tanggap darurat bencana
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Publikasi ilmiah dengan menyertakan sumber dan atribusi yang sesuai
                            </li>
                        </ul>

                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em', marginTop: '20px' }}>2.2. Penggunaan yang Dilarang</h3>
                        <p style={{ marginBottom: '10px' }}>Dilarang keras menggunakan data untuk:</p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Tujuan komersial tanpa izin tertulis dari BRIN
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Aktivitas yang melanggar hukum atau merugikan kepentingan nasional
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Redistribusi atau penjualan data kepada pihak ketiga
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Modifikasi data yang mengubah makna atau akurasi informasi
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Penggunaan untuk tujuan militer atau keamanan tanpa koordinasi resmi
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            3. Atribusi dan Sumber Data
                        </h2>
                        <p style={{ marginBottom: '10px' }}>
                            Pengguna WAJIB menyertakan atribusi dan sumber data dalam setiap penggunaan:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Sumber Data:</strong> "SPECTRA BRIN - Satellite Platform for Emergency Crisis, Tracking and Remote Analytic"
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Atribusi:</strong> Badan Riset dan Inovasi Nasional (BRIN)
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Tanggal Akses:</strong> Tanggal ketika data diunduh atau diakses
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>URL Sumber:</strong> Tautan ke halaman produk peta yang digunakan
                            </li>
                        </ul>
                        <p style={{ 
                            marginTop: '15px', 
                            padding: '15px', 
                            backgroundColor: '#e7f3ff', 
                            borderRadius: '5px',
                            borderLeft: '4px solid var(--secondary-cyan)'
                        }}>
                            <strong>Contoh Atribusi:</strong> "Data geospasial disediakan oleh SPECTRA BRIN 
                            (https://spectra.brin.go.id). Diakses pada [tanggal]. © BRIN 2025."
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            4. Akurasi dan Keterbatasan Data
                        </h2>
                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em' }}>4.1. Tidak Ada Jaminan Akurasi</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Data geospasial dan produk peta disediakan "sebagaimana adanya" tanpa jaminan apapun, 
                            baik tersurat maupun tersirat. BRIN tidak menjamin:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Akurasi, kelengkapan, atau ketepatan waktu data
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Kesesuaian data untuk tujuan tertentu
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Tidak adanya kesalahan atau kelalaian dalam data
                            </li>
                        </ul>

                        <h3 style={{ color: '#666', marginBottom: '10px', fontSize: '1.2em', marginTop: '20px' }}>4.2. Keterbatasan Teknis</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Data dapat memiliki keterbatasan teknis termasuk namun tidak terbatas pada:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Resolusi spasial dan temporal yang bervariasi
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Keterbatasan cakupan area geografis
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Potensi kesalahan dalam proses pengolahan data
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Keterbatasan teknologi penginderaan jauh
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            5. Tanggung Jawab dan Risiko
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Pengguna bertanggung jawab penuh</strong> atas penggunaan data dan produk peta dari 
                            platform ini. BRIN tidak bertanggung jawab atas:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Kerugian langsung, tidak langsung, atau konsekuensial yang timbul dari penggunaan data
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Keputusan yang diambil berdasarkan data dari platform ini
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Kerusakan atau kehilangan data yang terjadi selama proses unduh atau penggunaan
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Konflik atau masalah hukum yang timbul dari penggunaan data
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            6. Hak Kekayaan Intelektual
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Semua data geospasial, produk peta, dan konten dalam platform ini dilindungi oleh hak 
                            kekayaan intelektual. Hak cipta dan hak lainnya dimiliki oleh BRIN dan/atau mitra kolaborasi. 
                            Penggunaan data tidak memberikan hak kepemilikan kepada pengguna.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            7. Data dari Mitra Kolaborasi
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Platform ini dapat menyertakan data dari mitra kolaborasi (Kemhan, LEN, BNPB, BlackSky, 
                            UN-SPIDER). Penggunaan data tersebut tunduk pada ketentuan yang ditetapkan oleh masing-masing 
                            mitra. Pengguna bertanggung jawab untuk mematuhi ketentuan penggunaan dari semua sumber data.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            8. Pelaporan dan Pelanggaran
                        </h2>
                        <p style={{ marginBottom: '10px' }}>
                            Jika Anda menemukan pelanggaran ketentuan penggunaan atau memiliki pertanyaan terkait data, 
                            silakan hubungi kami melalui:
                        </p>
                        <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
                            <li style={{ marginBottom: '8px' }}>
                                Halaman Kontak di platform ini
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                Email resmi BRIN
                            </li>
                        </ul>
                        <p style={{ marginBottom: '15px' }}>
                            Pelanggaran ketentuan penggunaan dapat mengakibatkan penghentian akses dan tindakan hukum 
                            sesuai dengan peraturan yang berlaku.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            9. Perubahan Ketentuan
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            BRIN berhak mengubah atau memperbarui ketentuan penggunaan ini kapan saja tanpa pemberitahuan 
                            sebelumnya. Penggunaan berkelanjutan platform setelah perubahan menandakan persetujuan Anda 
                            terhadap ketentuan yang diperbarui.
                        </p>
                    </section>

                    <section style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: 'var(--secondary-cyan)', marginBottom: '15px', fontSize: '1.5em' }}>
                            10. Hukum yang Berlaku
                        </h2>
                        <p style={{ marginBottom: '15px' }}>
                            Ketentuan penggunaan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul 
                            akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
                        </p>
                    </section>

                    <section style={{ 
                        marginTop: '40px', 
                        padding: '20px', 
                        backgroundColor: '#ffe6e6', 
                        borderRadius: '5px',
                        borderLeft: '4px solid #dc3545'
                    }}>
                        <p style={{ margin: 0, fontWeight: 'bold', color: '#721c24' }}>
                            ⚠️ PERINGATAN: Dengan mengunduh atau menggunakan data dari platform ini, Anda menyatakan 
                            telah membaca, memahami, dan menyetujui semua ketentuan di atas. Penggunaan data tanpa 
                            mematuhi ketentuan ini dapat mengakibatkan konsekuensi hukum.
                        </p>
                    </section>

                    <section style={{ 
                        marginTop: '30px', 
                        padding: '20px', 
                        backgroundColor: 'var(--bg-light-gray)', 
                        borderRadius: '5px',
                        borderLeft: '4px solid var(--secondary-cyan)'
                    }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#666' }}>
                            <strong>Terakhir diperbarui:</strong> Desember 2025<br />
                            <strong>Versi:</strong> 1.0
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Disclaimer;

