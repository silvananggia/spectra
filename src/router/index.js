import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Use lazy for importing your components
const Home = lazy(() => import('../components/Home'));
const Profile = lazy(() => import('../components/Profile'));
const MapProducts = lazy(() => import('../components/MapProducts'));
const Products = lazy(() => import('../components/Products'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));
const PrivacyPolicy = lazy(() => import('../components/PrivacyPolicy'));
const Disclaimer = lazy(() => import('../components/Disclaimer'));

// Loading component
const LoadingFallback = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh' 
    }}>
        <div>Loading...</div>
    </div>
);

function MyRouter() {
    return (
        <>
            <Header />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/maps" element={<MapProducts />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/howto" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default MyRouter;
