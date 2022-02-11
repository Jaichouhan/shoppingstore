import { Link } from "react-router-dom";


const Blogs = () => {
  const BlogsInformation = [
    {
      id:0,
      Date:"07 July 2021",
      Title:"Some quick example text to build on the card title.",
      Button:"View More"
    },
    {
      id:1,
      Date:"08 July 2021",
      Title:"Some quick example text to build on the card title.",
      Button:"View More"
    },
    {
      id:2,
      Date:"09 July 2021",
      Title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      Button:"View More"
    }
  ]

    return (
        <>
        <div className="container">
              <div className="row">
         {BlogsInformation && BlogsInformation.map((data,index) =>(
                 <div className="col-md-4 linespa" key={index}>
                 <img src="/images/group10.png" alt="img" className="imgfluid imgres" />
                 <div>{data.Date}</div>
                 <p className="">{data.Title}</p>
                 <Link to="/" className="btn btn-primary btnspace">{data.Button}</Link>
               </div>
         ))}
              </div>
            </div>
      



        </>
    )
}
export default Blogs;