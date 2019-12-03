
import React from 'react';
import {Link} from 'react-router-dom'
import './ModalComponentStyle.css'

const ModalComponent = ({changeShow}) => {
    return (
        <div>            
            <div className={"flexStart"}>
              <div
                className="modal left fade col-lg-3 col-md-3"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <div
                  className="modal-dialog modal-side modal-top-left"
                  role="document"
                  >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Mi Perf
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        >
                        Create Account
                      </button>
                      <br />

                      <Link
                        to="/login"
                        className="btn btn-md btn-primary"
                        aria-label="Close"
                        data-dismiss="modal"
                        onClick={changeShow}>
                          <button >

                        Log In
                          </button>
                        
                      </Link>  
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ModalComponent;