import React from "react";
import { ReactDOM } from "react-dom";
import Header from "../header";
import Footer from "../footer";



const ConfirmedBooking = () => {
 return(

        <div className="confirm">
            <div className="confirmheader">
        
            <h1>"The booking has been confirmed"</h1><br/>
            <link className="redirection-button" to="/BookingPage">Order Online</link>
        </div>
        
       
        </div>
        
    )
}


export default ConfirmedBooking;
