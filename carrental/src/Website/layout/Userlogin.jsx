import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
function Userlogin() {
    useEffect(() => {
        if (localStorage.getItem("userid")) {
            redirect("/")
        }
    })
    const redirect = useNavigate();
    const [user, setuser] = useState({
        email: "",
        password: ""

    })
    const onchange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const onhandlesubmit = async (e) => {

        e.preventDefault();
        const { email, password } = user
        if (!email.trim() || !password.trim()) {
            toast.error("no empty fields will be considered");
        }
        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            if (res.data.length == 0) {
                toast.error("enter email")
                return false
            }
            const ad = res.data[0]
            if (ad.password != password) {
                toast.error("enter password")
                return false
            }
            if (ad.status !== "unblock") {
                toast.error("Acoount has been block..pls contact support")
                return false
            }

            localStorage.setItem("userid", ad.id)
            localStorage.setItem("name", ad.name)
            toast.success("u logged in sucessfully")
            redirect("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div>

                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <h1 className='text-center py-4'>USER LOGIN</h1>
                    <form action="" onSubmit={onhandlesubmit}>

                        <MDBInput wrapperClass='mb-4' name="email" value={user.email} label='Email address' onChange={onchange} id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' name="password" value={user.password} onChange={onchange} type='password' />



                        <button className="btn btn-primary mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member?<NavLink to={"/register"}>Register</NavLink> </p>

                        </div>

                    </form>
                </MDBContainer>

            </div>
        </div>
    )
}

export default Userlogin
