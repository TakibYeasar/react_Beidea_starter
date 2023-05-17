import React from 'react';
import "./Improvement.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import ab1 from "../../assets/images/ab1.png";

const Improvement = () => {
  return (
    <section className="improvement-sec py-5">
      <div className="container py-md-5 py-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 improvement-right mb-lg-0 mb-5">
            <img src={ab1} alt="" className="img-fluid img-responsive" />
          </div>
          <div className="col-lg-6 improvement-left mt-lg-0 mt-sm-4 mt-2 pl-lg-5">
            <div className="style-title position-relative">
              <h3 className="title-style mb-sm-3 mb-2"><span>We are</span> the best agency to improve your work
              </h3>
            </div>
            <p>Consectetur adipiscing elit. Aliquam sit amet
              efficitur tortor...</p>
            <div className="progressblock mt-md-5 mt-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">Market Strategy <span className="">80%</span></h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" width="80%"
                    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">Financial Support <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" width="95%"
                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
              <div className="progress-info info3 mb-0">
                <h6 className="progress-tittle">Online reporting <span className="">90%</span></h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" width="90%"
                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Improvement