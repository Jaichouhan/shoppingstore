import Card from "./Card";
import CilentREview from "./CilentREview";
import Allinformation from "./Allinformation";

import Detail from "./Detail";
import Grow from "./Grow";
import TotalBlog from "./TotalBlog";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <div className="container">
            <div className="round"></div>
            <div className="setline1">
              <p className="pline">
                Welcome to Land Depot Capital{" "}
                <img src="/images/4.gif" alt="Line" />
              </p>
              <h1 className="h1style">
                Real Estate investing
                <br />
                Made for You.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Laboriosam delectus voluptatem dolorum dictast
                <br /> adipisci eaque facilis autem.
              </p>

              <Link to="Api">
                <button type="button" className="btn btn-danger btn1">
                  <span>GET STARTED</span>
                </button>
              </Link>
              <Link to="/Navbar1">
                <button type="button" className="btn btn-outline-primary btn2">
                  <span>VIEW PROPERTIES</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container top">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/group5.png" alt="img3" className="imggset" />
          </div>
          <div className="col-md-6">
            <h5 className="h5style">Why Land Depot Capital</h5>
            <h2 className="h2style">Real Estate investing on your terms.</h2>
            <p className="pstyle">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
            <Link to="/">
              {" "}
              <button type="button" className="btn btn-primary btn4">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="top3">
        <div className="container">
          <h1>Our Marketplace</h1>
          <p className="pcenter">
            Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do
            eiusmod tempor labore et dolore magna aliqua. Quis ipsum
            suspendisse. <br />{" "}
          </p>
        </div>
        <Card />
      </div>

      <div className="div4">
        <div className="container">
          <h2 className="h2respon">
            {" "}
            Artifial Intelligence Augmented Real Estate Investing
          </h2>
          <p>
            Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <Link to="/">
            {" "}
            <button type="button" className="btn btn-danger btn3">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>

      <div className="">
        <Allinformation />
      </div>

      <div className="">
        <Detail />
      </div>
      <div>
        <Grow />
      </div>

      <div className="setbgcl">
        <CilentREview />
      </div>

      <TotalBlog />
    </>
  );
};

export default Home;
