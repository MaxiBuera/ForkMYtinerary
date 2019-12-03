import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "./user.png";
import "./ProfileAndHamburguerComponentStyle.css";
import hamburguer from "./hamburguer.png";
import { Link } from "react-router-dom";

const ProfileAndHamburguerComponent = ({ show, changeShow }) => {
  return (
    <div className={"general"}>
      <nav className="navbar navbar-light light-blue lighten-4">
        <div className="navbar-brand">
          <div className={"flex-separated"}>
            
              <img
                className={"user-img"}
                src={user}
                onClick={changeShow}
                data-dismiss={show ? "modal" : ""}
                alt=""
              ></img>
            
            {show && (
              <div className={"flexStart"}>
                <div className={"modal2"}>
                  <div
                    className="modal-dialog modal-side modal-top-left"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Mi Perfil
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={changeShow}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body create_login">
                        <Link
                          to="/create-account"
                          type="button"
                          className="btn btn-success"
                          onClick={changeShow}
                        >
                          Create Account
                        </Link>
                        <br />

                        <Link
                          to="/login"
                          className="btn btn-md btn-primary"
                          aria-label="Close"
                          data-dismiss="modal"
                          onClick={changeShow}
                        >
                          Log In
                        </Link>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          style={{
            backgroundImage: `url(${hamburguer})`
          }}
          className="navbar-toggler toggler-example button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContentx"
          aria-controls="navbarSupportedContentx"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="dark-blue-text">
            <i className="fas fa-bars fa-1x"></i>
          </span>
        </button>
      </nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContentx">
        <ul className="navbar-nav mr-auto navDown">
          <li className="nav-item active">
            <a className="nav-link" href="javascript;">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript;">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript;">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileAndHamburguerComponent;
