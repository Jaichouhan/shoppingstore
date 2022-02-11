import React from 'react';
import { Link } from 'react-router-dom';

const Document = () => {
  return <>
       <div className='container-fluid Document-bg'>
           <div className='container Doucment-bg'>
   
               <p>Land Dipot Capital Sent You A Document To  Review And Sign</p>
               <button>VIEW DOCUMENTS</button>
           </div>
       </div>
       <div className='container Doucment-bg1'>
           <h2>Land Dipot Capital</h2>
           <Link to="/" className='Link-tag-color'>lorem@landdipotcapital.com</Link>
           <h6>Hello Johan Arya</h6>
           <p>Please review and sign the subscription agrement and KYC for you 
investment for 301 road stree,otatwa, ontario,K33P,2y5.</p>
       </div>

  </>;
};

export default Document;