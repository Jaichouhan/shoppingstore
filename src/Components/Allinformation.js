import {Link} from "react-router-dom"
const Allinformation = () => {
    return (
        <>
           <div className="desing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 createline">
                            <h1 className="h1styler">We make it simple</h1>
                            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum</p>
                      
                        <ul className="licolor">
                            <li>Lorem ipsum dolor sit amet. consectetu.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet. consectetur adipisci.</li>
                            <li>Lorem ipsum dolor sit amet. consectetur ad.</li>
                            
                        </ul>
                       <Link to="/"><button type="button" className="btn btn-primary btn6">Get Started</button></Link> 
                        </div>
                        <div className="col-md-6">
                            <img src="/images/group1.png" alt="Img1" className="Img1" />
                        </div>
                        </div>
           </div>
           <div className="container-fluid setdetails">
                 <div className="container ">
                      <div className="row">
                        <div className="col-md-6">
                            <img src="/images/group2.png" alt="Img2" className="Img2" />
                        </div>
                        <div className="col-md-6 createline">
                            <h1 className="h1style1">We make the property market accessbile for you.</h1>
                            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <Link to="/">   <button type="button" className="btn btn-primary btn7">View More</button></Link>  
                        </div>
                       
                        </div>
                        </div>
                        </div>
                        <div className="container">
                            <div className="row">
                        <div className="col-md-6 respgap setspace">
                            <h1 className="h1style2">We help you make smart investments.</h1>
                            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend.</p>
                     <Link to="/">  <button type="button" className="btn btn-primary btn7">View More</button></Link> 
                        </div>
                        <div className="col-md-6 setspace">
                            <img src="/images/group4.png" alt="Img4" className="Img4" />
                        </div>
                        </div>
                    </div>
                    </div>
           
        </>
    )
}
export default Allinformation;