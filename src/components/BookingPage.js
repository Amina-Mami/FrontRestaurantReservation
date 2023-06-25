import React, {Component} from 'react';
import BookingForm from "./BookingForm";



function BookingPage(){
    
        return (
            <div className="mt-5 d-flex" >
                <div className='book'>
                <h1>Booking </h1>
                <p>Little Lemon offers its guests different options of reservation. It's
          possible to choose the number of guests, the type of the occasion and
          the location. We will spare no effort in making your visit as
          comfortable and enjoyable as possible.</p>
            </div>
          
            
<BookingForm/>
           
           
            </div>
        );
    }
export default BookingPage;