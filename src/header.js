import './App.css';
import React from 'react';
import Nav from './Nav';
import App from './App';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function Header() {
return (
    <Router>
    <Nav/>
<Routes>
        <Route path='/App' exact component={App} />
        
        <Route path='./components/BookingForm' exact component={<BookingForm></BookingForm>} />
       
</Routes>
</Router>
)

}

export default Header

