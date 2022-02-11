
import TotalBlog from './TotalBlog'
import CilentREview from './CilentREview'
import {Link} from "react-router-dom"

const About = () => {
    return( <>
    <div className="col-md-12 setaimg">
         <h1>ABOUT US</h1>
        <Link to="/"> <p>Home 	&#62; About us</p></Link>
    </div>
    <div className="container-fluid bgcolora">
      <div className="container">
      <div className='row'>
        <div className='col-md-6'>
          <img src='/images/About.png' alt="aboutimg"/>
        </div>
        <div className='col-md-6 abouts'>
          <h4>About Land Depot Capital</h4>
          <h1>Real estate investing on your terms.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus voluptatem dolorum dicta adipisci eaque facilis autem praesentium libero.</p>
          <button type="button" className="btn btn-primary btn11">Get Started</button>
        </div>
        
      </div>
      </div>
    </div>
    <CilentREview/>
        <TotalBlog/>

    </>)
}

export default About;