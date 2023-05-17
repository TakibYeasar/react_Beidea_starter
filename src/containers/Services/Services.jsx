import React from 'react';
import "./Services.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaAtlassian, FaChalkboardTeacher, FaClone, FaGem, FaHeadset, FaLaptopCode, FaLayerGroup, FaLightbulb, FaUserLock } from "react-icons/fa";
import ab3 from "../../assets/images/ab3.png";

const Services = () => {
  return (
      <section className="services-sec">
          <div className="inner-banner">
              <div className="w3l-breadcrumb">
                  <div className="container">
                      <h4 className="inner-text-title font-weight-bold">Services</h4>
                      <ul className="breadcrumbs-custom-path">
                          <li><a href="/">Home</a></li>
                          <li className="active"><FaAngleDoubleRight className="icon" />Services</li>
                      </ul>
                  </div>
              </div>
          </div>

          <section className="service-features py-5">
              <div className="container py-md-5 py-4">
                  <div className="title-main text-center mx-auto mb-5">
                      <p className="text-uppercase">Features</p>
                      <h3 className="title-style">What We <span>Do </span> For you</h3>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-6 grids-feature">
                          <div className="area-box">
                              <FaUserLock className="icon" />
                              <h4><a href="/about" className="title-head">Strong Security</a></h4>
                              <p className="">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                  sed et dolor amet.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 grids-feature mt-5">
                          <div className="area-box">
                              <FaLightbulb className="icon" />
                              <h4><a href="/about" className="title-head">Creative Idea</a></h4>
                              <p className="">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                  sed dolor et amet.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                          <div className="area-box">
                              <FaGem className="icon" />
                              <h4><a href="/about" className="title-head">Best Service</a></h4>
                              <p className="">Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                  sed dolor et amet.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="service2-section py-5">
              <div className="container py-md-5 py-4">
                  <div className="row mt-4">
                      <div className="col-lg-4 col-md-6">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaLaptopCode className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">Web Development</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaAtlassian className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">UI/UX Design</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaClone className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">Custom Redesign</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-4">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaLayerGroup className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">Web Applications</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-4">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaChalkboardTeacher className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">Expert Advice</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-4">
                          <div className="services-main-content d-flex">
                              <div className="services-icon mr-3">
                                  <FaHeadset className="icon" />
                              </div>
                              <div className="services-content">
                                  <h5 className="mb-sm-3 mb-2"><a href="#services">Consultation Call</a></h5>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                                      laudan.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="service-3-section py-5">
              <div className="content-4-main py-md-5 py-4">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className=" col-lg-6">
                              <img src={ab3} alt="" className="img-fluid" />
                          </div>
                          <div className="col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <div className="content4-right-info mb-4 pb-2">
                                  <h6><a href="#url">
                                      1. Marketing Services</a>
                                  </h6>
                                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                      consectetur
                                      adipisicing.</p>
                              </div>
                              <div className="content4-right-info mb-4 pb-2">
                                  <h6><a href="#url">
                                      2. 24/7 Call Center Service</a>
                                  </h6>
                                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                      consectetur
                                      adipisicing.</p>
                              </div>
                              <div className="content4-right-info">
                                  <h6><a href="#url">
                                      3. Social Media Marketing</a>
                                  </h6>
                                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                      consectetur
                                      adipisicing.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </section>
  )
}

export default Services