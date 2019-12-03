import React from "react";
import "./HomeComponentStyle.css";
import { Link } from "react-router-dom";
import gif from "../../assets/loading.gif";
import backgroundPrev from './HomeComponentImages/pngguru.com.png'
import backgroundNext from './HomeComponentImages/pngguru2.com.png'

const HomeComponent = ({ cities, nums }) => {
  if (!!cities) {
    return (
      <div className={"Apps"}>
        <div className={"cen"}>
          <h2 className={"myFont marg"}>
            Find your perfect trip,
            <br />
            designed by insiders who know and love their cities.
          </h2>
        </div>
        <h3 className={"myFont myFont2 marg3"}>View all cities here!</h3>
        <Link to="/search">
          <div className={"two"}>
            <div className={"arrow marg"}></div>
          </div>
        </Link>

        <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>

        {cities !== null &&
        cities !== undefined &&
        cities.ciudadesFromRoutes &&
        nums.length == 12 ? (
          <div className={"flexImg"}>
            <div
              id="carouselExampleControls"
              className="carousel slide one"
              data-ride="carousel"
            >
              {
                <div className="carousel-inner">
                  <div className="carousel-item active one">
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[0]].title}`}
                    >
                      {/* <span className="pos"></span> */}
                      <div className={"pos"}>
                        <span className={"pos"}></span>
                        <span className={"posi"}>
                          <img
                            className="col-lg-6 col-md-6 col-sm-6 images"
                            src={cities.ciudadesFromRoutes[nums[0]].image}
                            alt="First slide"
                          />
                          <span className={"inside2"}>
                            {cities.ciudadesFromRoutes[
                              nums[0]
                            ].name.toUpperCase()}
                          </span>
                        </span>
                      </div>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[1]].title}`}
                    >
                      <span className={"posi"}>
                        <img
                          className="col-lg-6 col-md-6 col-sm-6 images"
                          src={cities.ciudadesFromRoutes[nums[1]].image}
                          alt="Second slide"
                        />
                        <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[1]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[2]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[2]].image}
                        alt="Third slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[2]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[3]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[3]].image}
                        alt="Third slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[3]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="carousel-item one">
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[4]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[4]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[4]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[5]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[5]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[5]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[6]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[6]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[6]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[7]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[7]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[7]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="carousel-item one">
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[8]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[8]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[8]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${cities.ciudadesFromRoutes[nums[9]].title}`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[9]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[9]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${
                        cities.ciudadesFromRoutes[nums[10]].title
                      }`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[10]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[10]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={`/cities/${
                        cities.ciudadesFromRoutes[nums[11]].title
                      }`}
                    >
                      <span className={"posi"}>
                      <img
                        className="col-lg-6 col-md-6 col-sm-6 images"
                        src={cities.ciudadesFromRoutes[nums[11]].image}
                        alt="First slide"
                      />
                      <span className={"inside2"}>
                          {cities.ciudadesFromRoutes[
                            nums[11]
                          ].name.toUpperCase()}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              }
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{height: "80px", width: "80px", backgroundImage: `url(${backgroundPrev})`}}
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{height: "80px", width: "80px", backgroundImage: `url(${backgroundNext})`}}
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="flexCont">
            <img className="loading4" src={gif} alt="" />
          </div>
        )}
      </div>
    );
  }
};

export default HomeComponent;
