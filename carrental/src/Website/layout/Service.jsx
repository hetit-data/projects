import React, { useEffect, useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import axios from 'axios'

function Service() {
    const [carservice, setcarservicce] = useState([])

    const getservice = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setcarservicce(res.data)
    }
    useEffect(() => {
        getservice()
    }, [])

    return (
        <div>
            <Header />

            <div>

                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Service</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
                        <div className="row">
                            {
                                carservice && carservice.map((car, index) => {
                                    console.log(car)
                                    const { id, img, title, desc } = car
                                    return (
                                        <div className="col-lg-4 col-md-6 mb-2">
                                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                                        <img src="{img}" alt="" />
                                                    </div>

                                                </div>
                                                <h4 className="text-uppercase mb-3">{title}</h4>
                                                <p className="m-0">{desc}</p>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="bg-banner py-5 px-4 text-center">
                            <div className="py-5">
                                <h1 className="display-1 text-uppercase text-primary mb-4">50% OFF</h1>
                                <h1 className="text-uppercase text-light mb-4">Special Offer For New Members</h1>
                                <p className="mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                                <a className="btn btn-primary mt-2 py-3 px-5" href>Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}

            </div>


            <Footer />
        </div>
    )
}

export default Service
