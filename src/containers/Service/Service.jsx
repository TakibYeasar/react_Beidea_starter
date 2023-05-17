import React from 'react';
import "./Service.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaBattleNet, FaBusinessTime, FaChartPie, FaChess, FaDiceD20, FaEdit } from "react-icons/fa";

const Service = () => {
  return (
    <section className="service-sec py-5">
      <div className="container py-md-5 py-4">
        <div className="title-main text-center mx-auto mb-sm-5 mb-4" >
          <p className="text-uppercase text-white">Services</p>
          <h3 className="title-style text-white">Check <span>our</span> Services</h3>
        </div>
        <div className="row main-cont-wthree-2 justify-content-center">
          <div className="col-lg-7 feature-grid-right">
            <div className="call-grids d-grid">
              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaChartPie />
                </div>
                <h4><a href="/services" className="title-head">
                  Digital Solution</a></h4>
              </div>

              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaEdit />
                </div>
                <h4><a href="/services" className="title-head">
                  Business Planing</a></h4>
              </div>

              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaDiceD20 />
                </div>
                <h4><a href="/services" className="title-head">
                  Creative Strategy</a></h4>
              </div>

              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaBattleNet />
                </div>
                <h4><a href="/services" className="title-head">
                  Branding Businesss</a></h4>
              </div>

              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaBusinessTime />
                </div>
                <h4><a href="/services" className="title-head">
                  Marketing Policy</a></h4>
              </div>

              <div className="grids-1 box-wrap">
                <div className="icon">
                  <FaChess />
                </div>
                <h4><a href="/services" className="title-head">
                  StartUp Business</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service