import React from 'react'

// Component
import Header from '../../component/partials/Header';
import Footer from '../../component/partials/Footer';
import Intro from '../../component/layanan-konsultasi/booking-konsultasi/Intro';
import MainContent from '../../component/layanan-konsultasi/booking-konsultasi/MainContent';


const BookingKonsultasi = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <MainContent />
            </main>
            <Footer />
        </>
    )
}

export default BookingKonsultasi