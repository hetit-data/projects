import React from 'react'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <header>

      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Error 404 </h1>
        <h4 className='mb-3'>Not Found Pages</h4>
        <NavLink className='btn btn-primary' to="/" role='button'>
          back to Home
        </NavLink>
      </div>
    </header>
    </div>
  )
}

export default NotFound
