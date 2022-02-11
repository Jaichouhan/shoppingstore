import React from 'react';
const PaymentPage = () => {
  return <>
         <div className='Dash-bg'>
        <div className='container'>
             <div className='Payment-bg'>
            <h1>1.Payment Details</h1>
            <div className='d-flex Payment-bg1'>
            <p>Interac</p>
            <span>Wire Transfer</span>
            </div>
            <p className='Payment-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Investment Amount</span>
                <p>$520</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Mode to be funded through</span>
                <p>e-Transfer</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Recipent</span>
                <p>Land Depot Capital</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Email</span>
                <p>Land Depot Capital.com</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Transfer reference number</span>
                <p>6f841r</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Security Question</span>
                <p>Mobile Number</p>
            </div>
            <div className='d-flex justify-content-between Payment-span-p'>
                <span>Security Response</span>
                <p>987-654-3210</p>
            </div>
            <button type="button" class="btn btn-outline-primary Payment-btn1">Back</button>
            <button type="button" class="btn btn-primary Payment-btn">Confirm Transaction</button>
            </div>
        </div>
   </div>

  </>;
};
export default PaymentPage;