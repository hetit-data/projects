import AHeader from '../common/AHeader'
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
import AFooter from '../common/AFooter';
function Contactmanage() {
    const [contact, setcontact] = useState([]);
    const [viewmodal, setviewmodal] = useState()
    const [viewcontact, setviewcontact] = useState({
        id: '',
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const onview = (con) => {
        setviewmodal(true)
        setviewcontact(con)
        setupdatemodal(false)
    }

    const [updatemodal, setupdatemodal] = useState()
    const [updatedata, setupdatedata] = useState({
        id: '',
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const onupdate = (update) => {
        setupdatemodal(true)
        setupdatedata(update)
        setviewmodal(false)
    }

    const getcontact = async () => {
        const res = await axios.get("http://localhost:3000/contact");
        setcontact(res.data);

    };

    useEffect(() => {
        getcontact();
    }, []);

    const deletecontact = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/contact/${id}`)
            getcontact();
        } catch (error) {
            console.log(error)
        }
    }
    const onupdateclick = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/contact/${updatedata.id}`, updatedata)
            getcontact();
            setupdatemodal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className="text-center py-4">contact Management</h1>



                {/* Car Listing Table */}
                <div className="list-group">
                    {contact && contact.map((con, index) => {
                        const { id, name, email, message, subject } = con;
                        return (
                            <div key={id} className="list-group-item list-group-item-action">


                                <span className="badge bg-primary">ID : {id}</span>

                                <div className="mb-2">
                                    <strong>Name</strong> {name}
                                </div>
                                <div className="mb-2">
                                    <strong>Email</strong> {email}
                                </div>

                                <div className="mb-2">
                                    <strong>Subject</strong> {subject}
                                </div>
                                <div className="mb-2">
                                    <strong>Message</strong> {message}
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <button onClick={() => onview(con)} className="btn btn-outline-primary btn-sm">
                                        View
                                    </button>
                                    <button onClick={() => onupdate(con)} className="btn btn-outline-success btn-sm">
                                        Edit
                                    </button>
                                    <button onClick={() => deletecontact(con.id)} className="btn btn-outline-danger btn-sm">
                                        Delete
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {
                    viewmodal && (
                        <div className="container-fluid py-5">
                            <div className="container pt-5 pb-3">
                                <h1 className="display-4 text-uppercase text-center mb-5">
                                    view contact Detail
                                </h1>
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <div
                                            className="contact-form bg-light mb-4"
                                            style={{ padding: 30 }}
                                        >
                                            <form>
                                                <div className="row">
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={viewcontact.id}

                                                            placeholder="ID"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={viewcontact.name}

                                                            placeholder="contact Name"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={viewcontact.email}

                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={viewcontact.subject}

                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={viewcontact.message}

                                                            placeholder="message "
                                                        />
                                                    </div>


                                                </div>
                                                <div>

                                                    <button
                                                        onClick={() => setviewmodal(false)}
                                                        className="btn btn-secondary py-3 px-5 mx-3"
                                                        type="button"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }



                {/* update modal */}
                {


                    updatemodal && (
                        <div className="container-fluid py-5">
                            <div className="container pt-5 pb-3">
                                <h1 className="display-4 text-uppercase text-center mb-5">
                                    update contact Detail
                                </h1>
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <div
                                            className="contact-form bg-light mb-4"
                                            style={{ padding: 30 }}
                                        >
                                            <form>
                                                <div className="row">

                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={updatedata.name}
                                                            onChange={(e) => {
                                                                setupdatedata({
                                                                    ...updatedata,
                                                                    name: e.target.value,
                                                                })
                                                            }}
                                                            placeholder="contact Name"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={updatedata.email}
                                                            onChange={(e) => {
                                                                setupdatedata({
                                                                    ...updatedata,
                                                                    email: e.target.value,
                                                                })
                                                            }}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={updatedata.subject}
                                                            onChange={(e) => {
                                                                setupdatedata({
                                                                    ...updatedata,
                                                                    subject: e.target.value,
                                                                })
                                                            }}
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control p-4"
                                                            value={updatedata.message}
                                                            onChange={(e) => {
                                                                setupdatedata({
                                                                    ...updatedata,
                                                                    message: e.target.value,
                                                                })
                                                            }}
                                                            placeholder="message "
                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <button
                                                        onClick={onupdateclick}
                                                        className="btn btn-primary py-3 px-5"
                                                        type="button"
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        onClick={() => setupdatemodal(false)}
                                                        className="btn btn-secondary py-3 px-5 mx-3"
                                                        type="button"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }

            </div>
            <AFooter />
        </div>
    )
}

export default Contactmanage
