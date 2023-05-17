import React from 'react';
import "./Features.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaGem, FaLightbulb, FaUserLock } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features-sec py-5">
      <div className="container py-md-5 py-4">
        <div className="title-main text-center mx-auto mb-5">
          <p className="text-uppercase">Features</p>
          <h3 className="title-style">We are <span>Best</span> Marketing Agency </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 grids-feature">
            <div className="area-box">
              <FaUserLock className="icon" />
              <h4><a href="/about" className="title-head">Strong Security</a></h4>
              <p className="box-content">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                sed et dolor amet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-5">
            <div className="area-box">
              <FaLightbulb className="icon" />
              <h4><a href="/about" className="title-head">Creative Idea</a></h4>
              <p className="box-content">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                sed dolor et amet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
            <div className="area-box">
              <FaGem className="icon" />
              <h4><a href="/about" className="title-head">Best Service</a></h4>
              <p className="box-content">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                sed dolor et amet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features