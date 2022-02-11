
import Card from "./Card";

import { Link } from "react-router-dom";
import TotalBlog from "./TotalBlog";
const Properties = () => {
    const Detailes= [
        {
           id:0,
           imgHead:"Hamilton",
           HeadDetail:"390 Bank Street",
           pDeatil:"Semi Detached",
           RoomSize:"840 sq ft",
           Bhk:"2 BHK",
           RoomBath:"Bathroom",
           Purchase:"$21.000",
           Project:"5 Years",
           ProjectAnnual:"26.5%",
           Picture:"/images/11.png"
        },
        {
            id:1,
            imgHead:"Hamilton",
            HeadDetail:"390 Bank Street",
            pDeatil:"Semi Detached",
            RoomSize:"840 sq ft",
            Bhk:"2 BHK",
            RoomBath:"Bathroom",
            Purchase:"$21.000",
            Project:"5 Years",
            ProjectAnnual:"26.5%",
            Picture:"/images/11.png"
         }
    ]
    console.log(Detailes);
    return( <>
    <div className="col-md-12 setpimg">
         <h1>PROPERTIES</h1>
         <Link to="/"><p>Home 	&#62; Properties</p></Link>
    </div>
    
         <Card {...Detailes}/>
         <Card />
    
    <TotalBlog/>
    </>)
}

export default Properties;