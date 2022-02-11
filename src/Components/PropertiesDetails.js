
import ImageGallery from 'react-image-gallery';
import React,{useState} from "react";

const PropertiesDetails = () => {
    const [show, setShow] = useState(0);
    const [range, setrange] = useState(10);
    const Changerange = (e) =>{
        setrange(e.target.value)
   }
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <>
         <div className="container-fluid Properbg">
             <div className="container">
             <div className="bg-white">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <ImageGallery items={images} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Properh1">131 Sackville Street</h1>
                        <p className="properp">London Ontario</p>
                        {/* <p>Back to home</p> */}
                        <span className="propersp">Condominium</span>
                        <div>
                        <button type="button" className="btn btn-dark Properbu">Pre-Construction</button></div>
                        <div className="">
                            <div className="row">
                                <div className="col-md-4 Propertsect">
                                    <p>Purchase</p>
                                    <span>100000</span>
                                </div>
                                <div className="col-md-4 Propertsect">
                                    <p>Project Team</p>
                                    <span>5</span>
                                </div>
                                <div className="col-md-4 Propertsect">
                                    <p>Projected Annual ROI</p>
                                    <span>19%</span>
                                </div>
                                <div className="col-md-6 my-5">
                                <button type="button" className="btn btn-primary Propertisebtn">Invest Now</button>
                                </div>
                                <div className="col-md-6 my-5">
                                <button type="button" className="btn btn-primary Propertisebtn">Book a Meeting</button>
                                </div>
                            </div>
                                <p className="styleprope">Capital At Risk - Please read key Risks and purchaseer's Right Before Investing</p>
                        </div>
                    </div>
                </div>
             </div>
             </div>
              <div className="container Propertipen">
                  <div className="row">
                  <ul className="Properkli">
                      <li className={show === 0 ? "Hover_changeActive" : "Hover_change"} onClick={() => setShow(0)}>About the Property</li>
                      <li className={show === 1 ? "Hover_changeActive" : "Hover_change"} onClick={() => setShow(1)}>Property highlight</li>
                      <li className={show === 2 ? "Hover_changeActive" : "Hover_change"} onClick={() => setShow(2)}>Financials</li>
                  </ul>
                  </div>
              </div>

              {show === 0 && <div className="container">  
                  <div className="row">
                      <div className="col-md-6">
                          <h1 className="h1Proper">About the Property</h1>
                          <p className="Proper-p">Duplex- Turn Key On A Quiet Street Investment Opportunity Knocks. Main Floor Offers One Bedroom With A 4 Piece Bathroom, Tenant Pays $1,200/Month. Upper Unit 2 Bedroom, 1 Bathroom $1200/Month (Both Tenants Are On Lease Till April 2022). Many Updates Have Been Done, Including: All New Windows And Doors 2020, All New Laminate Flooring And Ceramic Tile, Fresh Paint, Both Kitchens Are New. All Appliances Are Included - 2 Fridges And 2 Gas Stoves, 2 Over The Range Microwaves, Washer And Dryer, Spray Foam Basement, 100 Amp Service, Sprinkler System In The Basement. All Brick House, High Efficiency Furnace, Central Air. Deep Lot (159 Feet). Tenanted. 24 Hours For All Showings Is A Must.</p>
                      </div>
                      <div className="col-md-6">
                      <iframe width="100%" height="100%" scrolling="no" src="https://maps.google.com/maps?hl=en&amp;q=London Ontario&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                      </div>
                  </div>
              </div>}
   {show === 1 && <div className="container" >
                  <h3 className="Properth3">Property highlight</h3>
                  <div className="setthep">
                        <p>Duplex </p>
                        <p>Fast-Growing City</p>
                  </div>
               </div>}

              {show === 2 && 
             <div className="container stylediv" >
                 <div className="sttyelcard" >
                       <h4 className="Proper-h4"><img src="/images/image.png" alt="img"/> Understanding Annual ROI</h4>
                       <h6>Projected Annual ROI</h6>
                       <input type="range" className="ProperRang" min={5} max={100} step={5} defaultValue={range} onChange={Changerange}/>
                       <div>
                           <span className="spanstylep">{range}%</span>
                       </div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-6">
                               <h6 className="Properh6">I would like to invest</h6>
                               <input type="number"  className="Properinput" defaultValue={10000}/>
              
                               </div>
                               <div className="col-md-6">
                               <h6 className="Properh6">I would like to invest</h6>
                               <select name="year" className="Properinput1">
                                   <option defaultValue={1}>1 Year</option>
                                   <option defaultValue={2}>2 Year</option>
                                   <option defaultValue={3}>3 Year</option>
                                   <option defaultValue={4}>4 Year</option>
                                   <option defaultValue={5}>5 Year</option>
                                   <option defaultValue={7}>7 Year</option>
                                   <option defaultValue={1}>10 Year</option>
                                   
                               </select>
                
                               </div>
                           </div>
                       </div>
                       <div className="PropErti">
                       <h6>Projected total returns:</h6>
                       <h6>$150000</h6>
                       <div className="createbutton">
                           50%
                       </div>
                       </div>
                 </div>
             </div>}

         </div>

        
        </>
    )
}

export default PropertiesDetails;