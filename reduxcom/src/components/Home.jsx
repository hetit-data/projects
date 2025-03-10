import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import Cardsdata from './Cardsdata';
import Navbar from './Navbar';
import Slider from './Slider';

import { addtocart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
function Home() {
  const [cartdata, setCartdata] = useState(Cardsdata);
  const dispatch = useDispatch();


  //add to cart

  const send =(e)=>{
  dispatch(addtocart(e))
  }
  return (
    

<>
<Navbar/>
<Slider/>
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {cartdata.map((item) => (
        <MDBCard key={item.id} style={{ width: '300px' }} className="shadow-sm">
          {/* Dish Image */}
          <MDBCardImage
            src={item.imgdata}
            alt={item.dish}
            position="top"
            style={{ height: '200px', objectFit: 'cover' }}
          />

          <MDBCardBody>
            {/* Dish Title */}
            <MDBCardTitle>{item.dish}</MDBCardTitle>
            
            {/* Dish Address */}
            <MDBCardText>{item.address}</MDBCardText>

            {/* Order info */}
            <MDBCardText>{item.somedata}</MDBCardText>

            {/* Dish Price */}
            <MDBCardText><strong>Price: ₹{item.price}</strong></MDBCardText>

            {/* Rating */}
            <MDBCardText>
              <img src={item.arrimg} alt="rating" style={{ width: '20px', marginRight: '5px' }} />
              {item.rating}
            </MDBCardText>

            {/* Delivery Image */}
            <div className="d-flex justify-content-between">
              <MDBCardImage
                src={item.delimg}
                alt="Delivery"
                style={{ height: '30px', objectFit: 'cover' }}
              />
              <MDBBtn onClick={()=>send(item)} color="primary">Add to Cart</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>

    </>
  );
}

export default Home;
