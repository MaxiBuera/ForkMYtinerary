import React from "react";
import gif from "../../assets/loading.gif";
import "./CityItinerariesComponentStyles.css";
import { Link } from "react-router-dom";
import backgroundPrev from "./CityItinerariesComponentImages/pngguru.com.png";
import backgroundNext from "./CityItinerariesComponentImages/pngguru2.com.png";

const CityItinerariesComponent = ({ itineraries, cityData }) => {
  return (
    <div className={"container2"}>
      {cityData ? (
        <div className={"container2"}>
          <div className={"col-md-12 col-sm-12"}>
            <img src={cityData.singleCityFromRoutes[0].image} alt="" />
            <span className={"inside"}>
              {cityData.singleCityFromRoutes[0].name.toUpperCase()}
            </span>
          </div>
          {itineraries.itinerariesForACity &&
          cityData.singleCityFromRoutes &&
          itineraries.itinerariesForACity.itinerariesForACity
            .itinerariesForACity.length !== 0 ? (
            <div className={"margTop"}>
              <h2>
                Available MYtineraries
                <br />
              </h2>
              <div className={"div col-lg-12 col-md-12 col-sm-12"}>
                {console.log("itineraries", itineraries)}
                {itineraries.itinerariesForACity.itinerariesForACity.itinerariesForACity.map(
                  (item, i) => (
                    <div key={i}>
                      <div>
                        <div className="container margTop">
                          <div className="row">
                            <div
                              className={
                                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                              }
                            >
                              <div className={"container2 flexContCol"}>
                                <img
                                  className={"profile"}
                                  src={item.userPhoto}
                                  alt=""
                                />
                                <div>{item.username}</div>
                              </div>
                            </div>

                            <div
                              className={
                                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                              }
                            >
                              <div>{item.title}</div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Likes:&nbsp;</div>
                                  <div>{item.rating}</div>
                                </div>
                              </div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Duration:&nbsp;</div>
                                  <div>{item.duration}hs.</div>
                                </div>
                              </div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Price:&nbsp;</div>
                                  <div>${item.price}</div>
                                </div>
                              </div>

                              <div className={"blue"}>
                                {/* {item.hashtags} */}
                                {item.hashtags.map((hashtags, i) => (
                                  <div key={i} className={"hashLinks"}>
                                    <a href="#">{hashtags}&nbsp;</a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={"container2 flexContLeft"}></div>
                      </div>

                      {/* ACÁ EMPIEZA EL BOTÓN DE VER MÁS PARA VER LAS ACTIVITIES DE CADA ITINERARIO */}

                      <button
                        className="navbar-toggler btn fullToggle"
                        type="button"
                        data-toggle="collapse"
                        data-target={"#navbarSupportedContent" + i}
                        aria-controls={"navbarSupportedContent" + i}
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        View All Activities
                        <br />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id={"navbarSupportedContent" + i}
                      >
                        <div
                          id={"carouselExampleControls" + i}
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner">
                            {item.activities.map((item, i) =>
                              i == 0 ? (
                                <div key={i} className="carousel-item active">
                                  <div className={"flexContCar"}>
                                    <div className={"bold"}>{item.Name}</div>
                                    <div className={"fullToggle2"}>
                                      {item.Comments}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div key={i} className="carousel-item">
                                  <div className={"flexContCar"}>
                                    <div className={"bold"}>{item.Name}</div>
                                    <div className={"fullToggle2"}>
                                      {item.Comments}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                          <a
                            className="carousel-control-prev"
                            href={"#carouselExampleControls" + i}
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundImage: `url(${backgroundPrev})`,
                                marginLeft: "70px"
                              }}
                            ></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href={"#carouselExampleControls" + i}
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundImage: `url(${backgroundNext})`,
                                marginRight: "70px"
                              }}
                            ></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                        <br />
                        <div className={"comments"}>
                          <label>
                            <span className={"labLeft"}>Comments</span>
                            <input
                              className={"inp"}
                              type="text"
                              placeholder="Your Comment..."
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <h1>
              There are no itineraries available for&nbsp;
              {cityData.singleCityFromRoutes[0].name}. Would you like to&nbsp;
              <span className={"blue"}>
                <Link to={"/itineraries/add"}>add one?</Link>
              </span>
            </h1>
          )}
        </div>
      ) : (
        <div className="flexCont">
          <img className="loading4" src={gif} alt="" />
        </div>
      )}
    </div>
  );
};

export default CityItinerariesComponent;
