import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/partials/Footer'
import Header from '../../component/partials/Header'

const PilihDokumen = () => {
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="card shadow-md p-3 mb-3 border border-dark rounded-4 text-dark">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">Administrasi Mahasiswa Baru</p>
                            <Link to="/proses-dokumen">
                                <i className="bi bi-upload fs-5"></i>
                            </Link>
                        </div>
                    </div>




                </div>
            </section>
            <Footer />
        </>
    )
}

export default PilihDokumen