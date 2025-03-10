import React, { useState } from 'react';
import AHeader from '../common/AHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AFooter from '../common/AFooter';

function Caradd() {
    const navigate = useNavigate();
    const [carlist, setCarlist] = useState({
        id: '',
        title: '',
        carimg: '',
        MFG: '',
        type: '',
        Km: '',
        price: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // state
    const [isImageValid, setIsImageValid] = useState(null);

    const isValidImageUrl = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });
    };

    const onchangeform = async (e) => {
        const { name, value } = e.target;
        setCarlist((prev) => ({ ...prev, id: new Date().getTime().toString(), [name]: value }));

      
        if (name === 'carimg') {
            const valid = await isValidImageUrl(value);
            setIsImageValid(valid);
        }
    };

    const validateForm = async () => {
        let validationErrors = {};
        let isValid = true;

        if (!carlist.title.trim() || carlist.title.length < 3) {
            validationErrors.title = 'Car name must be at least 3 characters.';
            isValid = false;
        }
        if (!carlist.MFG.trim()) {
            validationErrors.MFG = 'Manufacturer is required.';
            isValid = false;
        }
        if (!carlist.Km.trim() || isNaN(carlist.Km) || Number(carlist.Km) <= 0) {
            validationErrors.Km = 'Enter a valid number of kilometers.';
            isValid = false;
        }
        if (!carlist.price.trim() || isNaN(carlist.price) || Number(carlist.price) <= 0) {
            validationErrors.price = 'Enter a valid price.';
            isValid = false;
        }
        if (!carlist.type.trim()) {
            validationErrors.type = 'Select a valid car type.';
            isValid = false;
        }
        if (!carlist.carimg.trim()) {
            validationErrors.carimg = 'Image URL is required.';
            isValid = false;
        } else {
            const validImage = await isValidImageUrl(carlist.carimg);
            if (!validImage) {
                validationErrors.carimg = 'Invalid image URL.';
                isValid = false;
            }
        }

        setErrors(validationErrors);
        return isValid;
    };

    const onsubmitt = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!(await validateForm())) {
            setLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:3000/carlisting', carlist);
            alert('Car added successfully!');
            setCarlist({ id: '', title: '', carimg: '', MFG: '', type: '', Km: '', price: '' });
            setIsImageValid(null);
            navigate('/carlistingmanage');
        } catch (error) {
            console.error('API error:', error);
            alert('Failed to add car. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <AHeader />
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-4 text-uppercase text-center mb-5">Add Car</h1>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                <form onSubmit={onsubmitt}>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input type="text" className="form-control p-4" value={carlist.title} name="title" onChange={onchangeform} placeholder="Car Name" />
                                            {errors.title && <span className="text-danger">{errors.title}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input type="text" className="form-control p-4" value={carlist.carimg} name="carimg" onChange={onchangeform} placeholder="Car Image URL" />
                                            {errors.carimg && <span className="text-danger">{errors.carimg}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input type="text" className="form-control p-4" value={carlist.MFG} name="MFG" onChange={onchangeform} placeholder="Manufacturer (MFG)" />
                                            {errors.MFG && <span className="text-danger">{errors.MFG}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <select value={carlist.type} name="type" onChange={onchangeform} className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                                <option value="">Select Type</option>
                                                <option value="Auto">Auto</option>
                                                <option value="Manual">Manual</option>
                                            </select>
                                            {errors.type && <span className="text-danger">{errors.type}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input type="text" className="form-control p-4" value={carlist.Km} name="Km" onChange={onchangeform} placeholder="Kilometers Driven" />
                                            {errors.Km && <span className="text-danger">{errors.Km}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input type="number" className="form-control p-4" value={carlist.price} name="price" onChange={onchangeform} placeholder="Car Price" />
                                            {errors.price && <span className="text-danger">{errors.price}</span>}
                                        </div>
                                    </div>
                                    {isImageValid && (
                                        <div className="mb-3 text-center">
                                            <img src={carlist.carimg} alt="Car Preview" style={{ maxWidth: "200px", height: "auto", borderRadius: "10px" }} />
                                        </div>
                                    )}
                                    <div>
                                        <button className="btn btn-primary py-3 px-5" type="submit" disabled={loading}>
                                            {loading ? 'Adding...' : 'Add Car'}
                                        </button>
                                    </div>
                                </form>
                                {Object.keys(errors).length > 0 && (
                                    <div className="alert alert-danger mt-3">
                                        <strong>Fix the following errors:</strong>
                                        <ul>
                                            {Object.values(errors).map((err, index) => (
                                                <li key={index}>{err}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AFooter/>
        </div>
    );
}

export default Caradd;
