import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade interval={3000} > 
      {/* Auto change every 3 seconds (3000ms) */}
      
      <MDBCarouselItem itemId={1}>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          className="d-block w-100"
          alt="Shoe 1"
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <MDBCarouselCaption>
          <h5>First Slide</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img
          src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block w-100"
          alt="Shoe 2"
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <MDBCarouselCaption>
          <h5>Second Slide</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img
          src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block w-100"
          alt="Shoe 3"
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <MDBCarouselCaption>
          <h5>Third Slide</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
