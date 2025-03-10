import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

function Carinfo() {
    const { id } = useParams(); 
    const [carlisting, setCarlisting] = useState(null); 

    const getCars = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/carlisting/${id}`);
            setCarlisting(res.data); //  the fetched data
        } catch (error) {
            console.error('Error fetching car details:', error);
        }
    };

    useEffect(() => {
        getCars();
    }, [id]); // Re-run when ID changes

    return (
        <div className="container my-5">
            {carlisting ? ( // 
                <MDBCard className="mb-4 shadow">
                    <MDBRow className="g-0">
                   
                        <MDBCol md="3" className="d-flex align-items-center">
                            <MDBCardImage
                                src={carlisting.carimg}
                                alt={carlisting.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                            />
                        </MDBCol>

                        {/* Car Details */}
                        <MDBCol md="9">
                            <MDBCardBody>
                                <MDBCardTitle>{carlisting.title}</MDBCardTitle>
                                <MDBCardText>
                                    <small className="text-muted">
                                        <strong>ID:</strong> {carlisting.id} | <strong>Type:</strong> {carlisting.type}
                                    </small>
                                </MDBCardText>
                                <MDBCardText>
                                    <strong>Manufacturer:</strong> {carlisting.MFG}
                                </MDBCardText>
                                <MDBCardText>
                                    <strong>Kilometers Driven:</strong> {carlisting.Km} km
                                </MDBCardText>
                                <MDBCardText>
                                    <strong>Price:</strong> ₹{carlisting.price}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            ) : (
                <p className="text-center">Loading car details...</p> 
            )}
        </div>
    );
}

export default Carinfo;
