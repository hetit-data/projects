// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse,
//   MDBIcon,
//   MDBBadge,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// import { logout } from "../redux/features/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [openNav, setOpenNav] = useState(false);

//   // Get cart data safely from Redux state
//   const cartdata = useSelector((state) => state.allcart);
//   const carts = cartdata?.carts || []; // Ensure carts is always an array

//   console.log("Cart Data:", cartdata);
//   console.log("Carts:", carts);
//   const { isAuthenticated, user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <NavLink to={"/"}> <MDBNavbarBrand href='#'>reduxcom</MDBNavbarBrand></NavLink>
       
//         <MDBNavbarToggler
//           type='button'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenNav(!openNav)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar open={openNav}>
//           <MDBNavbarNav>
//             <MDBNavbarItem>
//             {isAuthenticated ? (
//             <>
//               <MDBNavbarItem>
//                 <MDBNavbarLink>{user.email}</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBBtn color="danger" onClick={handleLogout}>Logout</MDBBtn>
//               </MDBNavbarItem>
//             </>
//           ) : (
//             <>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/login">Login</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/signup">Signup</MDBNavbarLink>
//               </MDBNavbarItem>
//             </>
//           )}
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Wish List</MDBNavbarLink>
//             </MDBNavbarItem>

//             {/* Cart Icon with Badge */}
//             <NavLink to={"/cart"}>
//               <div className="position-relative">
//                 <MDBIcon fas icon="shopping-cart" size="2x" />
//                 {carts.length > 0 && (
//                   <MDBBadge color="danger" pill className="position-absolute top-0 start-100 translate-middle">
//                     {carts.length}
//                   </MDBBadge>
//                 )}
//               </div>
//             </NavLink>

//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  // Safely extract cart data
  const cartdata = useSelector((state) => state.allcart);
  const carts = cartdata?.carts || []; // Ensure carts is always an array

  console.log("Cart Data:", cartdata);
  console.log("Carts:", carts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <NavLink to={"/"}>
          <MDBNavbarBrand href="#">reduxcom</MDBNavbarBrand>
        </NavLink>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Wish List</MDBNavbarLink>
            </MDBNavbarItem>

            {/* Cart Icon with Badge */}
            <NavLink to={"/cart"}>
              <div className="position-relative">
                <MDBIcon fas icon="shopping-cart" size="2x" />
                {carts.length > 0 && (
                  <MDBBadge
                    color="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {carts.length}
                  </MDBBadge>
                )}
              </div>
            </NavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
