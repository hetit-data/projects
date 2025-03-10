import React, { useEffect, useRef, useState } from 'react';
import AHeader from '../common/AHeader';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import AFooter from '../common/AFooter';

function Aservice() {
  const [carservice, setcarservice] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDesc, setSearchDesc] = useState('');

  const getservice = async () => {
    const res = await axios.get("http://localhost:3000/service");
    console.log(res.data);
    setcarservice(res.data);
  };

  const filteredCars = carservice.filter((car) => {
    return (

      (searchTitle === '' || car.title.toLowerCase().includes(searchTitle.toLowerCase())) &&
      (searchDesc === '' || car.desc.toLowerCase().includes(searchDesc.toLowerCase()))
    );
  });
  const [viewmodal, setviewmodal] = useState()
  const [viewservice, setviewservice] = useState({
    id: '',
    title: '',
    img: '',
    desc: ''
  })

  const [updatemodal, setupdatemodal] = useState()
  const [updatedata, setupdatedata] = useState({
    title: '',
    img: '',
    desc: ''
  })


  const onupdate = (update) => {

    setupdatemodal(true)
    setupdatedata(update)
    setviewmodal(false)
    setTimeout(() => {
      upref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  const onview = (service) => {
    setviewmodal(true)
    setviewservice(service)
    setupdatemodal(false)
    setTimeout(() => {
      viewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

  }


  const viewRef = useRef(null);
  const upref = useRef(null);
  const deleteservice = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/service/${id}`);
      getservice();
      if (viewservice.id === id || updatedata.id === id) {
        setviewmodal(false); // Close the view modal
        setupdatemodal(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const onupdateclick = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/service/${updatedata.id}`, updatedata)
      getservice();
      setupdatemodal(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getservice();
  }, []);

  return (
    <div>
      <AHeader />
      <div className="container">
        <h1 className='text-center py-4'>Services Management</h1>
        <div className="table-responsive">
          {/* <MDBTable align='middle'>
            <MDBTableHead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>IMAGE</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>DESC</th>
                <th scope='col' className='text-center'>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                carservice && carservice.map((car, index) => {
                  console.log(car);
                  const { id, img, title, desc } = car;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src={img}
                            alt='Car'
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>{title}</p>
                          </div>
                        </div>
                      </td>
                      <td>{desc}</td>
                      <td className='text-center'>
                        <MDBBtn onClick={() => onview(car)} color='primary' className='' rounded size='sm'>
                          View
                        </MDBBtn>
                        <MDBBtn onClick={() => { onupdate(car) }} color='success' className='mx-1' rounded size='sm'>
                          Edit
                        </MDBBtn>
                        <MDBBtn onClick={() => deleteservice(car.id)} color='danger' rounded size='sm'>
                          Delete
                        </MDBBtn>
                      </td>
                    </tr>
                  );
                })
              }
            </MDBTableBody>
          </MDBTable> */}
          <div className="table-responsive">
           
            <div className="d-flex gap-2 mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="Filter by Title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Filter by Description"
                value={searchDesc}
                onChange={(e) => setSearchDesc(e.target.value)}
              />
            </div>

            
            <MDBTable align="middle">
              <MDBTableHead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">IMAGE</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">DESC</th>
                  <th scope="col" className="text-center">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {filteredCars.length > 0 ? (
                  filteredCars.map((car, index) => {
                    const { id, img, title, desc } = car;
                    return (
                      <tr key={index}>
                        <td>{id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={img}
                              alt="Car"
                              style={{ width: '45px', height: '45px' }}
                              className="rounded-circle"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="ms-3">
                              <p className="fw-bold mb-1">{title}</p>
                            </div>
                          </div>
                        </td>
                        <td>{desc}</td>
                        <td className="text-center">
                          <button onClick={() => onview(car)} className="btn btn-primary btn-sm">
                            View
                          </button>
                          <button onClick={() => onupdate(car)} className="btn btn-success btn-sm mx-1">
                            Edit
                          </button>
                          <button onClick={() => deleteservice(car.id)} className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>


        {/* view modal */}
        {
          viewmodal && (
            <div className="container-fluid py-5">
              <div className="container pt-5 pb-3">
                <h1 className="display-4 text-uppercase text-center mb-5">
                  view contact Detail
                </h1>
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <div
                      className="contact-form bg-light mb-4"
                      style={{ padding: 30 }}
                    >
                      <form ref={viewRef}>
                        <div className="row">
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={viewservice.id}

                              placeholder="ID"
                            />
                          </div>
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={viewservice.title}

                              placeholder="service title"
                            />
                          </div>
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={viewservice.img}

                              placeholder="Image url"
                            />
                          </div>
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={viewservice.desc}

                              placeholder="description"
                            />
                          </div>



                        </div>
                        <div>

                          <button
                            onClick={() => setviewmodal(false)}
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

          )
        }

        {/* update */}

        {
          updatemodal && (

            <div className="container-fluid py-5">
              <div className="container pt-5 pb-3">
                <h1 className="display-4 text-uppercase text-center mb-5">
                  update service Detail
                </h1>
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <div
                      className="contact-form bg-light mb-4"
                      style={{ padding: 30 }}
                    >
                      <form ref={upref}>
                        <div className="row">

                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={updatedata.title}
                              onChange={(e) => {
                                setupdatedata({
                                  ...updatedata,
                                  title: e.target.value,
                                })
                              }}
                              placeholder="service title"
                            />
                          </div>
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={updatedata.img}
                              onChange={(e) => {
                                setupdatedata({
                                  ...updatedata,
                                  img: e.target.value,
                                })
                              }}
                              placeholder="Img url"
                            />
                          </div>
                          <div className="col-12 col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control p-4"
                              value={updatedata.desc}
                              onChange={(e) => {
                                setupdatedata({
                                  ...updatedata,
                                  desc: e.target.value,
                                })
                              }}
                              placeholder="Description"
                            />
                          </div>



                        </div>
                        <div>
                          <button
                            onClick={onupdateclick}
                            className="btn btn-primary py-3 px-5"
                            type="button"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => setupdatemodal(false)}
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
          )
        }
      </div>
      <AFooter />
    </div>
  );
}

export default Aservice;
