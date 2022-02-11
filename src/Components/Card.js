import {Link} from "react-router-dom";
const Card = () => {
  const Details= [
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
    },
    {
        id:2,
        imgHead:"Hamilton",
        HeadDetail:"390 Bank Street",
        pDeatil:"Semi Detached",
        RoomSize:"740 sq ft",
        Bhk:"1 BHK",
        RoomBath:"Bathroom",
        Purchase:"$18.000",
        Project:"3 Years",
        ProjectAnnual:"23.5%",
        Picture:"/images/12.png"
        
     },
     {
        id:3,
        imgHead:"Hamilton",
        HeadDetail:"390 Bank Street",
        pDeatil:"Semi Detached",
        RoomSize:"940 sq ft",
        Bhk:"3 BHK",
        RoomBath:"Bathroom",
        Purchase:"$20.000",
        Project:"5 Years",
        ProjectAnnual:"25.5%",
        Picture:"/images/13.png"
        
     }
];        
console.log(Details.Picture);                  
    return (
        <>
           <div className="container">
           <div className="row">
         {Details && Details.map((data,index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 spacep" key={index}>
                  <div className="bgimg" style={{
                    backgroundImage: `{url("${data.Picture}")}`
                  }}>
                  <button type="button" className="btn btn-danger btn9">Just Launched</button>
                     <div className="imgtext">
                      <span>{data.imgHead}</span>
                      <p>{data.HeadDetail}t</p>
                      </div>
                      </div>
                      <div className="colordiv">
                           <div className="desitext">
                                <p>{data.pDeatil}</p>
                                <div className="heartset">
                                <i className='far fa-heart'></i>
                                </div>
                           </div>
                           <div className="settext">
                             <div>
                           <i className="fas fa-home blue"></i>
                           <span>{data.RoomSize}</span>
                           </div>
                           <div>
                           <i className="fa fa-bed blue spacei"></i>
                           <span>{data.Bhk}</span>
                           </div>
                           <div>
                           <i className="fa fa-bath blue spacei"></i>
                           <span>{data.RoomBath}</span>
                           </div>
                           </div>
                           <hr/>
                           <div className="pset">
                             <div className="">
                             
                             <p>Purchase</p>
                             <span>{data.Purchase}</span>
                             </div>
                             <div className="">
  
                             <p className="spacei">Project</p>
                             <span className="spacei">{data.Project}</span>
                             </div>
                             <div className="">
  
                             <p className="spacei">Projected Annual</p>
                             <span className="spacei">{data.ProjectAnnual}</span>
                             </div>
                           </div>
                          
                      <Link to="/PropertiesDetails"><button type="button" className="btn btn-primary btn5">Invest Now </button></Link>  
                      </div>
                </div>
            
             )) }
      
            
           </div>
         </div>
        </>
    )
}
export default Card;