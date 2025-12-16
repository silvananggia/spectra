import React from 'react';
import '../assets/style/ColorPalette.css';
import './PrivacyPolicy.scss';

const sections = [
  { id: 'pendahuluan', number: '1.', title: 'Pendahuluan' },
  { id: 'informasi', number: '2.', title: 'Informasi yang Dikumpulkan' },
  { id: 'penggunaan', number: '3.', title: 'Penggunaan Informasi' },
  { id: 'perlindungan', number: '4.', title: 'Perlindungan Data' },
  { id: 'pembagian', number: '5.', title: 'Pembagian Informasi' },
  { id: 'hak', number: '6.', title: 'Hak Pengguna' },
  { id: 'cookie', number: '7.', title: 'Cookie dan Teknologi Pelacakan' },
  { id: 'perubahan', number: '8.', title: 'Perubahan Kebijakan' },
  { id: 'kontak', number: '9.', title: 'Kontak' },
];

const PrivacyPolicy = () => {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="privacy-page">
      <div className="privacy-container">
        {/* Left content */}
        <div className="privacy-main">
          <header className="privacy-header">
            <div className="privacy-hero-icon" aria-hidden="true" />
            <div className="privacy-hero-text">
              <h1 className="privacy-title">Kebijakan Privasi</h1>
              <p className="privacy-updated">Pembaruan terakhir: Desember 2025</p>
            </div>
          </header>

          <div className="privacy-content">
            <section id="pendahuluan" className="privacy-section">
              <h2 className="section-heading">1. Pendahuluan</h2>
              <p>
                SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN menghormati privasi
                pengguna dan berkomitmen untuk melindungi informasi pribadi yang dikumpulkan melalui platform ini.
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi
                informasi Anda.
              </p>
            </section>

            <section id="informasi" className="privacy-section">
              <h2 className="section-heading">2. Informasi yang Dikumpulkan</h2>
              <p>Kami dapat mengumpulkan informasi berikut:</p>
              <ul>
                <li>
                  <strong>Informasi Pribadi:</strong> Nama, alamat email, institusi, dan informasi kontak yang Anda
                  berikan saat menggunakan layanan kami.
                </li>
                <li>
                  <strong>Data Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan informasi perangkat yang
                  digunakan untuk mengakses platform.
                </li>
                <li>
                  <strong>Data Penggunaan:</strong> Halaman yang dikunjungi, waktu akses, dan aktivitas interaksi dengan
                  platform.
                </li>
                <li>
                  <strong>Data Geospasial:</strong> Koordinat lokasi dan data spasial yang Anda akses atau unduh melalui
                  platform.
                </li>
              </ul>
            </section>

            <section id="penggunaan" className="privacy-section">
              <h2 className="section-heading">3. Penggunaan Informasi</h2>
              <p>Informasi yang dikumpulkan digunakan untuk:</p>
              <ul>
                <li>Menyediakan dan meningkatkan layanan informasi kebencanaan berbasis geospasial</li>
                <li>Memproses permintaan akses data dan produk peta</li>
                <li>Menganalisis penggunaan platform untuk perbaikan layanan</li>
                <li>Mengirimkan notifikasi penting terkait layanan dan pembaruan</li>
                <li>Mematuhi kewajiban hukum dan regulasi yang berlaku</li>
              </ul>
            </section>

            <section id="perlindungan" className="privacy-section">
              <h2 className="section-heading">4. Perlindungan Data</h2>
              <p>
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi
                pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada metode
                transmisi melalui internet atau penyimpanan elektronik yang 100% aman, sehingga kami tidak dapat
                menjamin keamanan absolut.
              </p>
            </section>

            <section id="pembagian" className="privacy-section">
              <h2 className="section-heading">5. Pembagian Informasi</h2>
              <p>
                Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga.
                Informasi dapat dibagikan dalam situasi berikut:
              </p>
              <ul>
                <li>
                  Dengan mitra kolaborasi resmi (Kemhan, LEN, BNPB, BlackSky, UN-SPIDER) untuk tujuan penelitian dan
                  pengembangan
                </li>
                <li>Ketika diwajibkan oleh hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keamanan BRIN dan pengguna lainnya</li>
              </ul>
            </section>

            <section id="hak" className="privacy-section">
              <h2 className="section-heading">6. Hak Pengguna</h2>
              <p>Anda memiliki hak untuk:</p>
              <ul>
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Meminta koreksi atau pembaruan informasi yang tidak akurat</li>
                <li>Meminta penghapusan informasi pribadi Anda</li>
                <li>Menolak pemrosesan data tertentu</li>
                <li>Mengajukan keluhan terkait penggunaan data pribadi Anda</li>
              </ul>
            </section>

            <section id="cookie" className="privacy-section">
              <h2 className="section-heading">7. Cookie dan Teknologi Pelacakan</h2>
              <p>
                Platform ini menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna,
                menganalisis penggunaan, dan menyediakan konten yang disesuaikan. Anda dapat mengatur preferensi cookie
                melalui pengaturan browser Anda.
              </p>
            </section>

            <section id="perubahan" className="privacy-section">
              <h2 className="section-heading">8. Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui
                platform atau melalui email. Penggunaan berkelanjutan platform setelah perubahan menandakan persetujuan
                Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section id="kontak" className="privacy-section">
              <h2 className="section-heading">9. Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini, silakan
                hubungi kami melalui halaman Kontak atau email resmi BRIN.
              </p>
            </section>
          </div>
        </div>

        {/* Right side navigation */}
        <aside className="privacy-sidebar" aria-label="Daftar isi kebijakan privasi">
          <div className="sidebar-card">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className="sidebar-item"
                onClick={() => handleNavClick(section.id)}
              >
                <span className="sidebar-number">{section.number}</span>
                <span className="sidebar-title">{section.title}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
