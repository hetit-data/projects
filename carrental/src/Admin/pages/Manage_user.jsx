import React, { useEffect, useRef, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import AHeader from '../common/AHeader';
import AFooter from '../common/AFooter';
export default function Manage_user() {
    const [user, setuser] = useState()
    const [edit, setedit] = useState(null)
    const [editing, setediting] = useState({

        id: "",
        name: "  ",
        email: "",

        img: "",
        status: "unblock"
    })


    const viewdata = (data) => {
        setedit(true)
        setediting(data)

        setTimeout(() => {
            viewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }


    const viewRef = useRef(null);

    const getcar = async () => {
        const res = await axios.get("http://localhost:3000/user")
        console.log(res.data)
        setuser(res.data)

    }
    useEffect(() => {
        getcar();

    })
    const deletedata = async (id) => {
        await axios.delete(`http://localhost:3000/user/${id}`)
        if (editing.id === id) {
            setedit(false); // Close the view modal
        }

        getcar();

    }
    const updatedata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        const status = res.data.status
        try {
            if (status === "block") {
                const res = await axios.patch(`http://localhost:3000/user/${id}`, { status: "unblock" })
                console.log(res.data)
                toast.success("user unblock")
                getcar();

            }
            else if (status === "unblock") {
                const res = await axios.patch(`http://localhost:3000/user/${id}`, { status: "block" })
                console.log(res.data)
                toast.success("user unblock")
                getcar()

            }
        }
        catch {

            console.log("error")
        }
    }

    return (

        <div className='container'>
            <AHeader />
            <div className='table-responsive'>


                <MDBTable align='middle' className='table-hover'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>IMAGE</th>

                            <th scope='col'>Email</th>

                            <th scope='col'>Status</th>
                            <th scope='col' className='text-center'>Actions</th>


                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            user && user.map((data) => {
                                return (

                                    <tr>
                                        <td>{data.id}</td>
                                        <td>
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>{data.name}</p>

                                            </div>

                                        </td>
                                        <td>

                                            <img
                                                src={data.img}
                                                alt='Avatar'
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                        </td>

                                        <td>
                                            <p className='fw-normal mb-1'>{data.email}</p>
                                        </td>

                                        <td>

                                            <MDBBadge color='success' pill>
                                                {data.status}
                                            </MDBBadge>
                                        </td>
                                        <td className='text-center'>
                                            <button onClick={() => viewdata(data)} className="btn btn-outline-primary btn-sm mx-1">
                                                View
                                            </button>
                                            <button onClick={() => updatedata(data.id)} className="btn btn-outline-success btn-sm mx-1">
                                                Edit
                                            </button>
                                            <button onClick={() => deletedata(data.id)} className="btn btn-outline-danger btn-sm mx-1">
                                                Delete
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                </MDBTable>

                {/* view modal */}
                {
                    edit && (
                        <MDBContainer fluid>
                            <form ref={viewRef}>
                                <MDBRow className='d-flex justify-content-center align-items-center'>
                                    <MDBCol lg='9' className='my-5'>

                                        <h1 className="text-black mb-4">view user</h1>

                                        <MDBCard>
                                            <MDBCardBody className='px-4'>

                                                {/* Full Name */}
                                                <MDBRow className='align-items-center pt-4 pb-3'>
                                                    <MDBCol md='3' className='ps-5'>
                                                        <h6 className="mb-0">Full name</h6>
                                                    </MDBCol>
                                                    <MDBCol md='9' className='pe-5'>
                                                        <MDBInput label='Name' name="name" value={editing.name} size='lg' id='form1' type='text' />
                                                    </MDBCol>
                                                </MDBRow>

                                                <hr className="mx-n3" />

                                                <MDBRow className='align-items-center pt-4 pb-3'>
                                                    <MDBCol md='3' className='ps-5'>
                                                        <h6 className="mb-0">ID</h6>
                                                    </MDBCol>
                                                    <MDBCol md='9' className='pe-5'>
                                                        <MDBInput label='id' name="id" value={editing.id} size='lg' id='form1' type='text' />
                                                    </MDBCol>
                                                </MDBRow>

                                                <hr className="mx-n3" />

                                                <MDBRow className='align-items-center pt-4 pb-3'>
                                                    <MDBCol md='3' className='ps-5'>
                                                        <h6 className="mb-0">status</h6>
                                                    </MDBCol>
                                                    <MDBCol md='9' className='pe-5'>
                                                        <MDBInput label='status' name="status" value={editing.status} size='lg' id='form1' type='text' />
                                                    </MDBCol>
                                                </MDBRow>

                                                <hr className="mx-n3" />

                                                {/* Email Address */}
                                                <MDBRow className='align-items-center pt-4 pb-3'>
                                                    <MDBCol md='3' className='ps-5'>
                                                        <h6 className="mb-0">Email address</h6>
                                                    </MDBCol>
                                                    <MDBCol md='9' className='pe-5'>
                                                        <MDBInput label='example@example.com' value={editing.email} size='lg' id='form2' type='email' />
                                                    </MDBCol>
                                                </MDBRow>

                                                <hr className="mx-n3" />



                                                {/* Upload Image */}
                                                <MDBRow className='align-items-center pt-4 pb-3'>
                                                    <MDBCol md='3' className='ps-5'>
                                                        <h6 className="mb-0">Upload image</h6>
                                                    </MDBCol>
                                                    <MDBCol md='9' className='pe-5'>
                                                        <MDBInput name='img' label='img' value={editing.img} size='lg' id='form1' type='text' />
                                                    </MDBCol>
                                                </MDBRow>

                                                <hr className="mx-n3" />

                                                {/* Active/Inactive Status */}


                                                <hr className="mx-n3" />

                                                <button className="btn btn-primary my-4 btn-lg">
                                                    CANCEL
                                                </button>


                                            </MDBCardBody>
                                        </MDBCard>

                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </MDBContainer>


                    )
                }






            </div>
            <AFooter />
        </div>





    );

}
