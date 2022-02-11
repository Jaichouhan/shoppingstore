import React from 'react';
import { Link } from 'react-router-dom';


const PaymentInformation = () => {
  return <>
  <div className='Informating-bg'>
      <div className='container'>
          <div className='row'>

              <div className="col-md-4 PaymentIng-bg">
                 <img src="/images/group10.png" alt="img" className="imgfluid " />
                 <h3>Ottawa</h3>
                 <div>390 Bank Street, Ottawa, Ontario, KP 1Y5</div>
                 <p className="">Condominium</p>
                 <Link to="/DashboardCard" className="btn btn-primary PaymentLink">Back to Property</Link>
   
              </div>
            
              <div className='col-md-7 PaymentIng-bg1'>
                  <h2>1.Payment Details</h2>
                  <p>Investment Amount</p>
                  <div className=''>
                      <div className='row'>
                          <div className='col-md-9 setPayment-bgcolor'>
                                $100
                          </div>
                          <div className='col-md-3 setPayment-bgcolor1'>
                              <p>Purchase Price</p>
                              <span>$121,098</span>
                          </div>
                          <div className='col-md-3 setPayment-bgcolor1'>
                          <p>Share Price</p>
                              <span>$50</span>
                          </div>
                          <div className='col-md-3 setPayment-bgcolor1'>
                          <p>Share Allotted</p>
                              <span>$20</span>
                          </div>
                          <div className='col-md-7 setPayment-bgcolor2'>
                                <input type="text" placeholder='Enter Your Promo Code' />
                          </div>
                           <div className='col-md-4'>
                               <button className='btn btn-danger PayInfor-btn'>APPLY</button>
                           </div>
                      </div>
                      <p className='Payment-info-p'>Great The minimum Invesment amount has been reduced to $100 for you first invesment</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
                      <button type='text' className='btn btn-primary Payment-info-btn'>Next</button>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </>;
};
export default PaymentInformation;