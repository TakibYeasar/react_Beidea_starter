import React from 'react';
import "./Stats.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Stats = () => {
  return (
    <section className="stats-sec py-5" id="stats">
      <div className="container py-md-5 py-4">
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <div className="counter">
                <div className="timer count-title count-number" data-to="5100" data-speed="1500"></div>
                <p className="count-text">Activate Project</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter">
                <div className="timer count-title count-number" data-to="971" data-speed="1500"></div>
                <p className="count-text">Expert Team</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="counter">
                <div className="timer count-title count-number" data-to="7600" data-speed="1500"></div>
                <p className="count-text">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="counter border-right-0">
                <div className="timer count-title count-number" data-to="367" data-speed="1500"></div>
                <p className="count-text">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Stats