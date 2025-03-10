// import React, { useEffect, useState } from 'react'
// import AHeader from '../common/AHeader'
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import axios from 'axios';


// function Carmanage() {
//     const [carlisting, setcarlisting] = useState([])

//     const getcar = async () => {
//         const res = await axios.get("http://localhost:3000/carlisting")
//         console.log(res.data)
//         setcarlisting(res.data)
//     }
//     useEffect(()=>{
//         getcar()
//     },[])

//     return (

//         <div>
//             <AHeader />
//             <div className="container">
//                 <h1 className='text-center py-4'>Hello Car Listing management</h1>
//                 <MDBTable align='middle'>
//                     <MDBTableHead>
// <tr>
//     <th scope='col'>ID</th>
//     <th scope='col'>Image</th>
//     <th scope='col'>Name</th>
//     <th scope='col'>MFG</th>
//     <th scope='col'>type</th>
//     <th scope='col'>Km</th>
//     <th scope='col'>Price</th>
//     <th scope='col' className='text-center'>Actions</th>
// </tr>
//                     </MDBTableHead>
//                     <MDBTableBody>
//                         {
//                             carlisting && carlisting.map((car, index) => {
//                                 console.log(car)
//                                 const {id,title,carimg,MFG,type,Km,price} = car
//                                 return (
//                                     <tr>
//                                         <td>{id}</td>
//                                         <td>
//                                             <div className='d-flex align-items-center'>
//                                                 <img
//                                                     src={carimg}
//                                                     alt=''
//                                                     style={{ width: '45px', height: '45px' }}
//                                                     className='rounded-circle'
//                                                 />

//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div className='d-flex align-items-center'>

//                                                 <div className='ms-3'>
//                                                     <p className='fw-bold mb-1'>{title}</p>

//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <p className='fw-normal mb-1'>{MFG}</p>
//                                         </td>
//                                         <td>
//                                             {/* <MDBBadge color='success' pill>
//                                                 Active
//                                             </MDBBadge> */}
//                                              <p className='fw-normal mb-1'>{type}</p>
//                                         </td>
//                                         <td>{Km}</td>
//                                         <td>{price}</td>
//                                         <td className='text-center'>
// <MDBBtn color='primary' className='' rounded size='sm'>
//     View
// </MDBBtn>
// <MDBBtn color='success' className='mx-1' rounded size='sm'>
//     Edit
// </MDBBtn>
// <MDBBtn color='danger' rounded size='sm'>
//     Delete
// </MDBBtn>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }


//                     </MDBTableBody>
//                 </MDBTable>
//             </div>

//         </div>
//     )
// }

// export default Carmanage
// import React, { useEffect, useState } from 'react';
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
// } from 'mdb-react-ui-kit';

// import AHeader from '../common/AHeader';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';

// function Carmanage() {
//     const [carlisting, setCarlisting] = useState([]);
//     const [filteredCars, setFilteredCars] = useState([]);
//     const [search, setSearch] = useState('');



//     const [scrollableModal, setScrollableModal] = useState(false);

//     // Fetch car listing from API
//     const getCars = async () => {
//         const res = await axios.get("http://localhost:3000/carlisting");
//         setCarlisting(res.data);
//         setFilteredCars(res.data);
//     };
//     // delete function
//     const deletedata = async (id) => {
//         const res = await axios.delete(`http://localhost:3000/carlisting/${id}`)
//         console.log(res.data)
//         getCars()
//     }
//     useEffect(() => {
//         getCars();
//     }, []);

//     // Filter cars by search input
//     const handleSearch = (e) => {
//         const value = e.target.value.toLowerCase();
//         setSearch(value);
//         const filtered = carlisting.filter((car) =>
//             car.title.toLowerCase().includes(value)
//         );
//         setFilteredCars(filtered);
//     };


//     // model open close

//     const [editmodal, setmodal] = useState(null);
//     const [editdetail, setdetail] = useState({

//         id: '',
//         title: '',
//         carimg: '',
//         MFG: '',
//         type: '',
//         Km: '',
//         price: ''
//     })

//     const onupdate = (edit) => {
//         setmodal(edit)
//         setdetail(edit)
       
//     }
//     const onchange=async ()=>{
//         try{
//          const res= await axios.put(`http://localhost:3000/carlisting/${editdetail.id}`,editdetail)
//          console.log(res.data)
//          getCars();
//          setmodal(null)
//         }
//         catch(error)
//         {
//             console.log(error)
//         }
//     }
//     return (
//         <div>
//             <AHeader />
//             <div className="container">
//                 <h1 className="text-center py-4">Car Listing Management</h1>

//                 {/* Search Bar */}
//                 <input
//                     type="text"
//                     placeholder="Search by car name..."
//                     value={search}
//                     onChange={handleSearch}
//                     className="form-control mb-4"
//                 />

//                 {/* Car Listing Table */}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Image</th>
//                             <th>Name</th>
//                             <th>MFG</th>
//                             <th>Type</th>
//                             <th>Km</th>
//                             <th>Price</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredCars.length > 0 ? (
//                             filteredCars.map((car) => (
//                                 <tr key={car.id}>
//                                     <td>{car.id}</td>
//                                     <td>
//                                         <img
//                                             src={car.carimg}
//                                             alt={car.title}
//                                             style={{ width: '45px', height: '45px', borderRadius: '50%' }}
//                                         />
//                                     </td>
//                                     <td>{car.title}</td>
//                                     <td>{car.MFG}</td>
//                                     <td>{car.type}</td>
//                                     <td>{car.Km}</td>
//                                     <td>{car.price}</td>
//                                     <td>
//                                         <NavLink to={`/${car.id}`}><button className="btn btn-primary btn-sm" >View</button></NavLink>
//                                         <button  onClick={() => onupdate(car)}  className="btn btn-success btn-sm mx-2">Edit</button>
//                                         <button className="btn btn-danger btn-sm" onClick={() => deletedata(car.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="8" className="text-center">
//                                     No cars found.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>

//             {/* modal for update */}


//             {
//                 editmodal && (
//                     <div className="container-fluid py-5">
//                         <div className="container pt-5 pb-3">
//                             <h1 className="display-4 text-uppercase text-center mb-5">UPDATE CAR DETAIL</h1>
//                             <div className="row">
//                                 <div className="col-lg-12 mb-2">
//                                     <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
//                                         <form >
//                                             <div className="row">
//                                                 <div className="col-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={editdetail.title}
//                                                         name="title"
//                                                         onChange={(e)=>setdetail({...editdetail,title:e.target.value})}
//                                                         placeholder="Car Name"
//                                                     />

//                                                 </div>
//                                                 <div className="col-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={editdetail.carimg}
//                                                         name="carimg"
//                                                         onChange={(e)=>setdetail({...editdetail,carimg:e.target.value})}
//                                                         placeholder="Car Image URL"
//                                                     />

//                                                 </div>
//                                                 <div className="col-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={editdetail.MFG}
//                                                         name="MFG"
//                                                         onChange={(e)=>setdetail({...editdetail,MFG:e.target.value})}

//                                                         placeholder="Manufacturer (MFG)"
//                                                     />

//                                                 </div>
//                                                 <div className="col-6 form-group">
//                                                     <select

//                                                         name="type"
//                                                         value={editdetail.type}
//                                                         className="custom-select px-4 mb-3"
//                                                         onChange={(e)=>setdetail({...editdetail,type:e.target.value})}
//                                                         style={{ height: 50 }}
//                                                     >
//                                                         <option hidden>Select Type</option>
//                                                         <option value="Auto">Auto</option>
//                                                         <option value="Manual">Manual</option>
//                                                     </select>

//                                                 </div>
//                                                 <div className="col-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={editdetail.Km}
//                                                         onChange={(e)=>setdetail({...editdetail,Km:e.target.value})}
//                                                         name="Km"

//                                                         placeholder="Kilometers Driven"
//                                                     />

//                                                 </div>
//                                                 <div className="col-6 form-group">
//                                                     <input
//                                                         type="number"
//                                                         className="form-control p-4"
//                                                         value={editdetail.price}
//                                                         onChange={(e)=>setdetail({...editdetail,price:e.target.value})}
//                                                         name="price"

//                                                         placeholder="Car Price"
//                                                     />

//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <button onClick={onchange} className="btn btn-primary py-3 px-5" type="submit">
//                                                     Edit
//                                                 </button>
//                                                 <button onClick={()=>setmodal(null)} className="btn btn-primary py-3 px-5 mx-5" type="submit">
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//             </div>




//             {/* 
//             <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>LAUNCH DEMO MODAL</MDBBtn> */}

//         </div>

//     );
// }

// export default Carmanage;

