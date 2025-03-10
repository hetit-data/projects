
// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import AHeader from '../common/AHeader';
// import axios from 'axios';

// function Carmanage() {
//     const [carlisting, setCarlisting] = useState([]);
//     const [filteredCars, setFilteredCars] = useState([]);
    // const [search, setSearch] = useState('');
    // const [editmodal, setModal] = useState(null);
    // const [editdetail, setDetail] = useState({
    //     id: '',
    //     title: '',
    //     carimg: '',
    //     MFG: '',
    //     type: '',
    //     Km: '',
    //     price: '',
    // });

    // // view 
    // const [viewmodal, viewModal] = useState(null);
    // const [viewdetail, viewDetail] = useState({
    //     id: '',
    //     title: '',
    //     carimg: '',
    //     MFG: '',
    //     type: '',
    //     Km: '',
    //     price: '',
    // });
//     // Fetch car listing from API
//     const getCars = async () => {
//         const res = await axios.get('http://localhost:3000/carlisting');
//         setCarlisting(res.data);
//         setFilteredCars(res.data);
//     };

//     // Delete function
    // const deleteData = async (id) => {
    //     await axios.delete(`http://localhost:3000/carlisting/${id}`);
    //     getCars();
    // };

    // useEffect(() => {
    //     getCars();
    // }, []);

    // // Filter cars by search input
    // const handleSearch = (e) => {
    //     const value = e.target.value.toLowerCase();
    //     setSearch(value);
    //     const filtered = carlisting.filter((car) =>
    //         car.title.toLowerCase().includes(value)
    //     );
    //     setFilteredCars(filtered);
    // };

    // // Update handler
    // const onUpdate = (car) => {
    //     setModal(true); // Open edit modal
    //     viewModal(false); // Close view modal if open
    //     setDetail(car);
    // };

    // const onview = (car) => {
    //     viewModal(true); // Open view modal
    //     setModal(false); // Close edit modal if open
    //     viewDetail(car);
    // };
    // const onChange = async () => {
    //     try {
    //         await axios.put(
    //             `http://localhost:3000/carlisting/${editdetail.id}`,
    //             editdetail
    //         );
    //         getCars();
    //         setModal(false);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    
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

//                 {/* Responsive Table */}
//                 <div className="table-responsive">
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Image</th>
//                                 <th>Name</th>
//                                 <th>MFG</th>
//                                 <th>Type</th>
//                                 <th>Km</th>
//                                 <th>Price</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredCars.length > 0 ? (
//                                 filteredCars.map((car) => (
//                                     <tr key={car.id}>
//                                         <td>{car.id}</td>
//                                         <td>
//                                             <img
//                                                 src={car.carimg}
//                                                 alt={car.title}
//                                                 style={{
//                                                     width: '45px',
//                                                     height: '45px',
//                                                     borderRadius: '50%',
//                                                 }}
//                                             />
//                                         </td>
//                                         <td>{car.title}</td>
//                                         <td>{car.MFG}</td>
//                                         <td>{car.type}</td>
//                                         <td>{car.Km}</td>
//                                         <td>{car.price}</td>
//                                         <td>
//                                             {/* <NavLink to={`/${car.id}`}>
//                                                 <button className="btn btn-primary btn-sm">
//                                                     View
//                                                 </button>
//                                             </NavLink> */}
//                                             <button
//                                                 onClick={() => onview(car)}
//                                                 className="btn btn-primary btn-sm mx-2"
//                                             >
//                                                 view
//                                             </button> 
//                                             <button
//                                                 onClick={() => onUpdate(car)}
//                                                 className="btn btn-success btn-sm mx-2"
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 className="btn btn-danger btn-sm"
//                                                 onClick={() => deleteData(car.id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="8" className="text-center">
//                                         No cars found.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>

                // {/* Update Modal */}
                // {editmodal && (
                //     <div className="container-fluid py-5">
                //         <div className="container pt-5 pb-3">
                //             <h1 className="display-4 text-uppercase text-center mb-5">
                //                 Update Car Detail
                //             </h1>
                //             <div className="row">
                //                 <div className="col-lg-12 mb-2">
                //                     <div
                //                         className="contact-form bg-light mb-4"
                //                         style={{ padding: 30 }}
                //                     >
                //                         <form>
                //                             <div className="row">
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={editdetail.title}
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 title: e.target.value,
                //                                             })
                //                                         }
                //                                         placeholder="Car Name"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={editdetail.carimg}
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 carimg: e.target.value,
                //                                             })
                //                                         }
                //                                         placeholder="Car Image URL"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={editdetail.MFG}
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 MFG: e.target.value,
                //                                             })
                //                                         }
                //                                         placeholder="Manufacturer (MFG)"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <select
                //                                         value={editdetail.type}
                //                                         className="custom-select px-4 mb-3"
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 type: e.target.value,
                //                                             })
                //                                         }
                //                                         style={{ height: 50 }}
                //                                     >
                //                                         <option hidden>Select Type</option>
                //                                         <option value="Auto">Auto</option>
                //                                         <option value="Manual">Manual</option>
                //                                     </select>
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={editdetail.Km}
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 Km: e.target.value,
                //                                             })
                //                                         }
                //                                         placeholder="Kilometers Driven"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="number"
                //                                         className="form-control p-4"
                //                                         value={editdetail.price}
                //                                         onChange={(e) =>
                //                                             setDetail({
                //                                                 ...editdetail,
                //                                                 price: e.target.value,
                //                                             })
                //                                         }
                //                                         placeholder="Car Price"
                //                                     />
                //                                 </div>
                //                             </div>
                //                             <div>
                //                                 <button
                //                                     onClick={onChange}
                //                                     className="btn btn-primary py-3 px-5"
                //                                     type="button"
                //                                 >
                //                                     Update
                //                                 </button>
                //                                 <button
                //                                     onClick={() => setModal(false)}
                //                                     className="btn btn-secondary py-3 px-5 mx-3"
                //                                     type="button"
                //                                 >
                //                                     Cancel
                //                                 </button>
                //                             </div>
                //                         </form>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // )}




                // {/* view modal */}
                // {viewmodal && (
                //     <div className="container-fluid py-5">
                //         <div className="container pt-5 pb-3">
                //             <h1 className="display-4 text-uppercase text-center mb-5">
                //                 view Car Detail
                //             </h1>
                //             <div className="row">
                //                 <div className="col-lg-12 mb-2">
                //                     <div
                //                         className="contact-form bg-light mb-4"
                //                         style={{ padding: 30 }}
                //                     >
                //                         <form>
                //                             <div className="row">
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={viewdetail.title}
                                                       
                //                                         placeholder="Car Name"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={viewdetail.carimg}
                                                     
                //                                         placeholder="Car Image URL"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={viewdetail.MFG}
                                                       
                //                                         placeholder="Manufacturer (MFG)"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <select
                //                                         value={viewdetail.type}
                //                                         className="custom-select px-4 mb-3"
                                                      
                //                                         style={{ height: 50 }}
                //                                     >
                //                                         <option hidden>Select Type</option>
                //                                         <option value="Auto">Auto</option>
                //                                         <option value="Manual">Manual</option>
                //                                     </select>
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="text"
                //                                         className="form-control p-4"
                //                                         value={viewdetail.Km}
                                                       
                //                                         placeholder="Kilometers Driven"
                //                                     />
                //                                 </div>
                //                                 <div className="col-12 col-md-6 form-group">
                //                                     <input
                //                                         type="number"
                //                                         className="form-control p-4"
                //                                         value={viewdetail.price}
                                                      
                //                                         placeholder="Car Price"
                //                                     />
                //                                 </div>
                //                             </div>
                //                             <div>
                                                
                //                                 <button
                //                                     onClick={() => viewModal(false)}
                //                                     className="btn btn-secondary py-3 px-5 mx-3"
                //                                     type="button"
                //                                 >
                //                                     Cancel
                //                                 </button>
                //                             </div>
                //                         </form>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // )}
//             </div>
//         </div>
//     );
// }

// export default Carmanage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import AHeader from "../common/AHeader";
import AFooter from "../common/AFooter";

function Carmanage() {
    const [carlisting, setCarlisting] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        manufacturer: "",
        type: "",
        minPrice: "",
        maxPrice: "",
    });

    const [editmodal, setEditModal] = useState(null);
    const [editdetail, setEditDetail] = useState({
        id: '',
        title: '',
        carimg: '',
        MFG: '',
        type: '',
        Km: '',
        price: '',
    });

    const [viewmodal, setViewModal] = useState(null);
    const [viewdetail, setViewDetail] = useState({
        id: '',
        title: '',
        carimg: '',
        MFG: '',
        type: '',
        Km: '',
        price: '',
    });


    const getCars = async () => {
        try {
            const res = await axios.get("http://localhost:3000/carlisting");
            setCarlisting(res.data);
            setFilteredCars(res.data);
        } catch (error) {
            console.error("Error fetching car data:", error);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    
    const deleteData = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/carlisting/${id}`);
            getCars();
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    };

    
    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

  
    useEffect(() => {
        const { search, manufacturer, type, minPrice, maxPrice } = filters;

        const filtered = carlisting.filter((car) => {
            return (
                car.title.toLowerCase().includes(search.toLowerCase()) &&
                (manufacturer ? car.MFG === manufacturer : true) &&
                (type ? car.type === type : true) &&
                (minPrice ? car.price >= parseInt(minPrice) : true) &&
                (maxPrice ? car.price <= parseInt(maxPrice) : true)
            );
        });

        setFilteredCars(filtered);
    }, [filters, carlisting]);

    
    const onUpdate = (car) => {
        setEditModal(true);
        setViewModal(false);
        setEditDetail(car);
    };


    const onView = (car) => {
        setViewModal(true);
        setEditModal(false);
        setViewDetail(car);
    };

   
    const onChange = async () => {
        try {
            await axios.put(
                `http://localhost:3000/carlisting/${editdetail.id}`,
                editdetail
            );
            getCars();
            setEditModal(false);
        } catch (error) {
            console.error("Error updating car:", error);
        }
    };

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className="text-center py-4">Car Listing Management</h1>

                <div className="row mb-4">
                    <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            className="form-control"
                            value={filters.search}
                            onChange={(e) => updateFilter("search", e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={filters.manufacturer}
                            onChange={(e) => updateFilter("manufacturer", e.target.value)}
                        >
                            <option value="">All Manufacturers</option>
                            {[...new Set(carlisting.map((car) => car.MFG))].map((mfg) => (
                                <option key={mfg} value={mfg}>{mfg}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={filters.type}
                            onChange={(e) => updateFilter("type", e.target.value)}
                        >
                            <option value="">All Types</option>
                            <option value="Auto">Auto</option>
                            <option value="Manual">Manual</option>
                        </select>
                    </div>
                    <div className="col-md-3 d-flex">
                        <input
                            type="number"
                            placeholder="Min Price"
                            className="form-control mr-2"
                            value={filters.minPrice}
                            onChange={(e) => updateFilter("minPrice", e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="form-control"
                            value={filters.maxPrice}
                            onChange={(e) => updateFilter("maxPrice", e.target.value)}
                        />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>MFG</th>
                                <th>Type</th>
                                <th>Km</th>
                                <th>Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCars.length > 0 ? (
                                filteredCars.map((car) => (
                                    <tr key={car.id}>
                                        <td>{car.id}</td>
                                        <td>
                                            <img src={car.carimg} alt={car.title} style={{ width: "45px", height: "45px", borderRadius: "50%" }} />
                                        </td>
                                        <td>{car.title}</td>
                                        <td>{car.MFG}</td>
                                        <td>{car.type}</td>
                                        <td>{car.Km}</td>
                                        <td>{car.price}</td>
                                        <td className="text-center">
                                            <button onClick={() => onView(car)} className="btn btn-primary btn-sm mx-2">View</button> 
                                            <button onClick={() => onUpdate(car)} className="btn btn-success btn-sm mx-2">Edit</button>
                                            <button onClick={() => deleteData(car.id)} className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No cars found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Update Modal */}
                {editmodal && (
                    <div className="container-fluid py-5">
                        <div className="container pt-5 pb-3">
                            <h1 className="display-4 text-uppercase text-center mb-5">
                                Update Car Detail
                            </h1>
                            <div className="row">
                                <div className="col-lg-12 mb-2">
                                    <div
                                        className="contact-form bg-light mb-4"
                                        style={{ padding: 30 }}
                                    >
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={editdetail.title}
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                title: e.target.value,
                                                            })
                                                        }
                                                        placeholder="Car Name"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={editdetail.carimg}
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                carimg: e.target.value,
                                                            })
                                                        }
                                                        placeholder="Car Image URL"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={editdetail.MFG}
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                MFG: e.target.value,
                                                            })
                                                        }
                                                        placeholder="Manufacturer (MFG)"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <select
                                                        value={editdetail.type}
                                                        className="custom-select px-4 mb-3"
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                type: e.target.value,
                                                            })
                                                        }
                                                        style={{ height: 50 }}
                                                    >
                                                        <option hidden>Select Type</option>
                                                        <option value="Auto">Auto</option>
                                                        <option value="Manual">Manual</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={editdetail.Km}
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                Km: e.target.value,
                                                            })
                                                        }
                                                        placeholder="Kilometers Driven"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="number"
                                                        className="form-control p-4"
                                                        value={editdetail.price}
                                                        onChange={(e) =>
                                                            setEditDetail({
                                                                ...editdetail,
                                                                price: e.target.value,
                                                            })
                                                        }
                                                        placeholder="Car Price"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={onChange}
                                                    className="btn btn-primary py-3 px-5"
                                                    type="button"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => setEditModal(false)}
                                                    className="btn btn-secondary py-3 px-5 mx-3"
                                                    type="button"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}




                {/* view modal */}
                {viewmodal && (
                    <div className="container-fluid py-5">
                        <div className="container pt-5 pb-3">
                            <h1 className="display-4 text-uppercase text-center mb-5">
                                view Car Detail
                            </h1>
                            <div className="row">
                                <div className="col-lg-12 mb-2">
                                    <div
                                        className="contact-form bg-light mb-4"
                                        style={{ padding: 30 }}
                                    >
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={viewdetail.title}
                                                       
                                                        placeholder="Car Name"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={viewdetail.carimg}
                                                     
                                                        placeholder="Car Image URL"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={viewdetail.MFG}
                                                       
                                                        placeholder="Manufacturer (MFG)"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <select
                                                        value={viewdetail.type}
                                                        className="custom-select px-4 mb-3"
                                                      
                                                        style={{ height: 50 }}
                                                    >
                                                        <option hidden>Select Type</option>
                                                        <option value="Auto">Auto</option>
                                                        <option value="Manual">Manual</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control p-4"
                                                        value={viewdetail.Km}
                                                       
                                                        placeholder="Kilometers Driven"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input
                                                        type="number"
                                                        className="form-control p-4"
                                                        value={viewdetail.price}
                                                      
                                                        placeholder="Car Price"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                
                                                <button
                                                    onClick={() => setViewModal(false)}
                                                    className="btn btn-secondary py-3 px-5 mx-3"
                                                    type="button"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <AFooter/>
        </div>
    );
}

export default Carmanage;
