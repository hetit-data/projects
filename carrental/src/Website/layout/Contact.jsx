import React, { useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import axios from 'axios'

function Contact() {
      const [contact, setcontact] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
        const changeform = (e) => {
            setcontact({
                ...contact,
                id: new Date().getTime().toString(),
                [e.target.name]: e.target.value
            })
            console.log(contact)
        }
        const onsubmitt = async (e) => {
            e.preventDefault();
            try {
                const res = await axios.post("http://localhost:3000/contact", contact)
                console.log(res.data)
                setcontact({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
            
                })
            }
            catch (error) {
                console.log("api error")
    
            }
        }
    return (
        <div>
            <Header />

            <div>
            
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Contact</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Contact</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Contact Us</h1>
                        <div className="row">
                            <div className="col-lg-7 mb-2">
                                <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                    <form onSubmit={onsubmitt}>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input type="text" className="form-control p-4" value={contact.name} onChange={changeform} name='name' placeholder="Your Name" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="email" className="form-control p-4" value={contact.email} onChange={changeform} name='email' placeholder="Your Email" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control p-4" value={contact.subject} onChange={changeform} name='subject' placeholder="Subject" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control py-3 px-4"value={contact.message} onChange={changeform} name='message'  rows={5} placeholder="Message" required="required" defaultValue={""} />
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-3 px-5" onSubmit={onsubmitt} type="submit">Send Message</button>
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

export default Contact
