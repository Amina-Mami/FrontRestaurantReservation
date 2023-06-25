import './App.css';
import React from 'react';
import Nav from './Nav';
import App from './App';
import BookingForm from './components/BookingForm.js';

import { BrowserRouter as Router, Route,Link,Routes} from "react-router-dom";
import Home1 from './Home1';
import Home3 from './Home3';
import Home2 from './Home2';
import Home4 from './Home4';
import Main from './Main';
import BookingPage from './components/BookingPage';
function Header() {
return (
    <>
    <Router>
        <div>
    <Nav/>
    
    <div>




<Routes>
  <Route path="/" element={<Home1/>}/>
  <Route path="/About" element={<Home2/>}/>
  <Route path="/Menu" element={<Home3/>}/>
  <Route path="/BookingForm" element={<BookingForm/>}/>
  <Route path="/Order" element={<BookingPage/>}/>
  <Route path="/login" element={<Home4/>}/>
</Routes>
</div>
</div>
</Router>
</>
)

}

export default Header;



