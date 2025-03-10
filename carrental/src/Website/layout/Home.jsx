import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import { redirect } from 'react-router-dom'

function Home() {
    const [carlisting, setcarlisting] = useState([])

    const getcar = async () => {
        const res = await axios.get("http://localhost:3000/carlisting")
        console.log(res.data)
        setcarlisting(res.data)
    }
   
    useEffect(()=>{
        getcar()
    },[])

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
               
                {/* Carousel Start */}
                <div className="container-fluid p-0" style={{ marginBottom: 90 }}>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 900 }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                                        <h1 className="display-1 text-white mb-md-4">Best Rental Cars In Your Location</h1>
                                        <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Reserve Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 900 }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                                        <h1 className="display-1 text-white mb-md-4">Quality Cars with Unlimited Miles</h1>
                                        <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Reserve Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-prev-icon mb-n2" />
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-next-icon mb-n2" />
                            </div>
                        </a>
                    </div>
                </div>
                {/* Carousel End */}
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">01</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">Welcome To <span className="text-primary">Royal Cars</span></h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <img className="w-75 mb-4" src="img/about.png" alt />
                                <p>Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no ipsum sanctus sanctus no et no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr accusam takimata labore, et at erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at et.</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-4 mb-2">
                                <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: 150 }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: 100, height: 100 }}>
                                        <i className="fa fa-2x fa-headset text-secondary" />
                                    </div>
                                    <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div className="d-flex align-items-center bg-secondary p-4 mb-4" style={{ height: 150 }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: 100, height: 100 }}>
                                        <i className="fa fa-2x fa-car text-secondary" />
                                    </div>
                                    <h4 className="text-light text-uppercase m-0">Car Reservation Anytime</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: 150 }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: 100, height: 100 }}>
                                        <i className="fa fa-2x fa-map-marker-alt text-secondary" />
                                    </div>
                                    <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
                        <div className="row">
                            {
                                carservice && carservice.map((car, index) => {
                                    console.log(car)
                                    const { id,img, title, desc } = car
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
                {/* Rent A Car Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">03</h1>
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
                {/* Rent A Car End */}
                {/* Team Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <h1 className="display-1 text-primary text-center">04</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
                        <div className="owl-carousel team-carousel position-relative" style={{ padding: '0 30px' }}>
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
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
                {/* Testimonial Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <h1 className="display-1 text-primary text-center">05</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">Our Client's Say</h1>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4" src="img/testimonial-1.jpg" alt />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right" />
                                </div>
                                <h4 className="text-uppercase mb-2">Client Name</h4>
                                <i className="mb-2">Profession</i>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4" src="img/testimonial-2.jpg" alt />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right" />
                                </div>
                                <h4 className="text-uppercase mb-2">Client Name</h4>
                                <i className="mb-2">Profession</i>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4" src="img/testimonial-3.jpg" alt />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right" />
                                </div>
                                <h4 className="text-uppercase mb-2">Client Name</h4>
                                <i className="mb-2">Profession</i>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4" src="img/testimonial-4.jpg" alt />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right" />
                                </div>
                                <h4 className="text-uppercase mb-2">Client Name</h4>
                                <i className="mb-2">Profession</i>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">06</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">Contact Us</h1>
                        <div className="row">
                            <div className="col-lg-7 mb-2">
                                <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                    <form>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input type="text" className="form-control p-4" placeholder="Your Name" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="email" className="form-control p-4" placeholder="Your Email" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control p-4" placeholder="Subject" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control py-3 px-4" rows={5} placeholder="Message" required="required" defaultValue={""} />
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-2">
                                <div className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4" style={{ height: 435 }}>
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Head Office</h5>
                                            <p>123 Street, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Branch Office</h5>
                                            <p>123 Street, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Customer Service</h5>
                                            <p>customer@example.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Return &amp; Refund</h5>
                                            <p className="m-0">refund@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
         
            </div>
            <Footer />
        </div>
    )
}

export default Home
