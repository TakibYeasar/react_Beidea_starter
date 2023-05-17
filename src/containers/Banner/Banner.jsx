import React from 'react';
import "./Banner.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import banner1 from "../../assets/images/banner1.png";

const Banner = () => {
  return (
    <section className="banner-sec d-flex">
      <div className="container">
        <div className="row mt-md-0 mt-sm-4 align-items-center">
          <div className="col-md-6 banner-content mt-md-0 mt-5 pt-md-0 pt-5">
            <h1 className="banner-style">An Idea Changes Everything!</h1>
            <div className="button mt-5 pt-sm-2">
              <a href="/about" className="btn-style">Get Started</a>
              <a href="/contact" className="btn-style-normal ml-2"> Contact Us</a>
            </div>
          </div>
          <div className="col-md-6 banner-img">
            <img src={banner1} alt="#" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner