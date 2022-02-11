import LoginInformation from "./LoginInformation";
import { Link } from "react-router-dom";
import Social from "./Social";
const Resigter = () => {
    return (
        <>
             <div className="container-fluid Loginbg">
          <div className="container">
         <div className="row">
            <LoginInformation/>
            <div className="col-md-6 Loginbg1">
            <h1 className="Formh1">Sign Up to Account</h1>
               <p className="Formp">Enter your Sign Up data</p>
               <div className="">
                  <div className="row">
                 
               <div className="col-md-6 col-sm-6 Loginh">
                  <input type="text" className="Form" placeholder="First Name"/>
               </div>
               <div className="col-md-6 col-sm-6 Loginh">
                  <input type="text" className="Form" placeholder="Last Name"/>
               </div>
               <div className="col-md-12 Loginh">
                  <input type="email" className="Form" placeholder="Enter Your Email"/>
               </div>
               <div className="col-md-12 Loginh">
                  <input type="Password" className="Form" placeholder="Password"/>
               </div>
               <div className="col-md-12 Loginh">
                  <input type="email" className="Form" placeholder="Confirm Password"/>
               </div>
               </div>
               </div>
               <button type="button" className="btn btn-primary Frombtn">Login Account</button>
               <p className="Frompsty">Already have an account? <Link className="styleLink" to="/Login">Log in</Link> </p>
               <Social />
                </div>

            </div>
            </div>
            </div>

        </>
    )
}
export default Resigter;