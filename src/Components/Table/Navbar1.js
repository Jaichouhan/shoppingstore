import React from "react";
import "./Navbar1.scss";
const Navbar1 = () => {
  return (
    <>
      <div className="container-fluid bg-Navbar1">
        <div className="Navbar-Set-bg">
          <img src="/images/mainlogo.png" alt="img" />
          <div className="Search_box">
            <input type="text" placeholder="search" />
            <i className="fas fa-search srch-wrpd"></i>
          </div>
          <div className="Space_create">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button type="button" className="btn btn-danger">
              Login<i className="fa fa-sign-in"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
