import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Alogin() {
    const redirect = useNavigate()
    const [admin, setadmin] = useState({
        email: "",
        password: ""

    })
    useEffect(()=>{
        if(localStorage.getItem("adminid")){
            redirect("/dashboard")

        }
    })

    const onchange = (e) => {
        setadmin({
            ...admin,
            [e.target.name]: e.target.value
        })
        console.log(admin)
    }
    const onhandlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = admin
        if (!email.trim() || !password.trim()) {
            console.log("empty feilds cant be considered ")
            toast.error("empty feilds cant be considered ")

            return false
        }
        try {
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            if (res.data.length == 0) {
                console.log("email not match")
                toast.error("email not match")
                return false

            }
            const ad = res.data[0]
            if (ad.password != password) {

                console.log("password not match")
                toast.error("password not match")
                return false

            }
            localStorage.setItem("adminid", ad.id)
            localStorage.setItem("name", ad.name)
            console.log("login sucess")
            toast.success("login sucess")
            redirect("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <h1 className='text-center py-4'>LOGIN</h1>
                <form action="" onSubmit={onhandlesubmit}>

                    <MDBInput wrapperClass='mb-4' value={admin.email} name="email" onChange={onchange} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' value={admin.password} name="password" onChange={onchange} label='Password' id='form2' type='password' />



                    <MDBBtn className="mb-4">Sign in</MDBBtn>

                </form>
            </MDBContainer>

        </div>
    )
}

export default Alogin
