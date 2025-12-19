import React from 'react';
import { useTranslation } from '../utils/i18n';
import DynamicMap from './DynamicMap';
import '../assets/style/ColorPalette.css';
import './MapProducts.scss';

// Map ID untuk ditampilkan
const DEFAULT_MAP_ID = 'f04f7d39-d066-4531-b3a6-99e9080eff9c';

const MapProducts = () => {
    const { t } = useTranslation();
    
    return (
        <main className="map-products-page">
            {/* Map Viewer Area - Full Page */}
            <div className="map-viewer-container-full">
                <DynamicMap mapId={DEFAULT_MAP_ID} />
            </div>
        </main>
    );
};

export default MapProducts;