
import {Link} from "react-router-dom"
import LoginInformation from "./LoginInformation";
import Social from "./Social";
const Login = () => {
    return( <>
       <div className="container-fluid Loginbg">
          <div className="container Loginpd">
         <div className="row">
            <LoginInformation/>
            <div className="col-md-6 Loginbg1">
               <h1 className="Formh1">Login to Account</h1>
               <p className="Formp">Enter your login data</p>
               <div className="">
                  <div className="row">
                 
               <div className="col-md-12 col-sm-12 Loginh">
                  <input type="email" className="Form" placeholder="Email or Username"/>
               </div>
               <div className="col-md-12 col-sm-12 Loginh">
                  <input type="Password" className="Form" placeholder="Password"/>
               </div>
                   <div className="Formd">
                      <p className="Formtp">
                         <input type="checkbox" className="me-2"/>Remember Password
                      </p>
                      <Link to="" className="Setforget">Forget Password?</Link>
                   </div>
               </div>
               </div>
               <Link to="/DashboardCard">
                   <button type="button" className="btn btn-primary Frombtn">Login Account</button>
               </Link>
                   <p className="Frompsty">Already have an account? <Link className="styleLink" to="/Resigter">Create Account</Link> </p>
                   <Social />
            </div>
         </div>
         </div>
       </div>

    </>)
}

export default Login;