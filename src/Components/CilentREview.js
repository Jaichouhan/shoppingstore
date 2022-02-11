import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CilentREview = () => {
    const Slick = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <>
        
<div id="carouselExampleInterval" className="container carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
     <div className="setcilent">
        <h1> Trusted Client's Reviews </h1>
          <Slider {...Slick}>
            <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                      <img src="/images/group8.png" alt="img"/>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 setpra">
                      <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do viverra.</p>
                      <h3>Charl Oswal</h3>
                      <h6>Invester</h6>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>    
            <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                      <img src="/images/group8.png" alt="img"/>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 setpra">
                      <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do viverra.</p>
                      <h3>Charl Oswal</h3>
                      <h6>Invester</h6>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>    
            <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                      <img src="/images/group8.png" alt="img"/>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 setpra">
                      <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do viverra.</p>
                      <h3>Charl Oswal</h3>
                      <h6>Invester</h6>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>    
            </Slider>
          </div>
          </div>
    </div>

    </div>

  </>
    )}
export default CilentREview;