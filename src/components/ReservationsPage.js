import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
              <h2>Discover the Ideal Fusion of Heritage and Opulence.</h2>
                <p>At Little Lemon, we are dedicated to delivering a truly opulent dining experience, enriched by our commitment to cherished <em>heritage</em>.</p>
                <p>Reserve your table now to partake in this exceptional journey.</p>
            </div>
            <div className="form">
                <h1>Make a Reservation</h1>
                <p>Kindly complete and submit the form to secure your booking at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage