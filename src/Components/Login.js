import React, { useState } from "react"
import {Link} from "react-router-dom"
import LoginInformation from "./LoginInformation";
import Social from "./Social";
const Login = ({error,user}) => {
  const [details,setdetails] = useState({email:"",password:""})
  const SubmitForm = () => {
   user(details)
  }
    return( <>
       <div className="container-fluid Loginbg">
          <div className="container Loginpd">
         <div className="row">
            <LoginInformation/>
            <div className="col-md-6 Loginbg1">
            <form onSubmit={SubmitForm}>
               <h1 className="Formh1">Login to Account</h1>
               <p className="Formp">Enter your login data</p>
               <div className="">
                  <div className="row">
                 
               <div className="col-md-12 col-sm-12 Loginh">
                  <input type="email" name="email" className="Form" placeholder="Email or Username" onChange={(e) => setdetails({...details,email:e.target.value})} value={details.email}/>
               </div>
               <div className="col-md-12 col-sm-12 Loginh">
                  <input type="Password" name="password" className="Form" placeholder="Password" onChange={(e) => setdetails({...details,password:e.target.value})} value={details.password}/>
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
            </form>
            </div>
         </div>
         </div>
       </div>

    </>)
}

export default Login;