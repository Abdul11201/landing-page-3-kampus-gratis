import React from 'react';

// Component
import Header from '../../component/partials/Header';
import Footer from '../../component/partials/Footer';
import Intro from '../../component/layanan-konsultasi/home-layanan/Intro';
import CardList from '../../component/layanan-konsultasi/home-layanan/CardList';

const HomeLayanan = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <CardList />
            </main>
            <Footer />
        </>
    )
}

export default HomeLayanan