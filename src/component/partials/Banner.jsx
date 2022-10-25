import React from 'react'

const Banner = ({ title }) => {
    return (
        <section className="bg-blue align-items-center d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white text-center">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner