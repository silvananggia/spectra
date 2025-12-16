import React from 'react';
import '../assets/style/ColorPalette.css';
import './Profile.scss';

const Profile = () => {
  return (
    <main className="profile-page">
      <div className="profile-container">
        <header className="profile-header">
          <div className="profile-hero-icon" aria-hidden="true" />
          <div className="profile-hero-text">
            <h1 className="profile-title">Tentang Kami</h1>
            <p className="profile-subtitle">
              SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN
            </p>
          </div>
        </header>

        <div className="profile-content">
          <section className="profile-section">
            <h2 className="section-heading">SPECTRA (Satellite Platform for Emergency Crisis, Tracking and Remote Analytic) BRIN</h2>
            <p>
              SPECTRA adalah platform informasi kebencanaan berbasis ruang angkasa yang dikembangkan oleh Badan Riset dan
              Inovasi Nasional (BRIN) sebagai bagian dari Regional Support Office (RSO) Indonesia untuk UN-SPIDER (United
              Nations Platform for Space-based Information for Disaster Management and Emergency Response).
            </p>
          </section>

          <section className="profile-section">
            <h2 className="section-heading">Sejarah dan Latar Belakang</h2>
            <p>
              RSO-Indonesia didirikan pada <strong>19 Februari 2013</strong> selama sesi kelima puluh Subkomite Ilmiah dan
              Teknis Komite Penggunaan Damai Ruang Angkasa di Wina, Austria. Sebelumnya, Lembaga Penerbangan dan Antariksa
              Nasional (LAPAN) menjadi host untuk RSO-Indonesia. Sejak September 2021, organisasi ini bergabung dengan
              badan riset Indonesia lainnya di bawah Badan Riset dan Inovasi Nasional (BRIN).
            </p>
            <p>
              Pada <strong>5 Mei 2021</strong>, Presiden Joko Widodo menandatangani Peraturan Presiden No. 33 Tahun 2021 yang
              menetapkan BRIN sebagai satu-satunya badan riset nasional. Peraturan ini menggabungkan semua badan riset
              nasional Indonesia seperti LIPI, BPPT, BATAN, dan LAPAN ke dalam BRIN.
            </p>
          </section>

          <section className="profile-section">
            <h2 className="section-heading">Misi dan Tujuan</h2>
            <p>Sebagai RSO-Indonesia, BRIN berkomitmen untuk:</p>
            <ul>
              <li>Menyediakan dukungan teknis dan konsultasi untuk UN-SPIDER kepada negara-negara di kawasan</li>
              <li>Berkontribusi pada upaya peningkatan kapasitas di bidang manajemen bencana dan tanggap darurat</li>
              <li>Mengembangkan dan menyediakan data geospasial untuk monitoring dan mitigasi bencana</li>
              <li>Meningkatkan kesiapsiagaan dan respon bencana melalui teknologi penginderaan jauh</li>
            </ul>
          </section>

          <section className="profile-section">
            <h2 className="section-heading">Keahlian dan Layanan</h2>

            <h3 className="section-subheading">Capacity Building</h3>
            <ul>
              <li>Fundamental of Remote Sensing and Digital Image Processing</li>
              <li>
                Aplikasi penginderaan jauh untuk lingkungan (degradasi hutan, tumpahan minyak, polusi air, penambangan
                ilegal, penurunan tanah, kawasan kumuh, dll) dan bencana (kekeringan, banjir, longsor, kebakaran hutan,
                letusan gunung berapi, tsunami)
              </li>
              <li>Advanced Remote Sensing (SAR processing and analysis)</li>
            </ul>

            <h3 className="section-subheading">Keahlian Spesifik Bencana</h3>
            <div className="hazard-tags">
              {[
                'Kekeringan',
                'Epidemi',
                'Longsor',
                'Tsunami',
                'Gempa Bumi',
                'Banjir',
                'Kebakaran Hutan',
                'Letusan Gunung Berapi',
                'Penurunan Tanah',
              ].map((hazard) => (
                <span key={hazard} className="hazard-tag">
                  {hazard}
                </span>
              ))}
            </div>

            <h3 className="section-subheading">Keahlian yang Tersedia</h3>
            <p>
              Di bawah BRIN, RSO-Indonesia dikoordinasikan oleh Sekretariat Badan Antariksa Indonesia (INASA) bekerja sama
              dengan unit lain yaitu Pusat Data dan Informasi serta Pusat Riset Penginderaan Jauh. Lebih dari
              <strong> 100 ilmuwan dan insinyur</strong> bertanggung jawab untuk melakukan semua fase operasi penginderaan
              jauh, termasuk akuisisi data, pengolahan dan manajemen data, dan analisis data termasuk analisis GIS.
            </p>
            <p>
              Anggota tim sangat berpengalaman dalam berbagai aplikasi penginderaan jauh, seperti mitigasi bencana,
              penilaian kerentanan dan risiko bencana, pemodelan perubahan iklim, monitoring lingkungan atau monitoring
              sumber daya alam.
            </p>
          </section>

          <section className="profile-section">
            <h2 className="section-heading">Database dan Informasi Berbasis Ruang Angkasa</h2>
            <p>
              Stasiun Bumi Penginderaan Jauh di Pare-Pare (Sulawesi Selatan) dan Jakarta telah menerima data dari
              Landsat-7, Terra/Aqua MODIS, SPOT-2/4, NOAA, dan FengYun-1D. Sejak 2013, LAPAN telah meningkatkan sistem
              stasiun bumi untuk menerima NPP/NPOES, FengYun-3B/C, Landsat-8/9, SPOT-5/6/7, Pleiades, dan data SAR.
            </p>
            <p>
              BRIN juga memiliki teknologi Unmanned Aerial Vehicle (UAV) untuk Penginderaan Jauh udara, yang dapat
              digunakan untuk memantau area bencana untuk mendukung kegiatan rekonstruksi dan rehabilitasi. Alat
              penginderaan jauh dan GIS digunakan untuk memproses data.
            </p>
          </section>

          <section className="profile-section">
            <h2 className="section-heading">Kolaborasi</h2>
            <p>
              Untuk mendukung informasi bencana menggunakan data satelit Penginderaan Jauh, BRIN berkoordinasi dengan
              Badan Nasional Penanggulangan Bencana (BNPB) dan bekerja sama dengan berbagai mitra strategis termasuk
              Kementerian Pertahanan (Kemhan), LEN, BlackSky, dan UN-SPIDER.
            </p>
          </section>

          <section className="profile-section profile-source">
            <p>
              <strong>Sumber:</strong> Informasi diambil dari{' '}
              <a
                href="https://www.un-spider.org/network/regional-support-offices/national-research-and-innovation-agency-brin"
                target="_blank"
                rel="noopener noreferrer"
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
