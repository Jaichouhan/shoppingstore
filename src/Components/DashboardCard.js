import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Dashboardinfor from "./Dashboardinfor";


const DashboardCard = () => {
  const [active,setActive] = useState("")
  return <>
      <div className='Dash-bg'>
      <div className="container">
          <div className='Dashborad-display'>
              <div className=''>
              <div className='row'>
      <div className='col-md-12 Dash-display'>
                <ul className='Dash-ul'>
   
              <li className={active === 0 ? 'Dash_liActive' :"Dash_li"}  onClick={() => setActive(0)}>My Invesstments</li>
              <li className={active === 1 ? 'Dash_liActive' :"Dash_li"}  onClick={() => setActive(1)}><i className="fas fa-file Dash_space"></i>My Documents</li>
              <li className={active === 2 ? 'Dash_liActive' :"Dash_li"}  onClick={() => setActive(2)}><i className="fa fa-user Dash_space" aria-hidden="true"></i>My Profile</li>
             <li className={active === 3 ? 'Dash_liActive' :"Dash_li"}  onClick={() => setActive(3)}><i className="fas fa-power-off Dash_space"></i>Logout</li>
             <button className='btn btn-primary Dash-btn' onClick={() => setActive(4)}>Top Properties<i className="fas fa-arrow-right icon-pad"></i> </button>
                </ul>
          </div>
          </div>
          </div>
          {active === "" &&  <div className='Property-Set'>
               <div className='PRopertyD-bg'>
                    <ul className='d-flex justify-content-around ul-respo'>
                      <li>Property Document</li>
                      <li>Quarterly Statements</li>
                      <li>Annual Tax Statements</li>
                     <Link to="/Document"><li>Personal Documents</li></Link> 
                      
                    </ul>
               </div>
        
               <div className='Property-Detail-bg'>
                     <ul className='d-flex justify-content-around Property-Hr'>
                       <li>Year</li>
                       <li>Property Name</li>
                       <li>Document Name</li>
                       <li>Document Status</li>
                       <li>Action</li>
                     </ul>
                     <ul className='PRoperty-flex justify-content-around'> 
                       <li>2021</li>
                       <li> <span>Ottawa</span>
                         <p>390 Bank Street</p>
                       </li>
                       <li>Base Om</li>
                       <li>Executed</li>
                       <li><button className='btn btn-primary'>Download</button></li>
                     </ul>
                     <ul className='PRoperty-flex justify-content-around'> 
                       <li>2021</li>
                       <li> <span>Ottawa</span>
                         <p>390 Bank Street</p>
                       </li>
                       <li>Base Om</li>
                       <li>Executed</li>
                       <li><button className='btn btn-primary'>Download</button></li>
                     </ul>
                     <ul className='PRoperty-flex justify-content-around'> 
                       <li>2021</li>
                       <li> <span>Ottawa</span>
                         <p>390 Bank Street</p>
                       </li>
                       <li>Base Om</li>
                       <li>Executed</li>
                       <li><button className='btn btn-primary'>Download</button></li>
                     </ul>
               </div>
               </div>}




          {active === 0 && <div className='DashBor-Pad'>
          <div className=''>
              <div className='row'>
                  <div className='col-md-5'>
                      <div className='Dashboard'> 
                          <img src='/images/walle.png' />  
                          <div className='DashBoard-h3'>
                          <h5>$256.00</h5>
                          <p>Total Invesstment</p>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-5'>
                      <div className='Dashboard'>
                          <img src='/images/money.png' />  
                          <div className='DashBoard-h3'>
                          <h5>06</h5>
                          <p>Number Of Properties</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className='Dashboard-bgcolor'>
              <div className='row'>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Property Name</p>
                      <h3 className='Dash-h3-board'>Ottawa</h3>
                      <p className='Dash_p'>390 Bank Colony Jaipur</p>
                      <Link to="" className='Dash_Link'>View Deatils</Link>
                      <h2 className='Dash_h2'>TOTAL</h2>
                  </div>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Year Boughts</p>
                      <span className='Dash_span'>2021</span>
                  </div>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Investment Amount</p>
                      <span className='Dash_span'>$100.00</span>
                      <span className='Dash_span colorDash'>$100.00</span>
                  </div>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Estimated Current Value</p>
                      <span className='Dash_span'> $100.00</span>
                      <span className='Dash_span colorDash'> $100.00</span>

                  </div>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Change%</p>
                      <span className='Dash_span'>00.00%</span>
                  </div>
                  <div className='col-md-2'>
                      <p className='Dash_p_color'>Actions</p>
                      <div className='Dash_responsive'>
                      <button className='btn btn-primary Dash_btn_space'>Buy</button>
                      <button className='btn btn-primary'>Sell</button>
                      </div>
                  </div>
                
              </div>
          </div>
          </div>}

        {active === 1 &&  <div className=''>
               <div className='row'>
                     <div className='col-md-12 Dash-board-Five-bg1'>
                         <Dashboardinfor />
                         <div className='Dash-board-Five-bg'>
                         <div className=''>
                             <div className='row'>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='First Name'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Middle Name'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Last Name'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="date" placeholder='DOB'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Social insurance number(SIN)'/>
                                 </div>
                                 <div className='col-md-4'>
                                     <select className='Dash-Five-Input'>
                                     <option value="Gender">Gender</option>
                                         <option value="Male">Male</option>
                                         <option value="Female">Female</option>
                                         <option value="Other">Other</option>
                                     </select>
                                 </div>
                                 <div className='col-md-4'>
                                     <select className='Dash-Five-Input'>
                                         <option value="Marital Status">Marital Status</option>
                                         <option value="Married">Married</option>
                                         <option value="Unmarried">Unmarried</option>
                                     </select>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Number of dependents'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="email" placeholder='Email Address'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="number" placeholder='Phone'/>
                                 </div>
                                 <div className='col-md-4'>
                                     <select className='Dash-Five-Input'>
                                         <option value="Citizenship">Citizenship</option>
                                         <option value="Citizenship">Citizenship</option>
                                         <option value="Citizenship">Citizenship</option>
                                     </select>
                                 </div>
                                 <div className='col-md-4'>
                                     <select className='Dash-Five-Input'>
                                         <option value="Are You a canadian permanet">Are You a canadian permanet</option>
                                         <option value="Yes">Yes</option>
                                         <option value="No">No</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <h2 className='Dash-Five-h2'>Current Residential Address</h2>
                         <div className=''>
                             <div className='row'>
                             <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="number" placeholder='Street Number'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Unit Numbe'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Street Name'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='City'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Country'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Province/state'/>
                                 </div>
                                 <div className='col-md-12'>
                                      <input className='Dash-Five-Input' type="number" placeholder='Postal Code'/>
                                 </div>
                             </div>
                         </div>
                         <h2 className='Dash-Five-h2'>Employment</h2>
                         <div className=''>
                             <div className='row'>
                             <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="number" placeholder='Street Number'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Unit Numbe'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Street Name'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='City'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Country'/>
                                 </div>
                                 <div className='col-md-4'>
                                      <input className='Dash-Five-Input' type="text" placeholder='Province/state'/>
                                 </div>
                                 <div className='col-md-12'>
                                      <input className='Dash-Five-Input' type="number" placeholder='Postal Code'/>
                                 </div>
                             </div>
                         </div>
                         <button type="button" className="btn btn-primary Dash-Five-btn">Save</button>
                         <button type="button" className="btn btn-outline-primary Dash-Five-btn">Next</button>
                     </div>
               </div>
           </div>
           </div>}

  {active === 2 && <div className='Dash-Four-bgm'>
          <div className='row'>
                 <div className='col-md-12'>
                     <Dashboardinfor />
                     <div className='Dash-Four-bg1'>
                         <div className='row'>
                               <div className='col-md-12 d-flex justify-content-between bg-color-style'>
                                  <p>01. Personal Information <i className="fa fa-check check-color" aria-hidden="true"></i></p>
                                  <div className=''>
                                  <i className="fa fa-pencil change-pencil" aria-hidden="true"></i>
                                  <i className="fa fa-plus change-plus" aria-hidden="true"></i>
                                  </div>
                               </div>
                               <div className='col-md-12 d-flex justify-content-between bg-color-style'>
                                <p>02. Objective  Experienc <i className="fa fa-check check-color" aria-hidden="true"></i></p>
                                <div className=''>
                                <i className="fa fa-pencil change-pencil" aria-hidden="true"></i>
                                <i className="fa fa-plus change-plus" aria-hidden="true"></i>
                                </div>
                               </div>
                               <div className='col-md-12 d-flex justify-content-between bg-color-style'>
                                   <p>03. Suitabilty <i className="fa fa-check check-color" aria-hidden="true"></i></p>
                                   <div className=''>
                                   <i className="fa fa-pencil change-pencil" aria-hidden="true"></i>
                                   <i className="fa fa-plus change-plus" aria-hidden="true"></i>
                                   </div>
                               </div>
                               <div className='col-md-12 d-flex justify-content-between bg-color-style'>
                                   <p>04. Insider status  AML <i className="fa fa-check check-color" aria-hidden="true"></i></p>
                                   <div className=''>
                                   <i className="fa fa-pencil change-pencil" aria-hidden="true"></i>
                                   <i className="fa fa-plus change-plus" aria-hidden="true"></i>
                                   </div>
                               </div>
                               <div className='col-md-12 d-flex justify-content-between bg-color-style'>
                                   <p>05. Document <i className="fa fa-check check-color" aria-hidden="true"></i></p>
                                   <div className=''>
                                   <i className="fa fa-pencil change-pencil" aria-hidden="true"></i>
                                   <i className="fa fa-plus change-plus" aria-hidden="true"></i>
                                   </div>
                               </div>
                         </div>
                               <button className='btn btn-primary Dash-Four-btn'>Invest In Property</button>
                     </div>
                 </div>
          </div>
      </div>}
      {active === 3 && <div className='MArgin-Side'>
             <div className='DAshLink'> <Link to="/" className='DAshLink1'>	&#60; Back To My Investments</Link></div>  
                <div className='DashWhite-bg'>
          <div className=''>
          <div className='row'>
                <div className='col-md-4'>
                    <Link to="/Information"><p className='DashSbtn'>Distributions</p></Link>
                </div>
                <div className='col-md-4'>
                   <Link to="/PaymentInformation"> <p className='DashSbtn'>Purchase Transactions</p></Link>
                </div>
                <div className='col-md-4'>
                   <Link to="/"> <p className='DashSbtn'>Updates</p></Link>
                </div>
          </div>
      </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-md-4 DashWhite-bg1'>
                  <h3>Ottawa</h3>
                  <p>390 Bank Street,Ottawa,Ontario KP srv</p>
                  <p className='Dash_p-style'>Service this is a good part of the work curnecy</p>
              </div>
              <div className='col-md-8 DashWhite-bg1'>
                  <h3>Ottawa</h3>
                  <p>390 Bank Street,Ottawa,Ontario KP srv</p>
                  <div className='container'>
                      <div className='row'>
                          <div className='col-md-3 DashSDesign'>
                          <p>Total offering</p>
                            <span>$121,098</span>
                            </div>
                            <div className='col-md-3 DashSDesign'>
                          <p>Total Investing Amount</p>
                            <span>$500</span>
                            </div>
                            <div className='col-md-3 DashSDesign'>
                          <p>My Distributions to Clothos</p>
                            <span>NO</span>
                            </div>
                      </div>
                  </div>
                  <Link to="/"><p className='DashS_space'>View Original Listing  &#8594;</p></Link>
              </div>
              </div>
              </div>
              </div>}
           {active === 4 && <div className='container create-margin'>
          <div className='row'>
              <div className='col-md-12'>
      <div className='Dash-Board-Just'>
          <h3>Land Depot</h3>
          <h6>Date:14 December 2021</h6>
      </div>
      <div className='Dash-Board-Just2'>
           <p>User Details</p>
           <p>Property Details</p>
           <p>Payment Details</p>
      </div>
      <div>
         
      </div>
      <div className='Dash-Board-Just3'>
          <div className='row'>
          <div className='col-md-4'>
              <div className='d-flex '>
           <span className='set-width'>Name:</span>
           <p className='set_width-p margin-left_set'>Rizwan Qureshi</p>
           </div>
           <div className='d-flex '>
           <span className='set-width '>Address:</span>
           <p className='set_width-p '>j-11 Deepak Mark Adarsh Nagar</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Phone:</span>
           <p className='set_width-p margin-left_set'>8824248100</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Email:</span>
           <p className='set_width-p'>qrizwani786112@gmail.com</p>
           </div>
           </div>
           <div className='col-md-4'>
               <div className='d-flex '>
           <span className='set-width'>Name:</span>
           <p className='set_width-p'>Land Depot Capital</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Address:</span>
           <p className='set_width-p'>  123 City1Kolkata</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Area:</span>
           <p className='set_width-p'>550</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Price:</span>
           <p className='set_width-p'>100</p>
           </div>
           </div>
           <div className='col-md-4'>
           <div className='d-flex '>
           <span className='set-width'>Payment Status: </span>
           <button className='btn btn-success set-width_button'>Completed</button>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Share Price:</span>
           <button className='btn btn-success set-width_button'>Completed</button>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Shares Allotted:</span>
           <p className='set_width-p'>$10</p>
           </div>
           <div className='d-flex '>
           <span className='set-width'>Total: </span>
           <p className='set_width-p'>1</p>
           </div>
           </div>
           </div>
      </div>
      <div className='Dash-Board_bg'>
          <div className='row'>
           
          <h2>Payment Details:</h2>
          <div className='col-md-6'>
              <div className='d-flex '>
          <span className='set-width1'>Beneficiary Name: </span>
           <p className='set_width-p'>851943 ONTARIO INC 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Beneficiary Address:</span>
           <p className='set_width-p'>Toronto, ON, M4L1H1 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Beneficiary Bank:</span>
           <p className='set_width-p'>Toronto, ON, M4L1H1 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Beneficiary Bank Address:</span>
           <p className='set_width-p'>730 Woodbine Ave, Toronto, ON - M4E2J</p>
           </div>
          </div>
          <div className='col-md-6'>
              <div className='d-flex '>
          <span className='set-width1'>Swift Code: </span>
           <p className='set_width-p'>CIBCCATT 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Institution number:</span>
           <p className='set_width-p'>01012 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Branch number:</span>
           <p className='set_width-p'>007322 1</p>
           </div>
           <div className='d-flex '>
           <span className='set-width1'>Account number :</span>
           <p className='set_width-p'>196229811 1</p>
           </div>
          </div>
          </div>
      </div>
      </div>
      </div>
      </div>}

          </div>
          </div>
          </div>

  </>;
};
export default DashboardCard;