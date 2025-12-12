import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/style/ColorPalette.css';

// WMS Server URL
const WMS_BASE_URL = 'https://spectra.brin.go.id/services/wms';

// Custom WMS Layer Component with visibility control
const WMSTileLayer = ({ url, layers, opacity = 0.7, visible = true, layerId }) => {
    const map = useMap();
    const layerRef = useRef(null);

    // Create layer once and manage visibility/opacity
    useEffect(() => {
        if (!layerRef.current) {
            const wmsLayer = L.tileLayer.wms(url, {
                layers: layers,
                format: 'image/png',
                transparent: true,
                opacity: opacity,
                version: '1.1.0',
                zIndex: 100  // Ensure WMS layers stay on top of basemap
            });

            layerRef.current = wmsLayer;
            
            // Add to map if visible
            if (visible) {
                wmsLayer.addTo(map);
            }
        }

        // Cleanup on unmount
        return () => {
            if (layerRef.current && map.hasLayer(layerRef.current)) {
                map.removeLayer(layerRef.current);
            }
        };
    }, [map, url, layers]);

    // Handle visibility changes
    useEffect(() => {
        if (layerRef.current) {
            if (visible) {
                if (!map.hasLayer(layerRef.current)) {
                    layerRef.current.addTo(map);
                }
            } else {
                if (map.hasLayer(layerRef.current)) {
                    map.removeLayer(layerRef.current);
                }
            }
        }
    }, [map, visible]);

    // Handle opacity changes
    useEffect(() => {
        if (layerRef.current) {
            layerRef.current.setOpacity(opacity);
        }
    }, [opacity]);

    return null;
};

// Function to parse WMS GetCapabilities XML and extract layer names
const parseWMSCapabilities = (xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    const layers = [];

    // Check for parsing errors
    const parserError = xmlDoc.querySelector('parsererror');
    if (parserError) {
        console.error('XML Parse Error:', parserError.textContent);
        return layers;
    }

    // Find all Layer elements in the XML
    const layerElements = xmlDoc.querySelectorAll('Layer');
    
    layerElements.forEach((layerEl) => {
        const nameEl = layerEl.querySelector('Name');
        const titleEl = layerEl.querySelector('Title');
        
        // Only add layers that have a Name (leaf layers, not groups)
        if (nameEl && nameEl.textContent) {
            const name = nameEl.textContent.trim();
            const title = titleEl ? titleEl.textContent.trim() : name;
            
            // Skip root layer or layers without proper names
            if (name && name !== '') {
                layers.push({
                    name: name,
                    title: title
                });
            }
        }
    });

    return layers;
};

// Basemap definitions
const BASEMAPS = {
    osm: {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    },
    google: {
        name: 'Google Satellite with Labels',
        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        attribution: '&copy; Google'
    },
    terrain: {
        name: 'Google Terrain',
        url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        attribution: '&copy; Google'
    },
    carto: {
        name: 'CartoDB Positron',
        url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    },
    esri: {
        name: 'Esri World Imagery',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
};

// BaseMap Layer Component (switchable)
const BaseMapLayer = ({ basemap }) => {
    const map = useMap();
    const layerRef = useRef(null);

    useEffect(() => {
        if (layerRef.current) {
            map.removeLayer(layerRef.current);
        }

        const baseMapConfig = BASEMAPS[basemap];
        if (baseMapConfig) {
            const tileLayer = L.tileLayer(baseMapConfig.url, {
                attribution: baseMapConfig.attribution,
                maxZoom: 19,
                zIndex: 0  // Ensure basemap stays at the bottom
            });
            
            tileLayer.addTo(map);
            tileLayer.bringToBack();  // Ensure basemap is always behind overlays
            layerRef.current = tileLayer;
        }

        return () => {
            if (layerRef.current) {
                map.removeLayer(layerRef.current);
            }
        };
    }, [map, basemap]);

    return null;
};

// BaseMap Selector Component
const BaseMapSelector = ({ selectedBasemap, onBasemapChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            zIndex: 1001,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            minWidth: '200px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column-reverse'
        }}>
            {/* Panel Header - will appear at bottom due to column-reverse */}
            <div style={{
                padding: '12px 16px',
                borderTop: isExpanded ? '1px solid #ddd' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--primary-dark-blue)',
                color: 'white',
                borderRadius: isExpanded ? '0 0 8px 8px' : '8px',
                cursor: 'pointer'
            }} onClick={() => setIsExpanded(!isExpanded)}>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
                    🗺️ Basemap
                </h3>
                <span style={{ fontSize: '14px' }}>
                    {isExpanded ? '▲' : '▼'}
                </span>
            </div>

            {/* Basemap List - will appear at top due to column-reverse */}
            {isExpanded && (
                <div style={{ 
                    padding: '8px',
                    borderBottom: '1px solid #ddd',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    borderRadius: '8px 8px 0 0'
                }}>
                    {Object.keys(BASEMAPS).map((key) => {
                        const basemap = BASEMAPS[key];
                        const isSelected = selectedBasemap === key;
                        
                        return (
                            <div
                                key={key}
                                onClick={() => {
                                    onBasemapChange(key);
                                    setIsExpanded(false);
                                }}
                                style={{
                                    padding: '10px 12px',
                                    marginBottom: '4px',
                                    backgroundColor: isSelected ? 'var(--secondary-cyan)' : '#f5f5f5',
                                    color: isSelected ? 'white' : '#333',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontWeight: isSelected ? 'bold' : 'normal',
                                    transition: 'all 0.2s',
                                    border: isSelected ? '2px solid var(--primary-dark-blue)' : '1px solid #ddd'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = '#e8e8e8';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                                    }
                                }}
                            >
                                {basemap.name}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// Layer Control Panel Component
const LayerControlPanel = ({ layers, layerStates, onToggleVisibility, onOpacityChange, onShowAll, onHideAll }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1000,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            minWidth: '280px',
            maxWidth: '350px',
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Panel Header */}
            <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #ddd',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--primary-dark-blue)',
                color: 'white',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer'
            }} onClick={() => setIsExpanded(!isExpanded)}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
                    📋 Kontrol Layer
                </h3>
                <span style={{ fontSize: '18px' }}>
                    {isExpanded ? '▼' : '▶'}
                </span>
            </div>

            {isExpanded && (
                <>
                    {/* Panel Actions */}
                    <div style={{
                        padding: '10px 16px',
                        borderBottom: '1px solid #eee',
                        display: 'flex',
                        gap: '8px'
                    }}>
                        <button
                            onClick={onShowAll}
                            style={{
                                flex: 1,
                                padding: '6px 12px',
                                backgroundColor: 'var(--secondary-cyan)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                        >
                            Tampilkan Semua
                        </button>
                        <button
                            onClick={onHideAll}
                            style={{
                                flex: 1,
                                padding: '6px 12px',
                                backgroundColor: '#666',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                        >
                            Sembunyikan Semua
                        </button>
                    </div>

                    {/* Layer List */}
                    <div style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        padding: '8px'
                    }}>
                        {layers.length === 0 ? (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                                Tidak ada layer tersedia
                            </div>
                        ) : (
                            layers.map((layer, index) => {
                                const layerId = layer.name;
                                const state = layerStates[layerId] || { visible: index === 0, opacity: 0.7 };

                                return (
                                    <div
                                        key={layerId}
                                        style={{
                                            padding: '10px',
                                            marginBottom: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            backgroundColor: state.visible ? '#f9f9f9' : '#f0f0f0',
                                            opacity: state.visible ? 1 : 0.7
                                        }}
                                    >
                                        {/* Layer Name and Toggle */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <label style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                flex: 1,
                                                fontWeight: state.visible ? 'bold' : 'normal'
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    checked={state.visible}
                                                    onChange={() => onToggleVisibility(layerId)}
                                                    style={{
                                                        marginRight: '8px',
                                                        width: '18px',
                                                        height: '18px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <span style={{ fontSize: '13px', color: '#333' }}>
                                                    {layer.title || layer.name}
                                                </span>
                                            </label>
                                        </div>

                                        {/* Opacity Control */}
                                        {state.visible && (
                                            <div style={{ marginTop: '8px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '4px'
                                                }}>
                                                    <span style={{ fontSize: '11px', color: '#666' }}>
                                                        Opacity:
                                                    </span>
                                                    <span style={{
                                                        fontSize: '11px',
                                                        fontWeight: 'bold',
                                                        color: 'var(--primary-dark-blue)',
                                                        minWidth: '35px'
                                                    }}>
                                                        {Math.round(state.opacity * 100)}%
                                                    </span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.01"
                                                    value={state.opacity}
                                                    onChange={(e) => onOpacityChange(layerId, parseFloat(e.target.value))}
                                                    style={{
                                                        width: '100%',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

// Map Viewer Component
const MapViewer = ({ wmsLayers, loading, layerStates, selectedBasemap, onBasemapChange, onToggleVisibility, onOpacityChange, onShowAll, onHideAll }) => {
    // Koordinat pusat peta (sekitar Jakarta/Indonesia)
    const position = [-2.5, 118];

    return (
        <div style={{ height: '70vh', width: '100%', border: '1px solid #ccc', position: 'relative' }}>
            {loading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                    background: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                    Memuat layer dari WMS server...
                </div>
            )}

            {/* BaseMap Selector */}
            {!loading && (
                <BaseMapSelector
                    selectedBasemap={selectedBasemap}
                    onBasemapChange={onBasemapChange}
                />
            )}

            {/* Layer Control Panel */}
            {!loading && wmsLayers.length > 0 && (
                <LayerControlPanel
                    layers={wmsLayers}
                    layerStates={layerStates}
                    onToggleVisibility={onToggleVisibility}
                    onOpacityChange={onOpacityChange}
                    onShowAll={onShowAll}
                    onHideAll={onHideAll}
                />
            )}

            {/* MapContainer adalah komponen utama dari react-leaflet */}
            <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
                {/* Base Map Layer (switchable) */}
                <BaseMapLayer basemap={selectedBasemap} />

                {/* WMS Layers */}
                {wmsLayers.map((layer, index) => {
                    const layerId = layer.name;
                    const state = layerStates[layerId] || { visible: index === 0, opacity: 0.7 };

                    return (
                        <WMSTileLayer
                            key={layerId}
                            layerId={layerId}
                            url={WMS_BASE_URL}
                            layers={layer.name}
                            opacity={state.opacity}
                            visible={state.visible}
                        />
                    );
                })}

            </MapContainer>
        </div>
    );
};

const MapProducts = () => {
    const [wmsLayers, setWmsLayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [layerStates, setLayerStates] = useState({});
    const [selectedBasemap, setSelectedBasemap] = useState('osm');

    // Initialize layer states when layers are loaded
    useEffect(() => {
        if (wmsLayers.length > 0) {
            const initialState = {};
            wmsLayers.forEach((layer, index) => {
                initialState[layer.name] = {
                    visible: index === 0, // First layer visible by default
                    opacity: 0.7
                };
            });
            setLayerStates(initialState);
        }
    }, [wmsLayers]);

    // Fetch WMS capabilities on component mount
    useEffect(() => {
        const fetchWMSCapabilities = async () => {
            try {
                setLoading(true);
                setError(null);

                // WMS GetCapabilities request
                const capabilitiesUrl = `${WMS_BASE_URL}?service=WMS&version=1.1.0&request=GetCapabilities`;
                
                const response = await fetch(capabilitiesUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const xmlText = await response.text();
                const layers = parseWMSCapabilities(xmlText);
                
                if (layers.length === 0) {
                    throw new Error('No layers found in WMS capabilities');
                }

                setWmsLayers(layers);
            } catch (err) {
                console.error('Error fetching WMS capabilities:', err);
                setError(err.message || 'Failed to load WMS layers. Please check if the GeoServer is accessible.');
            } finally {
                setLoading(false);
            }
        };

        fetchWMSCapabilities();
    }, []);

    // Handler functions for layer control
    const handleToggleVisibility = (layerId) => {
        setLayerStates(prev => ({
            ...prev,
            [layerId]: {
                ...prev[layerId],
                visible: !prev[layerId]?.visible
            }
        }));
    };

    const handleOpacityChange = (layerId, opacity) => {
        setLayerStates(prev => ({
            ...prev,
            [layerId]: {
                ...prev[layerId],
                opacity: opacity
            }
        }));
    };

    const handleShowAll = () => {
        const newStates = {};
        wmsLayers.forEach(layer => {
            newStates[layer.name] = {
                ...layerStates[layer.name],
                visible: true
            };
        });
        setLayerStates(newStates);
    };

    const handleHideAll = () => {
        const newStates = {};
        wmsLayers.forEach(layer => {
            newStates[layer.name] = {
                ...layerStates[layer.name],
                visible: false
            };
        });
        setLayerStates(newStates);
    };

    return (
        <div style={{ padding: '30px 50px' }}>
            <h1 style={{ color: 'var(--primary-dark-blue)' }}>Produk Peta Interaktif</h1>
            <p>Visualisasi data berbasis ruang angkasa untuk manajemen dan tanggap darurat bencana.</p>

            {/* Error Message */}
            {error && (
                <div style={{
                    padding: '15px',
                    marginBottom: '15px',
                    backgroundColor: '#fee',
                    border: '1px solid #fcc',
                    borderRadius: '5px',
                    color: '#c33'
                }}>
                    <strong>Error:</strong> {error}
                    <br />
                    <small>WMS Server: {WMS_BASE_URL}</small>
                </div>
            )}

            {/* Success Message */}
            {!loading && !error && wmsLayers.length > 0 && (
                <div style={{
                    padding: '10px',
                    marginBottom: '15px',
                    backgroundColor: '#efe',
                    border: '1px solid #cfc',
                    borderRadius: '5px',
                    color: '#3c3'
                }}>
                    <strong>✓</strong> Loaded {wmsLayers.length} layer(s) from GeoServer
                </div>
            )}


            {/* Map Viewer Area */}
            <MapViewer 
                wmsLayers={wmsLayers} 
                loading={loading}
                layerStates={layerStates}
                selectedBasemap={selectedBasemap}
                onBasemapChange={setSelectedBasemap}
                onToggleVisibility={handleToggleVisibility}
                onOpacityChange={handleOpacityChange}
                onShowAll={handleShowAll}
                onHideAll={handleHideAll}
            />

            
        </div>
    );
};

export default MapProducts;