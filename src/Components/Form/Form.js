import React from 'react';
import "./Form.css"
import {Link} from "react-router-dom"

const Form = () => {
    return(
        <>
        <div>
        <div className='container bground-color'>
          <h1 className='styleh1'>Add a new address</h1>
        <Link to=""> <h6> Or find Amazon pickup location near you &#62;</h6></Link> 
          <form>
          <label className='label-style' for="lname">Country/Region</label>
          <select name="Country" className="Proper-input1">
                                   <option value="1">India</option>
                                   <option value="2">USA</option>
                                   <option value="3">China</option>
                               </select>
              <label className='label-style' for="lname">Full name</label>
              <input className='input-tag_style' type="text"/>
              <label className='label-style' for="lname">Last name</label>
              <input className='input-tag_style' type="text"/>
              <label className='label-style' for="lname">Mobile number</label>
              <input className='input-tag_style' type="number" placeholder='10-digit mobile number without prefixes'/>
              <p>May be used to assit delivery</p>
              <label className='label-style' for="lname">PIN code</label>
              <input className='input-tag_style' type="number"/>
              <label className='label-style' for="lname">Flat,House no.,Building,Company,Apartment</label>
              <input className='input-tag_style' type="text"/>
              <label className='label-style' for="lname">Area,Colony,Street,Sector,Village</label>
              <input className='input-tag_style' type="text"/>
              <label className='label-style' for="lname">Landmark</label>
              <input className='input-tag_style' type="text" placeholder='E.g. Near AIIMS flyover,Behind Regal Cinema,etc.'/>
              <label className='label-style' for="lname">Town/City</label>
              <input className='input-tag_style' type="text"/>
              <label className='label-style' for="lname">State / Province /Region</label>
              <select className="Proper-input1">
              <option >ODISHA</option>
              <option >JAIPUR</option>
              </select>
              <h2 className='styleh2'>Add delivery instructions</h2>
              <p>Preferences are used to plan your delivery.However,shipments can sometimes can sometimes arrive early or later than planned.</p>
              <label className='label-style'>Address Type</label>
              <select className="Proper-input1">
                  <option></option>
              </select>
              <button className='btn-set btn-warning'>Add address</button>
              </form>
              </div>
              </div>
  
        </>
    )
}

export default Form;
