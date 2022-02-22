import React from 'react'
import { NavLink } from 'react-router-dom';
import { Login , Signup , Cartbtn} from './Buttons';

const Header = () => {
  return (
   <>
   <header>
      <div className='container'>

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid p-2">
    <NavLink className="navbar-brand mx-auto fw-bold" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li>      
        
       
      </ul>
    </div>
    <div className='justify-content-end'>
      <div className='action-btn'>
      <Login />
      <Signup />
      </div>
     
    </div>
  </div>
</nav>

      </div>
      </header>

   </>
  )
}
export default Header;