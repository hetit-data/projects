import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Coaman/Footer';
import Header from '../Coaman/Header';

function Editprofile() {

    const redirect = useNavigate();
    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: ""
    });
    const getuser = async () => {

        try {
            const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("userid")}`)
            console.log(res.data)
            setedit(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getuser();
    }, [])
    const onchange = (e) => {

        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
        console.log(edit)
    }
    const onhandlesubmit = async (e) => {
        e.preventDefault();
        if (
            edit.name.trim() === "" ||
            edit.email.trim() === "" ||
            edit.password.trim() === "" ||
            edit.img.trim() === ""

        ) {
            toast.error("All fields are required!");
            return;
        }
        try {
            const res = await axios.patch(`http://localhost:3000/user/${edit.id}`, edit)
            console.log(res.data)
            localStorage.setItem("name", res.data.name); // Save updated user data
            if (res.status === 200) {

                setedit({
                    name: "",
                    email: "",
                    password: "",
                    img: "",
                });
                toast.success("User updated successfully");
                redirect("/")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <MDBContainer fluid>
            <Header />
            <form onSubmit={onhandlesubmit}>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol lg='9' className='my-5'>

                        <h1 className="text-black mb-4">Edit Your Profile</h1>

                        <MDBCard>
                            <MDBCardBody className='px-4'>

                                {/* Full Name */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Full name</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput name="name" value={edit.name} onChange={onchange} label='Name' size='lg' id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Email Address */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Email address</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput name="email" value={edit.email} onChange={onchange} label='example@example.com' size='lg' id='form2' type='email' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Password */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Password</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput name="password" value={edit.password} onChange={onchange} label='Password' size='lg' id='form1' type='password' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Upload Image */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Upload ima ge</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput name="img" value={edit.img} onChange={onchange} label='img' size='lg' id='form1' type='url' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Active/Inactive Status */}


                                <hr className="mx-n3" />

                                <button className="btn btn-primary my-4 btn-lg">
                                    Edit Profile
                                </button>


                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </form>
            <Footer />
        </MDBContainer>
    );
}

export default Editprofile;
