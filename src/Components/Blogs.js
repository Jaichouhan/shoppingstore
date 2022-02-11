
import Blog from './Blog'
import {Link} from "react-router-dom"

const Blogs = () => {
    return( <>
     
    <div className="col-md-12 setbimg">
         <h1>BLOGS</h1>
        <Link to="/"> <p>Home 	&#62; Blogs</p></Link>
    </div>
   
     <Blog/>

    </>
    )}
export default Blogs