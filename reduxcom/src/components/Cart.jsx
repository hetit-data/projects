import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import Cardsdata from "./Cardsdata"; // Assuming this data is imported
import Navbar from "./Navbar";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { addtocart,removesingleitem,removetocart,emptycart } from "../redux/features/cartSlice";

const Cart = () => {


const {carts}=useSelector((state)=>state.allcart)
const [totalprice,settotalprice]=useState(0)
const [totalquan,settotalquan]=useState(0)

const dispatch=useDispatch()
const handleincrement=(e)=>{
    dispatch(addtocart(e))
}
const handledelete=(e)=>{
    dispatch(removetocart(e))
}

const handledecrement=(e)=>{
    dispatch(removesingleitem(e))
}
//remove cart


const empty=()=>{
    dispatch(emptycart())
}

const total=()=>{
    let totalprice=0
    carts.map((ele,index)=>{
        totalprice=ele.price*ele.qnty+totalprice
    })
    settotalprice(totalprice)
}


const quan=()=>{
    let totalquan=0
    carts.map((ele,index)=>{
        totalquan+=ele.qnty
    })
    settotalquan(totalquan)
}
useEffect(()=>{
    total()
},[total])

useEffect(()=>{
    quan()
},[quan])
  return (
    <>
   <Navbar/>

    
    <MDBContainer>
        
      {carts.length === 0 ? (
        <div className="text-center mt-5">
          <h3>Cart is Empty</h3>
          <MDBBtn color="primary" href="/">Go to Home</MDBBtn>
        </div>
      ) : (
        <MDBRow>
          {carts.map((item) => (
            <MDBCol key={item.id} md="4" className="mb-4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardImage src={item.imgdata} alt={item.dish} fluid className="mb-3" />
                  <MDBCardTitle>{item.dish}</MDBCardTitle>
                  <MDBCardText>Address: {item.address}</MDBCardText>
                  <MDBCardText>Price: ₹{item.price}</MDBCardText>
                  <MDBCardText>Rating: {item.rating}</MDBCardText>
                  <MDBCardText>
                    Quantity: 
                    <MDBBtn size="sm" onClick={item.qnty<=1?()=>handledelete(item.id):()=>handledecrement(item)}color="danger" className="mx-2" >
                      -
                    </MDBBtn>

                  
                    <strong>{item.qnty}</strong>
                    <MDBBtn  onClick={()=>handleincrement(item)}size="sm" color="success" className="mx-2" >
                      +
                    </MDBBtn>
                  </MDBCardText><MDBCardText>Total: ₹{item.price * item.qnty}</MDBCardText>
                  <MDBBtn onClick={()=>handledelete(item.id)}color="danger" >
                    Delete
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
      
      {carts.length > 0 && (
        <div className="text-end mt-4">
          <h4>Total Price: {totalprice  }</h4>
          <h4>Total quan: {totalquan  }</h4>
          <MDBBtn color="danger" onClick={empty} >
            Empty Cart
          </MDBBtn>
        </div>
      )}
    </MDBContainer>
    </>
  );
};

export default Cart;
