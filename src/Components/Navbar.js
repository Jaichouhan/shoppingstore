
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
 
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light navbarbg">
             
  <div className="container">
 
    <Link className="navbar-brand" to="/"><img className="imgset" src="/images/new1.gif" alt="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 listyle">
        <li className="nav-item">
          <Link to="/" className="nav-link hovcolor active setline" aria-current="page"><span>Home</span></Link>
     
        </li>
        <li className="nav-item">
          <Link to="/Properties" className="nav-link hovcolor5 " >Properties</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link hovcolor1" >About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Blogs" className="nav-link hovcolor2" >Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link hovcolor3" >Contact Us</Link>
        </li>
       
        
      </ul>
      <div className="nav-item">
          <Link to="/Login" className="nav-link hovcolor4 mobiler" ><i className="fa fa-user userde"></i>LOGIN</Link>
        </div>
    </div>
  </div>
 
</nav>
        </>
    )
}

export default Navbar;