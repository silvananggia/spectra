import React, { useState } from 'react';
import '../assets/style/ColorPalette.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState('wms');
    
    // Base URL untuk services - akan menggunakan domain spectra.brin.go.id
    const BASE_URL = 'https://spectra.brin.go.id/services';
    const WMS_URL = `${BASE_URL}/wms`;
    const WCS_URL = `${BASE_URL}/wcs`;
    const WFS_URL = `${BASE_URL}/wfs`;

    const CodeBlock = ({ children, title }) => (
        <div style={{ 
            marginBottom: '20px',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            overflowX: 'auto'
        }}>
            {title && <h4 style={{ marginTop: 0, marginBottom: '10px', color: 'var(--primary-dark-blue)' }}>{title}</h4>}
            <pre style={{ 
                margin: 0, 
                fontFamily: 'monospace', 
                fontSize: '0.9em',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
            }}>
                <code>{children}</code>
            </pre>
        </div>
    );

    const ExampleCard = ({ title, description, code, explanation }) => (
        <div style={{
            marginBottom: '30px',
            padding: '20px',
            backgroundColor: 'var(--white)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3 style={{ color: 'var(--secondary-cyan)', marginTop: 0 }}>{title}</h3>
            <p style={{ color: '#666', marginBottom: '15px' }}>{description}</p>
            <CodeBlock title="Contoh URL">{code}</CodeBlock>
            {explanation && (
                <div style={{ 
                    padding: '10px', 
                    backgroundColor: '#e8f4f8', 
                    borderRadius: '5px',
                    marginTop: '10px'
                }}>
                    <strong>Penjelasan:</strong>
                    <p style={{ margin: '5px 0 0 0' }}>{explanation}</p>
                </div>
            )}
        </div>
    );

    return (
        <main style={{ padding: '30px 50px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>
                Layanan Web Services
            </h1>
            <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
                Dokumentasi penggunaan layanan WMS, WCS, dan WFS untuk mengakses data geospasial SPECTRA BRIN.
            </p>

            {/* Tab Navigation */}
            <div style={{
                display: 'flex',
                borderBottom: '2px solid #ddd',
                marginBottom: '30px',
                gap: '10px'
            }}>
                <button
                    onClick={() => setActiveTab('wms')}
                    style={{
                        padding: '12px 24px',
                        border: 'none',
                        backgroundColor: activeTab === 'wms' ? 'var(--primary-dark-blue)' : 'transparent',
                        color: activeTab === 'wms' ? 'var(--white)' : 'var(--primary-dark-blue)',
                        cursor: 'pointer',
                        fontSize: '1em',
                        fontWeight: activeTab === 'wms' ? 'bold' : 'normal',
                        borderBottom: activeTab === 'wms' ? '3px solid var(--secondary-cyan)' : '3px solid transparent',
                        transition: 'all 0.3s'
                    }}
                >
                    WMS
                </button>
                <button
                    onClick={() => setActiveTab('wcs')}
                    style={{
                        padding: '12px 24px',
                        border: 'none',
                        backgroundColor: activeTab === 'wcs' ? 'var(--primary-dark-blue)' : 'transparent',
                        color: activeTab === 'wcs' ? 'var(--white)' : 'var(--primary-dark-blue)',
                        cursor: 'pointer',
                        fontSize: '1em',
                        fontWeight: activeTab === 'wcs' ? 'bold' : 'normal',
                        borderBottom: activeTab === 'wcs' ? '3px solid var(--secondary-cyan)' : '3px solid transparent',
                        transition: 'all 0.3s'
                    }}
                >
                    WCS
                </button>
                <button
                    onClick={() => setActiveTab('wfs')}
                    style={{
                        padding: '12px 24px',
                        border: 'none',
                        backgroundColor: activeTab === 'wfs' ? 'var(--primary-dark-blue)' : 'transparent',
                        color: activeTab === 'wfs' ? 'var(--white)' : 'var(--primary-dark-blue)',
                        cursor: 'pointer',
                        fontSize: '1em',
                        fontWeight: activeTab === 'wfs' ? 'bold' : 'normal',
                        borderBottom: activeTab === 'wfs' ? '3px solid var(--secondary-cyan)' : '3px solid transparent',
                        transition: 'all 0.3s'
                    }}
                >
                    WFS
                </button>
            </div>

            {/* WMS Content */}
            {activeTab === 'wms' && (
                <div>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary-dark-blue)', marginBottom: '20px' }}>
                            Web Map Service (WMS)
                        </h2>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            WMS adalah standar OGC untuk melayani peta georeferensi sebagai gambar. WMS menghasilkan 
                            peta sebagai gambar statis yang dapat ditampilkan di browser atau aplikasi GIS.
                        </p>

                        <ExampleCard
                            title="1. GetCapabilities"
                            description="Mendapatkan informasi tentang layer yang tersedia di server WMS"
                            code={`${WMS_URL}?service=WMS&version=1.1.0&request=GetCapabilities`}
                            explanation="Request ini mengembalikan dokumen XML yang berisi daftar semua layer yang tersedia, format yang didukung, dan informasi lainnya."
                        />

                        <ExampleCard
                            title="2. GetMap"
                            description="Mendapatkan peta sebagai gambar (PNG, JPEG, dll)"
                            code={`${WMS_URL}?service=WMS&version=1.1.0&request=GetMap&layers=nama_layer&styles=&bbox=95.0,-11.0,141.0,6.0&width=800&height=600&srs=EPSG:4326&format=image/png&transparent=true`}
                            explanation="Parameter penting: layers (nama layer), bbox (bounding box: minx,miny,maxx,maxy), width/height (ukuran gambar), srs (sistem koordinat), format (format gambar)."
                        />

                        <ExampleCard
                            title="3. GetFeatureInfo"
                            description="Mendapatkan informasi atribut dari feature pada koordinat tertentu"
                            code={`${WMS_URL}?service=WMS&version=1.1.0&request=GetFeatureInfo&layers=nama_layer&query_layers=nama_layer&x=400&y=300&width=800&height=600&srs=EPSG:4326&bbox=95.0,-11.0,141.0,6.0&info_format=text/html`}
                            explanation="Digunakan untuk query informasi pada koordinat tertentu. Parameter x dan y adalah koordinat piksel dalam gambar peta."
                        />

                        <div style={{
                            padding: '20px',
                            backgroundColor: '#fff3cd',
                            border: '1px solid #ffc107',
                            borderRadius: '5px',
                            marginTop: '30px'
                        }}>
                            <h4 style={{ marginTop: 0, color: '#856404' }}>💡 Tips Penggunaan WMS:</h4>
                            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#856404' }}>
                                <li>Gunakan format <code>image/png</code> dengan <code>transparent=true</code> untuk overlay layer</li>
                                <li>Parameter <code>bbox</code> harus sesuai dengan SRS yang digunakan</li>
                                <li>Untuk penggunaan di Leaflet/OpenLayers, gunakan versi 1.1.0 atau 1.3.0</li>
                                <li>Multiple layers dapat digabungkan dengan memisahkan nama layer dengan koma: <code>layers=layer1,layer2</code></li>
                            </ul>
                        </div>
                    </section>
                </div>
            )}

            {/* WCS Content */}
            {activeTab === 'wcs' && (
                <div>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary-dark-blue)', marginBottom: '20px' }}>
                            Web Coverage Service (WCS)
                        </h2>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            WCS adalah standar OGC untuk mengakses data raster (coverage) dalam format aslinya. 
                            Berbeda dengan WMS yang mengembalikan gambar, WCS mengembalikan data raster yang dapat dianalisis lebih lanjut.
                        </p>

                        <ExampleCard
                            title="1. GetCapabilities"
                            description="Mendapatkan informasi tentang coverage yang tersedia"
                            code={`${WCS_URL}?service=WCS&version=2.0.1&request=GetCapabilities`}
                            explanation="Mengembalikan dokumen XML yang berisi daftar semua coverage yang tersedia beserta format dan sistem koordinat yang didukung."
                        />

                        <ExampleCard
                            title="2. DescribeCoverage"
                            description="Mendapatkan metadata detail tentang coverage tertentu"
                            code={`${WCS_URL}?service=WCS&version=2.0.1&request=DescribeCoverage&coverageId=nama_coverage`}
                            explanation="Mengembalikan informasi detail tentang coverage seperti extent, CRS, format, dan struktur data."
                        />

                        <ExampleCard
                            title="3. GetCoverage"
                            description="Mendownload data coverage dalam format raster (GeoTIFF, NetCDF, dll)"
                            code={`${WCS_URL}?service=WCS&version=2.0.1&request=GetCoverage&coverageId=nama_coverage&format=image/tiff&subset=Long(95.0,141.0)&subset=Lat(-11.0,6.0)&subsettingCrs=EPSG:4326&outputCrs=EPSG:4326`}
                            explanation="Parameter penting: coverageId (nama coverage), format (format output seperti image/tiff), subset (subset spasial dengan format subset=axis(min,max)), subsettingCrs dan outputCrs (sistem koordinat)."
                        />

                        <div style={{
                            padding: '20px',
                            backgroundColor: '#fff3cd',
                            border: '1px solid #ffc107',
                            borderRadius: '5px',
                            marginTop: '30px'
                        }}>
                            <h4 style={{ marginTop: 0, color: '#856404' }}>💡 Tips Penggunaan WCS:</h4>
                            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#856404' }}>
                                <li>Format <code>image/tiff</code> atau <code>GeoTIFF</code> paling umum digunakan</li>
                                <li>Gunakan <code>subset</code> untuk membatasi area yang didownload</li>
                                <li>Data WCS dapat langsung digunakan di software GIS seperti QGIS, ArcGIS, atau dianalisis dengan Python (rasterio, GDAL)</li>
                                <li>Untuk analisis lebih lanjut, download data dalam format yang mendukung metadata geospasial</li>
                            </ul>
                        </div>
                    </section>
                </div>
            )}

            {/* WFS Content */}
            {activeTab === 'wfs' && (
                <div>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary-dark-blue)', marginBottom: '20px' }}>
                            Web Feature Service (WFS)
                        </h2>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            WFS adalah standar OGC untuk mengakses data vektor (feature) dalam format aslinya. 
                            WFS mengembalikan data geometri dan atribut yang dapat dianalisis dan dimodifikasi.
                        </p>

                        <ExampleCard
                            title="1. GetCapabilities"
                            description="Mendapatkan informasi tentang feature type yang tersedia"
                            code={`${WFS_URL}?service=WFS&version=2.0.0&request=GetCapabilities`}
                            explanation="Mengembalikan dokumen XML yang berisi daftar semua feature type yang tersedia, operasi yang didukung, dan format output."
                        />

                        <ExampleCard
                            title="2. DescribeFeatureType"
                            description="Mendapatkan schema (struktur) dari feature type tertentu"
                            code={`${WFS_URL}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeName=nama_feature_type`}
                            explanation="Mengembalikan definisi schema XML yang menjelaskan struktur atribut dari feature type, termasuk nama field dan tipe datanya."
                        />

                        <ExampleCard
                            title="3. GetFeature"
                            description="Mendownload data feature dalam format vektor (GML, GeoJSON, Shapefile, dll)"
                            code={`${WFS_URL}?service=WFS&version=2.0.0&request=GetFeature&typeName=nama_feature_type&outputFormat=application/json&srsName=EPSG:4326&bbox=95.0,-11.0,141.0,6.0,EPSG:4326`}
                            explanation="Parameter penting: typeName (nama feature type), outputFormat (format seperti application/json untuk GeoJSON, text/xml untuk GML), bbox (bounding box untuk filter spasial), srsName (sistem koordinat)."
                        />

                        <ExampleCard
                            title="4. GetFeature dengan Filter"
                            description="Mendownload feature dengan filter atribut menggunakan CQL_FILTER"
                            code={`${WFS_URL}?service=WFS&version=2.0.0&request=GetFeature&typeName=nama_feature_type&outputFormat=application/json&CQL_FILTER=attribute_name='value'`}
                            explanation="Menggunakan CQL_FILTER untuk melakukan query berdasarkan atribut. Contoh: CQL_FILTER=jenis_bencana='Banjir' AND tanggal>'2025-01-01'"
                        />

                        <div style={{
                            padding: '20px',
                            backgroundColor: '#fff3cd',
                            border: '1px solid #ffc107',
                            borderRadius: '5px',
                            marginTop: '30px'
                        }}>
                            <h4 style={{ marginTop: 0, color: '#856404' }}>💡 Tips Penggunaan WFS:</h4>
                            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#856404' }}>
                                <li>Format <code>application/json</code> menghasilkan GeoJSON yang mudah digunakan di web</li>
                                <li>Format <code>text/xml</code> atau <code>application/gml+xml</code> menghasilkan GML (standar OGC)</li>
                                <li>Gunakan <code>maxFeatures</code> untuk membatasi jumlah feature yang dikembalikan</li>
                                <li>Data WFS dapat langsung digunakan di QGIS, ArcGIS, atau diolah dengan Python (geopandas, shapely)</li>
                                <li>Untuk query kompleks, gunakan <code>CQL_FILTER</code> atau <code>FILTER</code> dengan XML</li>
                            </ul>
                        </div>
                    </section>
                </div>
            )}

            {/* QGIS & ArcGIS Usage */}
            <section style={{
                marginTop: '50px',
                padding: '30px',
                backgroundColor: 'var(--white)',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ color: 'var(--primary-dark-blue)', marginTop: 0, marginBottom: '30px' }}>
                    Penggunaan dengan QGIS dan ArcGIS
                </h2>

                {/* QGIS Section */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: 'var(--secondary-cyan)', marginBottom: '20px', fontSize: '1.5em' }}>
                        🌍 QGIS
                    </h3>
                    
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menambahkan WMS Layer</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Buka QGIS dan buat project baru</li>
                            <li>Klik kanan pada panel <strong>Browser</strong> → <strong>New Connection</strong></li>
                            <li>Pilih <strong>WMS/WMTS</strong> dari daftar</li>
                            <li>Isi form dengan informasi berikut:
                                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                    <li><strong>Name:</strong> SPECTRA BRIN WMS</li>
                                    <li><strong>URL:</strong> <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{WMS_URL}</code></li>
                                </ul>
                            </li>
                            <li>Klik <strong>OK</strong> untuk menyimpan koneksi</li>
                            <li>Expand koneksi di Browser panel, pilih layer yang diinginkan, dan drag ke canvas</li>
                        </ol>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menambahkan WFS Layer</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Klik kanan pada panel <strong>Browser</strong> → <strong>New Connection</strong></li>
                            <li>Pilih <strong>WFS</strong> dari daftar</li>
                            <li>Isi form dengan:
                                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                    <li><strong>Name:</strong> SPECTRA BRIN WFS</li>
                                    <li><strong>URL:</strong> <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{WFS_URL}</code></li>
                                </ul>
                            </li>
                            <li>Klik <strong>OK</strong> dan expand koneksi untuk melihat feature types</li>
                            <li>Drag feature type ke canvas untuk menambahkan sebagai layer vektor</li>
                        </ol>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menggunakan WCS (Download Coverage)</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Menu <strong>Layer</strong> → <strong>Add Layer</strong> → <strong>Add Raster Layer</strong></li>
                            <li>Pilih tab <strong>Source</strong> → <strong>Protocol: HTTP(s), cloud, etc.</strong></li>
                            <li>Masukkan URL GetCoverage:
                                <CodeBlock>{`${WCS_URL}?service=WCS&version=2.0.1&request=GetCoverage&coverageId=nama_coverage&format=image/tiff&subset=Long(95.0,141.0)&subset=Lat(-11.0,6.0)&subsettingCrs=EPSG:4326&outputCrs=EPSG:4326`}</CodeBlock>
                            </li>
                            <li>Atau gunakan plugin <strong>WCS Client</strong> untuk akses yang lebih mudah</li>
                        </ol>
                    </div>

                    <div style={{
                        padding: '15px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '5px',
                        marginTop: '20px'
                    }}>
                        <strong>💡 Tips QGIS:</strong>
                        <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px' }}>
                            <li>Untuk akses cepat, gunakan menu <strong>Layer</strong> → <strong>Add Layer</strong> → <strong>Add WMS/WMTS Layer</strong></li>
                            <li>WMS layer dapat di-styling dengan mengubah simbologi di Properties</li>
                            <li>WFS layer dapat diedit jika server mendukung transaksi (WFS-T)</li>
                            <li>Gunakan <strong>Identify Features</strong> tool untuk melihat atribut dari WMS/WFS layer</li>
                        </ul>
                    </div>
                </div>

                {/* ArcGIS Section */}
                <div style={{ marginBottom: '40px', paddingTop: '30px', borderTop: '2px solid #ddd' }}>
                    <h3 style={{ color: 'var(--secondary-cyan)', marginBottom: '20px', fontSize: '1.5em' }}>
                        🗺️ ArcGIS (ArcMap / ArcGIS Pro)
                    </h3>
                    
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menambahkan WMS Layer (ArcMap)</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Buka ArcMap dan buat map document baru</li>
                            <li>Klik kanan pada <strong>Layers</strong> di Table of Contents → <strong>Add Data</strong> → <strong>Add Data from ArcGIS Online</strong></li>
                            <li>Atau gunakan: <strong>File</strong> → <strong>Add Data</strong> → <strong>Add Data from ArcGIS Server</strong></li>
                            <li>Pilih <strong>Add WMS Server</strong></li>
                            <li>Masukkan URL: <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{WMS_URL}</code></li>
                            <li>Klik <strong>Get Layers</strong> untuk melihat daftar layer</li>
                            <li>Pilih layer yang diinginkan dan klik <strong>Add</strong></li>
                        </ol>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menambahkan WMS Layer (ArcGIS Pro)</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Buka ArcGIS Pro dan buat project baru</li>
                            <li>Tab <strong>Map</strong> → <strong>Add Data</strong> → <strong>Data from Path</strong></li>
                            <li>Masukkan URL WMS: <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{WMS_URL}?service=WMS&version=1.1.0&request=GetCapabilities</code></li>
                            <li>Atau gunakan: <strong>Insert</strong> → <strong>Connections</strong> → <strong>New WMS Server Connection</strong></li>
                            <li>Masukkan URL server dan klik <strong>OK</strong></li>
                            <li>Expand connection di Catalog pane dan drag layer ke map</li>
                        </ol>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menambahkan WFS Layer</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li><strong>ArcMap:</strong> <strong>File</strong> → <strong>Add Data</strong> → <strong>Add Data from ArcGIS Server</strong> → <strong>Add WFS Server</strong></li>
                            <li><strong>ArcGIS Pro:</strong> <strong>Insert</strong> → <strong>Connections</strong> → <strong>New WFS Server Connection</strong></li>
                            <li>Masukkan URL: <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{WFS_URL}</code></li>
                            <li>Klik <strong>Get Layers</strong> atau <strong>OK</strong> untuk melihat feature types</li>
                            <li>Pilih feature type dan tambahkan ke map</li>
                        </ol>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: 'var(--primary-dark-blue)', marginBottom: '10px' }}>Menggunakan WCS</h4>
                        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Gunakan <strong>ArcGIS Image Server</strong> atau download langsung melalui browser</li>
                            <li>Buka URL GetCoverage di browser untuk download data raster</li>
                            <li>Setelah download, tambahkan file GeoTIFF ke map menggunakan <strong>Add Data</strong></li>
                            <li>Atau gunakan Python script dengan arcpy untuk mengakses WCS secara programmatic</li>
                        </ol>
                    </div>

                    <div style={{
                        padding: '15px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '5px',
                        marginTop: '20px'
                    }}>
                        <strong>💡 Tips ArcGIS:</strong>
                        <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px' }}>
                            <li>WMS layer dapat di-query menggunakan <strong>Identify</strong> tool</li>
                            <li>WFS layer dapat di-export sebagai shapefile atau feature class</li>
                            <li>Gunakan <strong>Layer Properties</strong> untuk mengatur transparansi dan styling</li>
                            <li>Untuk performa lebih baik, gunakan <strong>Cache</strong> untuk WMS layer</li>
                            <li>ArcGIS Pro memiliki dukungan yang lebih baik untuk OGC services dibanding ArcMap</li>
                        </ul>
                    </div>
                </div>

                {/* Quick Reference */}
                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffc107',
                    borderRadius: '5px'
                }}>
                    <h4 style={{ marginTop: 0, color: '#856404' }}>📋 Quick Reference - URL untuk Koneksi</h4>
                    <div style={{ marginTop: '15px' }}>
                        <p style={{ margin: '5px 0', color: '#856404' }}><strong>WMS:</strong></p>
                        <CodeBlock>{WMS_URL}</CodeBlock>
                        
                        <p style={{ margin: '5px 0', color: '#856404' }}><strong>WFS:</strong></p>
                        <CodeBlock>{WFS_URL}</CodeBlock>
                        
                        <p style={{ margin: '5px 0', color: '#856404' }}><strong>WCS:</strong></p>
                        <CodeBlock>{WCS_URL}</CodeBlock>
                    </div>
                </div>
            </section>

            {/* General Information */}
            <section style={{
                marginTop: '50px',
                padding: '30px',
                backgroundColor: 'var(--bg-light-gray)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary-cyan)'
            }}>
                <h2 style={{ color: 'var(--primary-dark-blue)', marginTop: 0 }}>Informasi Umum</h2>
                <div style={{ lineHeight: '1.8' }}>
                    <p><strong>Base URL Services:</strong></p>
                    <CodeBlock>{BASE_URL}</CodeBlock>
                    
                    <p><strong>Versi yang Didukung:</strong></p>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li>WMS: 1.1.0, 1.3.0</li>
                        <li>WCS: 2.0.1</li>
                        <li>WFS: 2.0.0</li>
                    </ul>

                    <p><strong>Format yang Didukung:</strong></p>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li><strong>WMS:</strong> image/png, image/jpeg, image/gif</li>
                        <li><strong>WCS:</strong> image/tiff, application/netcdf</li>
                        <li><strong>WFS:</strong> application/json (GeoJSON), text/xml (GML), application/gml+xml</li>
                    </ul>

                    <p><strong>Sistem Koordinat Default:</strong> EPSG:4326 (WGS84)</p>
                </div>
            </section>

            {/* Contact/Support */}
            <section style={{
                marginTop: '30px',
                padding: '20px',
                backgroundColor: '#e8f4f8',
                borderRadius: '5px'
            }}>
                <h3 style={{ color: 'var(--primary-dark-blue)', marginTop: 0 }}>Butuh Bantuan?</h3>
                <p style={{ marginBottom: 0 }}>
                    Untuk pertanyaan atau dukungan teknis terkait penggunaan layanan web services, 
                    silakan hubungi tim SPECTRA BRIN melalui halaman <a href="/contact" style={{ color: 'var(--secondary-cyan)' }}>Kontak</a>.
                </p>
            </section>
        </main>
    );
};

export default Services;


