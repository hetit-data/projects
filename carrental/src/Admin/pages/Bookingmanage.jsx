import AHeader from '../common/AHeader'
import React, { useEffect, useState } from 'react';
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import AFooter from '../common/AFooter';

function Bookingmanage() {
    const [booking, setbooking] = useState([]);
    const [viewmodal, setviewmodal] = useState(false);
    const [viewbooking, setviewbooking] = useState({
        id: "", FirstName: "", LastName: "", Email: "", MobileNumber: "",
        PickupLocation: "", DropLocation: "", PickupDate: "", PickupTime: "",
        SelectAdult: "", SelectChild: "", SpecialRequest: "", Payment: ""
    });

    const [updatemodal, setupdatemodal] = useState(false);
    const [updatedata, setupdatedata] = useState(viewbooking);

    
    const [searchID, setSearchID] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [filterPayment, setFilterPayment] = useState("");

    const getbooking = async () => {
        try {
            const res = await axios.get("http://localhost:3000/booking");
            setbooking(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getbooking();
    }, []);

    const onview = (book) => {
        setviewmodal(true);
        setviewbooking(book);
        setupdatemodal(false);
    };

    const onupdate = (update) => {
        setupdatemodal(true);
        setupdatedata(update);
        setviewmodal(false);
    };

    const deletedata = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/booking/${id}`);
            getbooking();
        } catch (error) {
            console.log(error);
        }
    };

    const onupdateclick = async () => {
        try {
            await axios.put(`http://localhost:3000/booking/${updatedata.id}`, updatedata);
            getbooking();
            setupdatemodal(false);
        } catch (error) {
            console.log(error);
        }
    };

    // 🔥 **Filtering & Searching Logic**
    const filteredBookings = booking.filter((book) => {
        return (
            (searchID === "" || book.id.toString().includes(searchID)) &&
            (searchName === "" || book.FirstName.toLowerCase().includes(searchName.toLowerCase()) ||
                book.LastName.toLowerCase().includes(searchName.toLowerCase())) &&
            (searchEmail === "" || book.Email.toLowerCase().includes(searchEmail.toLowerCase())) &&
            (filterDate === "" || book.PickupDate === filterDate) &&
            (filterPayment === "" || book.Payment.toLowerCase() === filterPayment.toLowerCase())
        );
    });

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className="text-center py-4">Car Booking Management</h1>

        
                <div className="row mb-3">
                    <div className="col-md-2">
                        <input type="text" placeholder="Search by ID" value={searchID} onChange={(e) => setSearchID(e.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Search by Name" value={searchName} onChange={(e) => setSearchName(e.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Search by Email" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <select className="form-control" value={filterPayment} onChange={(e) => setFilterPayment(e.target.value)}>
                            <option value="">All Payments</option>
                            {Array.from(new Set(booking.map(b => b.Payment))).map((pay, index) => (
                                <option key={index} value={pay}>{pay}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* 🚗 Booking List */}
                <div className="list-group">
                    {filteredBookings.map((book) => {
                        return (
                            <div key={book.id} className="list-group-item list-group-item-action">
                                <span className="badge bg-primary">ID : {book.id}</span>
                                <div className="mb-2"><strong>FirstName:</strong> {book.FirstName}</div>
                                <div className="mb-2"><strong>LastName:</strong> {book.LastName}</div>
                                <div className="mb-2"><strong>Email:</strong> {book.Email}</div>
                                <div className="mb-2"><strong>Phone:</strong> {book.MobileNumber}</div>
                                <div className="mb-2"><strong>Pickup Location:</strong> {book.PickupLocation} | <strong>Date:</strong> {book.PickupDate} | <strong>Time:</strong> {book.PickupTime}</div>
                                <div className="mb-2"><strong>Drop Location:</strong> {book.DropLocation}</div>
                                <div className="mb-2"><strong>Adults:</strong> {book.SelectAdult} <strong>Children:</strong> {book.SelectChild}</div>
                                <div className="mb-2"><strong>Special Request:</strong> {book.SpecialRequest || 'N/A'}</div>
                                <div className="mb-2"><strong>Payment Method:</strong> {book.Payment}</div>

                                <div className="d-flex justify-content-between mt-3">
                                    <MDBBtn onClick={() => onview(book)} color='primary' rounded size='sm'>View</MDBBtn>
                                    <MDBBtn onClick={() => onupdate(book)} color='success' rounded size='sm'>Edit</MDBBtn>
                                    <MDBBtn onClick={() => deletedata(book.id)} color='danger' rounded size='sm'>Delete</MDBBtn>
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
            <AFooter/>
        </div>
    )
}

export default Bookingmanage
