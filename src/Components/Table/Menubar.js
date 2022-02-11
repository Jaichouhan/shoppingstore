import React, { useState } from 'react';
import './Menubar.css'
const Menubar = () => {
    const [toggle, settoggle] = useState(false);
    const Togglebtbn = () => {
        settoggle(!toggle);
    }
    const [toggle1, settoggle1] = useState(false);
    const Togglebtbn1 = () => {
        settoggle1(!toggle1);
    }
    const [toggle2, settoggle2] = useState(false);
    const Togglebtbn2 = () => {
        settoggle2(!toggle2);
    }
    const [toggle3, settoggle3] = useState(false);
    const Togglebtbn3 = () => {
        settoggle3(!toggle3);
    }
    const [toggle4, settoggle4] = useState(false);
    const Togglebtbn4 = () => {
        settoggle4(!toggle4);
    }
return <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 back-bg-color'>
                    <div className='Menubar-set'>
                    <i className="fas fa-ellipsis-v"></i>
                        <p>Sports</p>
                    </div>
                    <ul className='Menubar-ul'>
                    <li>
                        <div className='Menubar-li' onClick={Togglebtbn}>
                      Test Matches <i className="Greater-Then-style"></i>
                        </div>
                        {toggle && <div className='Hide-menu'>
                               <p><i className="fas fa-arrow-right arrow_space"></i>India v New Zealand</p>
                               <p><i className="fas fa-arrow-right arrow_space"></i>New Zealand v South Africa</p>
                           </div>}
                            
                        </li>
                        <li>
                        <div className='Menubar-li' onClick={Togglebtbn1}>Iternational Twenty20 Matches <i className="Greater-Then-style"></i>
                        </div>
                        {toggle1 && <div className='Hide-menu'>
                               <p><i className="fas fa-arrow-right arrow_space"></i>India v New Zealand</p>
                               <p><i className="fas fa-arrow-right arrow_space"></i>New Zealand v South Africa</p>
                           </div>}
                         
                        </li>
                        <li>
                        <div className='Menubar-li' onClick={Togglebtbn2}>
                            Australlia v Sri Lanka <i className="Greater-Then-style"></i>
                            </div>
                            {toggle2 && <div className='Hide-menu'>
                               <p><i className="fas fa-arrow-right arrow_space"></i>India v New Zealand</p>
                               <p><i className="fas fa-arrow-right arrow_space"></i>New Zealand v South Africa</p>
                           </div>}
                             
                            </li>
                          
                        <li>
                        <div className='Menubar-li' onClick={Togglebtbn3}>
                            Womens Internatinal Twenty20 Matches <i className="Greater-Then-style"></i>
                            </div>
                            {toggle3 &&  <div className='Hide-menu'>
                               <p><i className="fas fa-arrow-right arrow_space"></i>India v New Zealand</p>
                               <p><i className="fas fa-arrow-right arrow_space"></i>New Zealand v South Africa</p>
                           </div>}
                            
                            
                            </li>
                        <li>
                        <div className='Menubar-li' onClick={Togglebtbn4}>
                            One Day Internatinal <i className="Greater-Then-style"></i>
                            </div>
                            {toggle4 && <div className='Hide-menu'>
                               <p><i className="fas fa-arrow-right arrow_space"></i>India v New Zealand</p>
                               <p><i className="fas fa-arrow-right arrow_space"></i>New Zealand v South Africa</p>
                           </div>}
                            </li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <div className='Style_menu_Heading'>Australlia v Sri Lanka</div>
                    <div className='d-flex justify-content-between create-border-menu'>
                        <div className='Style-Color'>
                            <p>Australlia</p>
                            <span><i className="fas fa-arrow-right"></i>0.00</span>
                        </div>
                        <div className='d-flex Style-Color_menu'>
                            <div>
                            <p className='color-p'>1.92</p>
                            <span className='color-span'>285.61</span>
                            </div>
                            <div className='change-colo1'>
                       <p className='color-p'>1.93</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo2'>
                       <p className='color-p'>1.94</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo3'>
                       <p className='color-p'>1.95</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo4'>
                       <p className='color-p'>1.96</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo5'>
                       <p className='color-p'>1.97</p>
                       <span className='color-span'>285.61</span>
                   </div>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-between create-border-menu'>
                        <div className='Style-Color'>
                            <p>Australlia</p>
                            <span><i className="fas fa-arrow-right"></i>0.00</span>
                        </div>
                        <div className='d-flex Style-Color_menu'>
                            <div>
                            <p className='color-p'>1.92</p>
                            <span className='color-span'>285.61</span>
                            </div>
                            <div className='change-colo1'>
                       <p className='color-p'>1.93</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo2'>
                       <p className='color-p'>1.94</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo3'>
                       <p className='color-p'>1.95</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo4'>
                       <p className='color-p'>1.96</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo5'>
                       <p className='color-p'>1.97</p>
                       <span className='color-span'>285.61</span>
                   </div>
                        </div>
                    </div>


                  
                    <div className='d-flex justify-content-between create-border-menu'>
                        <div className='Style-Color'>
                            <p>Australlia</p>
                            <span><i className="fas fa-arrow-right"></i>0.00</span>
                        </div>
                        <div className='d-flex Style-Color_menu'>
                            <div>
                            <p className='color-p'>1.92</p>
                            <span className='color-span'>285.61</span>
                            </div>
                            <div className='change-colo1'>
                       <p className='color-p'>1.93</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo2'>
                       <p className='color-p'>1.94</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo3'>
                       <p className='color-p'>1.95</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo4'>
                       <p className='color-p'>1.96</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo5'>
                       <p className='color-p'>1.97</p>
                       <span className='color-span'>285.61</span>
                   </div>
                        </div>
                    </div>


                    <div className='Style_menu_Heading'>Australlia v Sri Lanka</div>
                    <div className='d-flex justify-content-between create-border-menu'>
                        <div className='Style-Color'>
                            <p>Australlia</p>
                            <span><i className="fas fa-arrow-right"></i>0.00</span>
                        </div>
                        <div className='d-flex Style-Color_menu'>
                            <div>
                            <p className='color-p'>1.92</p>
                            <span className='color-span'>285.61</span>
                            </div>
                            <div className='change-colo1'>
                       <p className='color-p'>1.93</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo2'>
                       <p className='color-p'>1.94</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo3'>
                       <p className='color-p'>1.95</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo4'>
                       <p className='color-p'>1.96</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo5'>
                       <p className='color-p'>1.97</p>
                       <span className='color-span'>285.61</span>
                   </div>
                        </div>
                    </div>

                   
                    <div className='d-flex justify-content-between create-border-menu'>
                        <div className='Style-Color'>
                            <p>Australlia</p>
                            <span><i className="fas fa-arrow-right"></i>0.00</span>
                        </div>
                        <div className='d-flex Style-Color_menu'>
                            <div>
                            <p className='color-p'>1.92</p>
                            <span className='color-span'>285.61</span>
                            </div>
                            <div className='change-colo1'>
                       <p className='color-p'>1.93</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo2'>
                       <p className='color-p'>1.94</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo3'>
                       <p className='color-p'>1.95</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo4'>
                       <p className='color-p'>1.96</p>
                       <span className='color-span'>285.61</span>
                   </div>
                   <div className='change-colo5'>
                       <p className='color-p'>1.97</p>
                       <span className='color-span'>285.61</span>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
  
  
  </>;
};



export default Menubar;