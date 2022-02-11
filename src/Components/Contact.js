
import {Link} from "react-router-dom"
const Contact = () => {
    return( <>
    <div className="col-md-12 setaimg">
         <h1>CONTACT US</h1>
       <Link to="/"><p>Home 	&#62; About us</p></Link>  
    </div>
    <div className="container-fluid bgped">
      <div className="container">
      <div className="row">
        <div className="col-md-6 bgimgc" id="formfir">
            <div className="setelement">
              <img src="/images/call.png" alt="img"/>
              <div className="psetcol">
              <p>Phone Number</p>
              <span>+1 (667) 55 345 66</span>
              </div>
            </div>
            <div className="setelement">
              <img src="/images/envelope.png" alt="img"/>
              <div className="psetcol">
              <p>Support email</p>
              <span>info@landdepotcapital.ca</span>
              </div>
            </div>
            <div className="setelement">
              <img src="/images/mark.png" alt="img"/>
              <div className="psetcol">
              <p>Office Address</p>
              <span>Unit 35- 1828 Blue Heron Drive, London, ON N6H 0B7</span>
              </div>
            </div>
            <div className="socialic">
             <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
             <a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i> </a>
             <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
             <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            
            </div>
        </div>
        
        <div className="col-md-6 bgsett" id="formSec">
            <p className="pcontac">Get in touch with us</p>
            <p className="pcontac1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="">
              <div className="row">
                <div className="col-md-6">
                   <input type="text" className="form-control inputst" placeholder="Your Name" name="name"/> 
                </div>
                <div className="col-md-6">
                   <input type="text" className="form-control inputst"  placeholder="Your Email" name="email"/> 
                </div>
                <div className="col-md-12">
                   <input type="text" className="form-control inputst1"  placeholder="Subject"/> 
                </div>
                <div className="col-md-12">
                   <textarea type="text" className="form-control inputst2" rows="7"  placeholder="Your Message" name="message"/> 
                </div>
               
              </div>
            </div>
        <button type="button" className="btn btn-danger btn12">Send Message</button>
        </div>
      </div>
      </div>
    </div>

    </>)
}

export default Contact;