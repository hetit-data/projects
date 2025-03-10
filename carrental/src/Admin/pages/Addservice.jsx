import React, { useState } from 'react';
import AHeader from '../common/AHeader';
import axios from 'axios';
import AFooter from '../common/AFooter'
function Addservice() {
    const [service, setService] = useState({
        id: "",
        title: "",
        img: "",
        desc: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        img: "",
        desc: ""
    });

    const isValidImageUrl = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(true); 
            img.onerror = () => resolve(false);
        });
    };

 
    const onChangeForm = (e) => {
        setService({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        });
    };

    const validateForm = async () => {
        let newErrors = { title: "", img: "", desc: "" };
        let isValid = true;

        if (!service.title.trim()) {
            newErrors.title = "Title is required!";
            isValid = false;
        }
        if (!service.desc.trim()) {
            newErrors.desc = "Description is required!";
            isValid = false;
        }
        if (!service.img.trim()) {
            newErrors.img = "Image URL is required!";
            isValid = false;
        } else {
            const validImg = await isValidImageUrl(service.img);
            if (!validImg) {
                newErrors.img = "Invalid image URL!";
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    //  form submission
    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!(await validateForm())) return;

        try {
            const res = await axios.post("http://localhost:3000/service", service);
            console.log(res.data);
            setService({ id: "", title: "", img: "", desc: "" });
            setErrors({ title: "", img: "", desc: "" }); // clear errors 
        } catch (error) {
            console.error("API error:", error);
        }
    };

    return (
        <div>
            <AHeader />
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-4 text-uppercase text-center mb-5">Add Service</h1>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                <form onSubmit={onSubmitForm}>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                value={service.title}
                                                name="title"
                                                onChange={onChangeForm}
                                                className="form-control p-4"
                                                placeholder="Service title"
                                            />
                                            {errors.title && <small className="text-danger">{errors.title}</small>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                value={service.img}
                                                name="img"
                                                onChange={onChangeForm}
                                                className="form-control p-4"
                                                placeholder="Service Image URL"
                                            />
                                            {errors.img && <small className="text-danger">{errors.img}</small>}
                                        </div>
                                    </div>

                                    {service.img && !errors.img && (
                                        <div className="mb-3 text-center">
                                            <img src={service.img} alt="Preview" style={{ maxWidth: "200px", height: "auto", borderRadius: "10px" }} />
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <textarea
                                            value={service.desc}
                                            name="desc"
                                            onChange={onChangeForm}
                                            className="form-control py-3 px-4"
                                            rows={5}
                                            placeholder="Description"
                                        />
                                        {errors.desc && <small className="text-danger">{errors.desc}</small>}
                                    </div>

                                    <div>
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Add Service
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AFooter/> 
        </div>
    
    );

}

export default Addservice;
