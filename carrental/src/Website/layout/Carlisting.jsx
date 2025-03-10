import React, { useEffect, useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import axios from 'axios'

function Carlisting() {
    const [carlisting, setcarlisting] = useState([])

    const getcar = async () => {
        const res = await axios.get("http://localhost:3000/carlisting")
        console.log(res.data)
        setcarlisting(res.data)
    }
    useEffect(()=>{
        getcar()
    },[])
    
    return (
        <div>
            <Header />
            <div>
          
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Car Listing</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Car Listing</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Rent A Car Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
                        <div className="row">
                            {
                                carlisting && carlisting.map((car,index)=>{
                                    console.log(car)
                                    const {title,carimg,MFG,type,Km,price} = car
                                    return(
                                        <div className="col-lg-4 col-md-6 mb-2">
                                        <div className="rent-item mb-4">
                                            <img className="img-fluid mb-4" src={carimg} alt />
                                            <h4 className="text-uppercase mb-4">{title}</h4>
                                            <div className="d-flex justify-content-center mb-4">
                                                <div className="px-2">
                                                    <i className="fa fa-car text-primary mr-1" />
                                                    <span>{MFG}</span>
                                                </div>
                                                <div className="px-2 border-left border-right">
                                                    <i className="fa fa-cogs text-primary mr-1" />
                                                    <span>{type}</span>
                                                </div>
                                                <div className="px-2">
                                                    <i className="fa fa-road text-primary mr-1" />
                                                    <span>{Km}Km</span>
                                                </div>
                                            </div>
                                            <a className="btn btn-primary px-3" href>${price}/Day</a>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
                {/* Rent A car
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0">
                            <div className="col-lg-6 px-0">
                                <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{ height: 350 }}>
                                    <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="img/banner-left.png" alt />
                                    <div className="text-right">
                                        <h3 className="text-uppercase text-light mb-3">Want to be driver?</h3>
                                        <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                        <a className="btn btn-primary py-2 px-4" href>Start Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{ height: 350 }}>
                                    <div className="text-left">
                                        <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                                        <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                        <a className="btn btn-primary py-2 px-4" href>Start Now</a>
                                    </div>
                                    <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="img/banner-right.png" alt />
                                </div>
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

export default Carlisting
