import React, { useState } from 'react'
import Login from './Login';
import Dashboard from "./DashboardCard"
const LoginFormValidtaion = () => {
    const Admin = () =>{
        // email:"jaipalrajput@gmail.com",
        // password:"jai@12345"
    }
    const [user,setuser] = useState({name:"",email:""});
    const [error,seterror] = useState("");

    const Login = details => {
        console.log(details);
        if(details.email == Admin.email && details.password == Admin.password){
        console.log("Logged in");
        setuser({
            name:details.name,
            email:details.email
        })}
      else{
          console.log("error");
      }
    }

    const Logout = () =>{
        console.log("logout")
        setuser({name:"",email:""});
    }
  return (
    <>
       {(user.email != "") ? (
           <div><Dashboard /></div>) :( <div><Login error={error} user={user}/></div>
       )}
    
    
    
    </>
  )
}

export default LoginFormValidtaion