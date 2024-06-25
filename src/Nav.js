import "./App.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="hover-effect">
        <li className="li">
          <img src={require("./Logo.png")} className="logo" alt="logo"></img>
        </li>
        <li className="li">
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="li">
          <NavLink to="/About"> About</NavLink>
        </li>

        <li className="li">
          <NavLink to="/Menu"> Menu</NavLink>
        </li>

        {/* <li className="li">
        <NavLink to='/BookingForm'> BookingForm</NavLink>

        </li> */}
        <li className="li">
          <NavLink to="/Order"> Order Online</NavLink>
        </li>

        <li className="li">
          <NavLink to="/ContactPage"> Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
