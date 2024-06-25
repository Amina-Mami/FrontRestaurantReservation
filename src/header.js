import "./App.css";
import Nav from "./Nav";
import BookingForm from "./components/BookingForm.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import Home3 from "./Home3";
import Home2 from "./Home2";
import BookingPage from "./components/BookingPage";
import ContactPage from "./components/ContactPage.js";
function Header() {
  return (
    <>
      <Router>
        <div>
          <Nav />

          <div>
            <Routes>
              <Route path="/" element={<Home1 />} />
              <Route path="/About" element={<Home2 />} />
              <Route path="/Menu" element={<Home3 />} />
              <Route path="/BookingForm" element={<BookingForm />} />
              <Route path="/Order" element={<BookingPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Header;
