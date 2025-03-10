

import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from '../Coaman/Header';
import Footer from '../Coaman/Footer';
function Seebooking() {
    const [booking, setbooking] = useState([]);

    const [viewmodal, setviewmodal] = useState()
    const [viewbooking, setviewbooking] = useState({
        id: "",
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
        Payment: ""
    })
    const onview = (book) => {
        setviewmodal(true)
        setviewbooking(book)
        setupdatemodal(false)
    }

    const [updatemodal, setupdatemodal] = useState()
    const [updatedata, setupdatedata] = useState({
        id: "",
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
        Payment: ""
    })

    const onupdate = (update) => {
        setupdatemodal(true)
        setupdatedata(update)
        setviewmodal(false)
    }
    const getbooking = async () => {
        const res = await axios.get("http://localhost:3000/booking");
        setbooking(res.data);

    };
    const deletedata = async (id) => {

        try {
            await axios.delete(`http://localhost:3000/booking/${id}`)
            getbooking();

        } catch (error) {
            console.log(error)
        }
    }
    const onupdateclick = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/booking/${updatedata.id}`, updatedata)
            getbooking();
            setupdatemodal(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getbooking();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="text-center py-4">your bookings</h1>



                {/* Car Listing Table */}
                <div className="list-group">
                    {booking && booking.map((book, index) => {
                        const { id, Email, LastName, FirstName, Payment, SpecialRequest, SelectChild, SelectAdult, PickupTime, PickupDate, DropLocation, PickupLocation, MobileNumber } = book;
                        return (
                            <div key={id} className="list-group-item list-group-item-action">


                                <span className="badge bg-primary">ID : {id}</span>

                                <div className="mb-2">
                                    <strong>FirstName</strong> {FirstName}
                                </div>
                                <div className="mb-2">
                                    <strong>LastName:</strong> {LastName}
                                </div>

                                <div className="mb-2">
                                    <strong>Email:</strong> {Email}
                                </div>
                                <div className="mb-2">
                                    <strong>Phone:</strong> {MobileNumber}
                                </div>
                                <div className="mb-2">
                                    <strong>Pickup Location:</strong> {PickupLocation}
                                    <span className="ml-2"><strong>Date:</strong> {PickupDate}</span>
                                    <span className="ml-2"><strong>Time:</strong> {PickupTime}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>Drop Location:</strong> {DropLocation}
                                </div>
                                <div className="mb-2">
                                    <strong>Adults:</strong> {SelectAdult} <strong>Children:</strong> {SelectChild}
                                </div>
                                <div className="mb-2">
                                    <strong>Special Request:</strong> {SpecialRequest || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Payment Method:</strong> {Payment}
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <button onClick={() => onview(book)} className="btn btn-primary btn-sm rounded">
                                        View
                                    </button>
                                    <button onClick={() => onupdate(book)} className="btn btn-success btn-sm rounded">
                                        Edit
                                    </button>
                                    <button onClick={() => deletedata(book.id)} className="btn btn-danger btn-sm rounded">
                                        Delete
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                </div>
                {/* view modal */}

                {viewmodal && (
                    <div className="container-fluid py-5">
                        <div className="container pt-5 pb-3">
                            <h1 className="display-4 text-uppercase text-center mb-5">
                                View Booking Detail
                            </h1>
                            <div className="row">
                                <div className="col-lg-12 mb-2">
                                    <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.FirstName} placeholder="First Name" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.LastName} placeholder="Last Name" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="email" className="form-control p-4" value={viewbooking.Email} placeholder="Email" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.MobileNumber} placeholder="Mobile Number" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.PickupLocation} placeholder="Pickup Location" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.DropLocation} placeholder="Drop Location" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="date" className="form-control p-4" value={viewbooking.PickupDate} placeholder="Pickup Date" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="time" className="form-control p-4" value={viewbooking.PickupTime} placeholder="Pickup Time" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.SelectAdult} placeholder="Number of Adults" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.SelectChild} placeholder="Number of Children" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={viewbooking.Payment} placeholder="Payment Method" readOnly />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <textarea className="form-control py-3 px-4" rows={3} placeholder="Special Request" value={viewbooking.SpecialRequest} readOnly />
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => setviewmodal(false)} className="btn btn-secondary py-3 px-5 mx-3" type="button">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {updatemodal && (
                    <div className="container-fluid py-5">
                        <div className="container pt-5 pb-3">
                            <h1 className="display-4 text-uppercase text-center mb-5">
                                Update Booking Detail
                            </h1>
                            <div className="row">
                                <div className="col-lg-12 mb-2">
                                    <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.FirstName}
                                                        onChange={(e) => setupdatedata({ ...updatedata, FirstName: e.target.value })}
                                                        placeholder="First Name" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.LastName}
                                                        onChange={(e) => setupdatedata({ ...updatedata, LastName: e.target.value })}
                                                        placeholder="Last Name" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="email" className="form-control p-4" value={updatedata.Email}
                                                        onChange={(e) => setupdatedata({ ...updatedata, Email: e.target.value })}
                                                        placeholder="Email" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.MobileNumber}
                                                        onChange={(e) => setupdatedata({ ...updatedata, MobileNumber: e.target.value })}
                                                        placeholder="Mobile Number" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <select className="custom-select px-4" style={{ height: 50 }}
                                                        name='PickupLocation' value={updatedata.PickupLocation}
                                                        onChange={(e) => setupdatedata({ ...updatedata, PickupLocation: e.target.value })}>
                                                        <option>Pickup Location</option>
                                                        <option value="1">Location 1</option>
                                                        <option value="2">Location 2</option>
                                                        <option value="3">Location 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <select className="custom-select px-4" style={{ height: 50 }}
                                                        name='DropLocation' value={updatedata.DropLocation}
                                                        onChange={(e) => setupdatedata({ ...updatedata, DropLocation: e.target.value })}>
                                                        <option>Drop Location</option>
                                                        <option value="1">Location 1</option>
                                                        <option value="2">Location 2</option>
                                                        <option value="3">Location 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="date" className="form-control p-4" value={updatedata.PickupDate}
                                                        onChange={(e) => setupdatedata({ ...updatedata, PickupDate: e.target.value })}
                                                        placeholder="Pickup Date" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="time" className="form-control p-4" value={updatedata.PickupTime}
                                                        onChange={(e) => setupdatedata({ ...updatedata, PickupTime: e.target.value })}
                                                        placeholder="Pickup Time" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.SelectAdult}
                                                        onChange={(e) => setupdatedata({ ...updatedata, SelectAdult: e.target.value })}
                                                        placeholder="Number of Adults" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.SelectChild}
                                                        onChange={(e) => setupdatedata({ ...updatedata, SelectChild: e.target.value })}
                                                        placeholder="Number of Children" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input type="text" className="form-control p-4" value={updatedata.Payment}
                                                        onChange={(e) => setupdatedata({ ...updatedata, Payment: e.target.value })}
                                                        placeholder="Payment Method" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <textarea className="form-control py-3 px-4" rows={3} placeholder="Special Request"
                                                        value={updatedata.SpecialRequest}
                                                        onChange={(e) => setupdatedata({ ...updatedata, SpecialRequest: e.target.value })} />
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={onupdateclick} className="btn btn-primary py-3 px-5" type="button">
                                                    Update
                                                </button>
                                                <button onClick={() => setupdatemodal(false)} className="btn btn-secondary py-3 px-5 mx-3" type="button">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Seebooking
