import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import Header from "../Coaman/Header";
import Footer from "../Coaman/Footer"

function Carbooking() {
    const [booking, setBooking] = useState({
      FirstName: "",
      LastName: "",
      Email: "",
      MobileNumber: "",
      PickupLocation: "",
      DropLocation: "",
      PickupDate: "",
      PickupTime: "",
      SelectAdult: "",
      SelectChild: "",
      SpecialRequest: "",
      Payment: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let newErrors = {};
  
      if (!booking.FirstName.trim()) newErrors.FirstName = "First Name is required.";
      if (!booking.LastName.trim()) newErrors.LastName = "Last Name is required.";
      if (!booking.Email.trim() || !/\S+@\S+\.\S+/.test(booking.Email)) 
        newErrors.Email = "Valid Email is required.";
      if (!booking.MobileNumber.trim() || !/^\d{10}$/.test(booking.MobileNumber)) 
        newErrors.MobileNumber = "Valid 10-digit Mobile Number is required.";
      if (!booking.PickupLocation) newErrors.PickupLocation = "Pickup Location is required.";
      if (!booking.DropLocation) newErrors.DropLocation = "Drop Location is required.";
      if (!booking.PickupDate) newErrors.PickupDate = "Pickup Date is required.";
      if (!booking.PickupTime) newErrors.PickupTime = "Pickup Time is required.";
      if (!booking.SelectAdult) newErrors.SelectAdult = "Please select the number of adults.";
      if (!booking.SelectChild) newErrors.SelectChild = "Please select the number of children.";
      if (!booking.SpecialRequest.trim()) newErrors.SpecialRequest = "Special Request is required.";
      if (!booking.Payment) newErrors.Payment = "Please select a payment method.";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const changeform = (e) => {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    };
  
    const onsubmitt = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      
      try {
        await axios.post("http://localhost:3000/booking", booking);
        alert("Booking Successful!");
        setBooking({
          FirstName: "",
          LastName: "",
          Email: "",
          MobileNumber: "",
          PickupLocation: "",
          DropLocation: "",
          PickupDate: "",
          PickupTime: "",
          SelectAdult: "",
          SelectChild: "",
          SpecialRequest: "",
          Payment: "",
        });
        setErrors({});
      } catch (error) {
        console.log("API error", error);
      }
    };
  
    return (
        <div>
            <Header />
            <div>
              
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Car Booking</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Car Booking</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Detail Start */}
                <div className="container-fluid pt-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase mb-5">Mercedes Benz R3</h1>
                        <div className="row align-items-center pb-2">
                            <div className="col-lg-6 mb-4">
                                <img className="img-fluid" src="img/bg-banner.jpg" alt />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <h4 className="mb-2">$99.00/Day</h4>
                                <div className="d-flex mb-3">
                                    <h6 className="mr-2">Rating:</h6>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star-half-alt text-primary mr-1" />
                                        <small>(250)</small>
                                    </div>
                                </div>
                                <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt</p>
                                <div className="d-flex pt-1">
                                    <h6>Share on:</h6>
                                    <div className="d-inline-flex">
                                        <a className="px-2" href><i className="fab fa-facebook-f" /></a>
                                        <a className="px-2" href><i className="fab fa-twitter" /></a>
                                        <a className="px-2" href><i className="fab fa-linkedin-in" /></a>
                                        <a className="px-2" href><i className="fab fa-pinterest" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-n3 mt-lg-0 pb-4">
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Detail End */}
                {/* Car Booking Start */}
                <div className="container-fluid pb-5">
      <div className="container">
        <form onSubmit={onsubmitt}>
          <div className="row">
            {/* Left Column - Personal & Booking Details */}
            <div className="col-lg-8">
              {/* Personal Details */}
              <h2 className="mb-4">Personal Details</h2>
              <div className="mb-4">
                <div className="row">
                  <div className="col-6 form-group">
                    <input type="text" name="FirstName" value={booking.FirstName} onChange={changeform} className="form-control" placeholder="First Name" />
                    {errors.FirstName && <p className="text-danger">{errors.FirstName}</p>}
                  </div>
                  <div className="col-6 form-group">
                    <input type="text" name="LastName" value={booking.LastName} onChange={changeform} className="form-control" placeholder="Last Name" />
                    {errors.LastName && <p className="text-danger">{errors.LastName}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <input type="email" name="Email" value={booking.Email} onChange={changeform} className="form-control" placeholder="Your Email" />
                    {errors.Email && <p className="text-danger">{errors.Email}</p>}
                  </div>
                  <div className="col-6 form-group">
                    <input type="text" name="MobileNumber" value={booking.MobileNumber} onChange={changeform} className="form-control" placeholder="Mobile Number" />
                    {errors.MobileNumber && <p className="text-danger">{errors.MobileNumber}</p>}
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <h2 className="mb-4">Booking Details</h2>
              <div className="mb-4">
                <div className="row">
                  <div className="col-6 form-group">
                    <select className="form-control" name="PickupLocation" value={booking.PickupLocation} onChange={changeform}>
                      <option value="">Pickup Location</option>
                      <option value="Location 1">Location 1</option>
                      <option value="Location 2">Location 2</option>
                    </select>
                    {errors.PickupLocation && <p className="text-danger">{errors.PickupLocation}</p>}
                  </div>
                  <div className="col-6 form-group">
                    <select className="form-control" name="DropLocation" value={booking.DropLocation} onChange={changeform}>
                      <option value="">Drop Location</option>
                      <option value="Location 1">Location 1</option>
                      <option value="Location 2">Location 2</option>
                    </select>
                    {errors.DropLocation && <p className="text-danger">{errors.DropLocation}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <MDBInput type="date" name="PickupDate" value={booking.PickupDate} onChange={changeform} className="form-control" />
                    {errors.PickupDate && <p className="text-danger">{errors.PickupDate}</p>}
                  </div>
                  <div className="col-6 form-group">
                    <MDBInput type="time" name="PickupTime" value={booking.PickupTime} onChange={changeform} className="form-control" />
                    {errors.PickupTime && <p className="text-danger">{errors.PickupTime}</p>}
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="mb-4">
                <div className="row">
                  <div className="col-6 form-group">
                    <select className="form-control" name="SelectAdult" value={booking.SelectAdult} onChange={changeform}>
                      <option value="">Select Adult</option>
                      <option value="1">Adult 1</option>
                      <option value="2">Adult 2</option>
                    </select>
                    {errors.SelectAdult && <p className="text-danger">{errors.SelectAdult}</p>}
                  </div>
                  <div className="col-6 form-group">
                    <select className="form-control" name="SelectChild" value={booking.SelectChild} onChange={changeform}>
                      <option value="">Select Child</option>
                      <option value="1">Child 1</option>
                      <option value="2">Child 2</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="3" name="SpecialRequest" value={booking.SpecialRequest} onChange={changeform} placeholder="Special Request"></textarea>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Section */}
            <div className="col-lg-4">
              <div className="bg-light p-4">
                <h2 className="text-primary mb-3">Payment</h2>
                <div className="form-group">
                  <input type="radio" name="Payment" value="Paypal" onChange={changeform} /> Paypal
                </div>
                <div className="form-group">
                  <input type="radio" name="Payment" value="Direct Check" onChange={changeform} /> Direct Check
                </div>
                <div className="form-group mb-4">
                  <input type="radio" name="Payment" value="Bank Transfer" onChange={changeform} /> Bank Transfer
                </div>
                {errors.Payment && <p className="text-danger">{errors.Payment}</p>}
                <button className="btn btn-primary btn-block py-2" type="submit">
                  Reserve Now
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
                {/* Car Booking End */}
             
            </div>

            <Footer />
        </div>
    )
}

export default Carbooking
