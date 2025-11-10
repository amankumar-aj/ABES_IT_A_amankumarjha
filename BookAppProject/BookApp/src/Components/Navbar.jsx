import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){
  return (
    <div id="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  )
}

export default Navbar;
